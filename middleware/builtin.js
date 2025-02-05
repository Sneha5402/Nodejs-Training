const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser()); // Enable cookie parsing

app.get('/set-cookie', (req, res) => {
    res.cookie('username', 'john_doe'); 
    res.send('Cookie has been set!');
});

app.get('/get-cookie', (req, res) => {
    console.log(req.cookies); 
    res.send(`Cookies: ${JSON.stringify(req.cookies)}`);
});

app.listen(3000, () => console.log('Server running on port 3000'));
