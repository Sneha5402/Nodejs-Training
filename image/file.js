const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();
app.use(fileUpload({
    limits: { 
        fileSize: 100 * 1024 * 1024 // 100 MB
    }
}));


app.post('/upload', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let image = req.files.image;
    image.mv('./uploads/' + image.name, (err) => {
        if (err) return res.status(500).send(err);
        res.send('File uploaded!');
    });
});

// Post request for uploading single or multiple images
app.post('/uploads', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let images = req.files.images;
    if (!Array.isArray(images)) {
        images = [images];
    }

    images.forEach((image) => {
        image.mv('./uploads/' + image.name, (err) => {
            if (err) return res.status(500).send(err);
        });
    });

    res.send('Files uploaded!');
});

app.listen(3000, () => console.log('Server started'));
