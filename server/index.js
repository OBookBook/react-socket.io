// @Doc https://socket.io/docs/v4/tutorial/step-1
const express = require("express");
const { createServer } = require("node:http");

const app = express();
const server = createServer(app);

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
