const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors= require("cors")

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:"http://localhost:3000",
  credentials:true
}));
// Static folder for serving cover pictures
app.use('/uploads', express.static('uploads'));

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}
// import routes
const userRoutes = require('./routes/user');
const bookRoutes = require('./routes/bookRoute');
// User routes
app.use('/api/users', userRoutes);

app.use('/api/books', bookRoutes);
// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;