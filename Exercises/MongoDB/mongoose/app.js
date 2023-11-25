const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const linkRoute = require("./routes/linkRoute.js");
const path = require("path");

mongoose
  .connect("mongodb://localhost/links")
  .then(() => {
    console.log();
  })
  .catch((error) => {
    console.log(error);
  });

let db = mongoose.connection;
db.on("error", () => {
  console.log("Houve um erro");
});
db.once("open", () => {
  console.log("Banco carregado");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));

app.use("/", linkRoute);

// let link = new Link({
//   title: "raiffe github",
//   description: "link para meu portifólio",
//   url: "github.com/raiffemoura",
// });

// link
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const personSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
// });

// const Person = mongoose.model("Person", personSchema);

// let person = new Person({ name: "Raiffe", age: 30 });
// person.save().then((doc) => {
//   console.log(doc);
// });

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
