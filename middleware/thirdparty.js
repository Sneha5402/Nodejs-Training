const express = require('express');
const app = express();

// app.use(express.json());

// app.post('/data', (req, res) => {
//     // console.log( req)
//     console.log('Received Data:', req.body);
//     console.log(typeof req.body)
//     res.json({ message: 'Received data', data: req.body });
// });




app.use(express.urlencoded({ extended: true }));

app.post('/data', (req, res) => {
    console.log(typeof req)
    console.log(req.body);
    res.json({ received: req.body });
    console.log(typeof req.body)
});

// app.use(express.text()); 

// app.post('/data', (req, res) => {

//     console.log(typeof req) ;
//     console.log(req.constructor.name);   
//     console.log('Received Content-Type:', req.get('content-type'));
//     console.log('Received Body:', req.body);
//     console.log(typeof req.body)

//     res.json({ message: 'Received data', data: req.body });
// });

// app.post('/data', (req, res) => {
//     if (!req.body || Object.keys(req.body).length === 0) {
//         return res.status(400).json({ error: 'Invalid or empty body' });
//     }

//     console.log('Received Content-Type:', req.get('content-type'));
//     console.log('Received Body:', req.body);

//     res.json({ message: 'Received data', data: req.body });
// });


app.listen(3000, () => console.log('Server running on port 3000'));
