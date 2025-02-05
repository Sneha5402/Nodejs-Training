const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World! Welcome to my Express server.');
});

app.get('/about', (req, res) => {
    res.send('This is the About page.');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
