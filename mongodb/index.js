const express = require("express");
const mongoose = require("mongoose");
const todoHandler = require("./routeHandler/todoHandler");

// express app initialization
const app = express();
app.use(express.json());

// database connection with mongoose
// const mongoURI = "mongodb://localhost:27017/todos"
const mongoURI = "mongodb://127.0.0.1:27017/todos"
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(error => {
  console.error('Error connecting to MongoDB:', error);
});

// application routes
app.use("/todo", todoHandler);

// default error handler
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

app.listen(3000, () => {
  console.log("app listening at port 3000");
});