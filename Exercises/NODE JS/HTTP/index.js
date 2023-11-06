const http = require("http");
const { json } = require("stream/consumers");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ texto: "<h1>Hello World!</h1>" }));
  })
  .listen(3000, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Servidor rodando na porta 3000");
    }
  });
