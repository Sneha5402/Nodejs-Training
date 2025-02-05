const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Set up Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/'); // Specify the folder to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate unique filename
  }
});

// Set limits on file size and number of files
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // Limit file size to 10MB
    files: 5// Limit number of files to 5
  }
});

// Create uploads directory if it doesn't exist
const fs = require('fs');
const uploadsDir = './uploads';
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}


// Route to handle image upload
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }else{
  res.send({
    message: 'File uploaded successfully!',
    file: req.file
  });
}
});
// Route to handle multiple image uploads
app.post('/uploads', upload.array('images', 2), async (req, res) => {
 
    if (!req.files || req.files.length === 0) {
      return res.status(400).send('No files uploaded.');
    }else{
      res.send({
        message: 'Files uploaded successfully!',
        files: req.files // Array of file info
      });
    }
  });
  app.post('/multi', upload.fields([
    { name: 'profileImage', maxCount: 1 },
    { name: 'coverImage', maxCount: 2}
  ]), (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files uploaded.');
    }else{
      res.send({
        message: 'Files uploaded successfully!',
        files: req.files,
      });
    }
  });
  
  
  app.post('/uploadany', upload.any(), (req, res) => {
    if (!req.files || req.files.length === 0) {
      return res.status(400).send('No files uploaded.');
    }else{
      res.send({
        message: 'Files uploaded successfully!',
        files: req.files,  
      });
    }
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
