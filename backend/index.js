const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;

// Connect to MongoDB database
const connectDB = require('./config/db.js');
connectDB();

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/api/health', (req, res) => {
    res.send({
        status: 'OK',
        message: 'Server is healthy'
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});