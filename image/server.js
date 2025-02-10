const express = require('express');
const { singleUpload, multipleUpload, fieldsUpload, anyUpload } = require('./middleware/uploadMiddleware');

const app = express();
const port = 3000;

// Single file upload route
app.post('/upload', singleUpload, (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded.' });
  }
  res.status(200).json({
    message: 'File uploaded successfully!',
    file: req.file
  });
});

// Multiple image upload route (max 2)
app.post('/uploads', multipleUpload, (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: 'No files uploaded.' });
  }
  res.status(200).json({
    message: 'Files uploaded successfully!',
    files: req.files
  });
});

// Multiple fields upload route (profile & cover images)
app.post('/multi', fieldsUpload, (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ error: 'No files uploaded.' });
  }
  res.status(200).json({
    message: 'Files uploaded successfully!',
    files: req.files
  });
});

// Upload any files
app.post('/uploadany', anyUpload, (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: 'No files uploaded.' });
  }
  res.status(200).json({
    message: 'Files uploaded successfully!',
    files: req.files
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
