const express = require("express");
const app = express();
const path = require("path");
const socketIO = require("socket.io");

// const list = ["jose", "Joao", "Maria"];
// console.log(list);

// setTimeout(() => {
//   list.push("pedro");
//   console.log(list);
// }, 5000);

// app.get("/list", (req, res) => {
//   res.send(list);
// });

app.use("/", express.static(path.join(__dirname, "public")));

const server = app.listen(3000, () => {
  console.log("running");
});

const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("New Connection");

  socket.broadcast.emit("hello", { msg: `Chegou um novo usuario` });
});
