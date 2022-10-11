const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
// database connection is here
mongoose
  .connect(`${process.env.MONGO_URI}`)
  .then(() => console.log("connection success"))
  .catch((err) => console.log("error", err));


// create all routes here
// app.use("/todo", todoHandler);




// All default error handling fn
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  } else {
    res.status(500).json({ error: err });
  }
}
app.use(errorHandler);
app.listen(4000, () => {
  console.log("app is listening on port 4000");
});
