const express = require("express");
const app = express();

app.get( "/",(req, res, next) => {
        console.log("hello");
        next();
},
(req, res) => {
        res.send(
            `<div>
                <h2>Welcome to GeeksforGeeks</h2>
                <h5>Tutorial on Middleware</h5>
            </div>`
        );
    }
);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

