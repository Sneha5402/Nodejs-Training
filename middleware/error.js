const express = require('express');
const app = express();

app.use(express.json());

const mockUsers = [
    { username: 'validUser', password: 'correctPassword' },
    { username: 'testUser', password: 'testPassword' }
];

// Middleware applied only to the login route
app.post('/login', (req, res, next) => {
    console.log(typeof req)
    const { username, password } = req.body;

    // Condition 1: Check if the username is invalid
    if (!mockUsers.some(user => user.username === username)) {
        return next(new Error('Invalid Username'));
    }
    
    // Condition 2: Check if the password is incorrect
    const user = mockUsers.find(user => user.username === username);
    if (user.password !== password) {
        return next(new Error('Wrong Password'));
    }

    res.send(`Welcome, ${username}! You have logged in successfully.`);
    console.log(typeof res)
});


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(`Error: ${err.message}`); 
    res.status(400).send({ error: err.message }); 
});

app.listen(3000, () => console.log('Server running on port 3000'));

