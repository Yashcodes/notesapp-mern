const mongoose = require("mongoose");

//Set up default mongoose connection
mongoose.set("strictQuery", true);
const url =
  "mongodb+srv://yashParihar:juWOvBsZ3ni9Suce@notesapp-mern.ugl44ya.mongodb.net/notesapp-mern";

module.exports = mongoConnect = () => {
  mongoose.connect(url, () => {
    console.log("Mongo Connected Successfully");
  });
};
