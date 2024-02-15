if (process.env.USER) require("dotenv").config();

const cors = require("cors");
const express = require("express");
const app = express();
const moviesRouter = require("./movies/movies.router");
const theatersRouter = require("./theaters/theaters.router");
const reviewsRouter = require("./reviews/reviews.router");
const errorHandler = require("./errors/errorHandler");
const notFoundHandler = require("./errors/notFoundHandler");


app.use(express.json());
app.use(cors())

app.use("/movies", moviesRouter);
app.use("/theaters", theatersRouter);
app.use("/reviews", reviewsRouter);


// Not found handler
app.use(notFoundHandler);

// Error handler
app.use(errorHandler);

module.exports = app;
