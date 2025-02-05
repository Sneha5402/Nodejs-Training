const express = require('express');
const app = express();

const getUser = () => undefined;


// Route Handler
app.get('/test', async(req, res) => {
    try{
        const user = getUser();
        if(!user){
            throw new Error("User not found");
        }
    } catch(error){
        console.log(error);
        return res.status(400).send(error.message)
    }

   return  res.status(200).json({success:true});
});

// Start Server
app.listen(3000, () => console.log('Server running on port 3000'));
