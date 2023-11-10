const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

let users = [
  { id: 0, name: "Raiffe", phone: "(83)9 8877-6655" },
  { id: 1, name: "Pathy", phone: "(83)9 8877-6655" },
  { id: 2, name: "Sophia", phone: "(83)9 8877-6655" },
  { id: 3, name: "Lorena", phone: "(83)9 8877-6655" },
];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("user", { users });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
