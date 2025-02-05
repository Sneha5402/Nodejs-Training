const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/upload', (req, res) => {
  const token = req.headers['authorization'];

  res.send({
    message: 'File uploaded successfully!',
    token: token
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
