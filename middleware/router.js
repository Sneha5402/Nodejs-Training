const express = require('express');
const app = express();

// User Router
const userRouter = express.Router();

userRouter.use((req, res, next) => {
    console.log('User middleware triggered');
    next();
});

userRouter.get('/profile', (req, res) => {
    res.send('User Profile Page');
});

// Admin Router
const adminRouter = express.Router();

adminRouter.use((req, res, next) => {
    console.log('Admin middleware triggered');
    next();
});

adminRouter.get('/dashboard', (req, res) => {
    res.send('Admin Dashboard');
});

adminRouter.get('/settings', (req, res) => {
    res.send('Admin Settings');
});

// Attach Routers to Main Application
app.use('/user', userRouter);  
app.use('/admin', adminRouter); 

app.listen(3000, () => console.log('Server running on port 3000'));
