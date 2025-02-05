const express = require('express');
const app = express();

// Middleware 1
app.use((req, res, next) => {
    console.log('Middleware 1: Request received');
    next(); // Pass control to the next middleware
});

// Middleware 2
app.use((req, res, next) => {
    console.log('Middleware 2: Processing request');
    next(); // Pass control to the next middleware
});

// Route Handler
app.get('/', (req, res) => {
    console.log('Route Handler: Sending Response');
    res.send('Hello, World!');
});

// Start Server
app.listen(3000, () => console.log('Server running on port 3000'));
