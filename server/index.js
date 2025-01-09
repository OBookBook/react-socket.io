// @Doc https://socket.io/docs/v4/tutorial/step-1
const express = require("express");
const { createServer } = require("node:http");
// @Doc https://socket.io/docs/v4/tutorial/step-3
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);

const io = new Server(server);

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

io.on("connection", (socket) => {
  console.log("a user connected" + "socket-id" + socket.id);

  socket.io("disconnect", () => {
    console.log("a user disconnected" + "socket-id" + socket.id);
  });
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
