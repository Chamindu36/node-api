const express = require('express');
const morgan = require('morgan');
const dotenv  = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator =  require('express-validator');
const app = express();

// Get Config
dotenv.config();

// Connect DB
mongoose.connect(process.env.MONGO_URI).
    then(() => console.log('Database Connected'))

mongoose.connection.on('error', err => {
    console.log(`DB Connection Error: ${err.message}`);
})

// Bring in routes
const postRoutes = require("./routes/post");

// Create our own middleware
const myOwnMiddleware = (req,res,next) => {
    console.log("MiddleWare applied!!!");
    next();
};

//Add middleware
app.use(morgan("dev"));
app.use(myOwnMiddleware);
app.use(bodyParser.json());
app.use("/", postRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`A Node Js API is listening on port: ${port}`);
});
