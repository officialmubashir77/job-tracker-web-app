const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const port = 3000 || process.env.PORT;

// Import routes
const userRoutes = require("./routes/user.routes.js");

// Connect to MongoDB database
const connectDB = require("./config/db.js");
connectDB();

// Middleware to parse JSON request bodies
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/auth", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
