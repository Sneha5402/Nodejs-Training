const express = require('express');
const app = express();
const port = 3000;

// Route to handle GET request with query parameters
app.get('/users', (req, res) => {
  const { status, page, limit } = req.query;
  res.send({
    message: `Fetching users with status: ${status}, page: ${page}, limit: ${limit}`
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
