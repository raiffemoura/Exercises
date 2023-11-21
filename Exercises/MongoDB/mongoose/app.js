const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  url: { type: String, required: true },
  click: { type: Number, default: 0 },
});

const Link = mongoose.model("Link", linkSchema);

let link = new Link({
  title: "raiffe github",
  description: "link para meu portifólio",
  url: "github.com/raiffemoura",
});

link
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log(err);
  });

// const personSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
// });

// const Person = mongoose.model("Person", personSchema);

// let person = new Person({ name: "Raiffe", age: 30 });
// person.save().then((doc) => {
//   console.log(doc);
// });

mongoose
  .connect("mongodb://localhost/links")
  .then(() => {
    console.log();
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
