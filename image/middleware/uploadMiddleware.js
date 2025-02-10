const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure uploads directory exists
const uploadsDir = './uploads';
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Multer upload configurations for different scenarios
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB per file
  }
});

// Middleware for handling errors
const handleMulterErrors = (uploadHandler) => {
  return (req, res, next) => {
    uploadHandler(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        switch (err.code) {
            case 'LIMIT_FILE_EXCEEDS': 
            return res.status(400).json({ error: 'You have exceeded the maximum allowed file limit.' });
          case 'LIMIT_UNEXPECTED_FILE':
            return res.status(400).json({ error: 'Unexpected file field. Check your request parameters.' });
          case 'LIMIT_FILE_SIZE':
            return res.status(400).json({ error: 'File size exceeds 10MB limit.' });
          case 'LIMIT_FILE_COUNT':
            return res.status(400).json({ error: 'You can only upload up to 2 images.' });
          default:
            return res.status(400).json({ error: err.message });
        }
      } else if (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      next();
    });
  };
};

// Different upload handlers
const singleUpload = handleMulterErrors(upload.single('image')); 
const multipleUpload = handleMulterErrors(upload.array('images', 2));  
const fieldsUpload = handleMulterErrors(upload.fields([
  { name: 'profileImage', maxCount: 1 },
  { name: 'coverImage', maxCount: 2 }
]));  
const anyUpload = handleMulterErrors(upload.any());  

module.exports = {
  singleUpload,
  multipleUpload,
  fieldsUpload,
  anyUpload
};
