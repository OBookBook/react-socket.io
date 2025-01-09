const express = require("express"); // @Doc https://socket.io/docs/v4/tutorial/step-1
const { createServer } = require("node:http");
const { Server } = require("socket.io"); // @Doc https://socket.io/docs/v4/tutorial/step-3

const app = express();
const server = createServer(app);
const io = new Server(server, {
  // @Doc https://socket.io/docs/v4/handling-cors/
  cors: {
    origin: "http://localhost:5173",
  },
});

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

io.on("connection", (socket) => {
  console.log("a user connected:" + "socket-id" + socket.id);

  socket.on("disconnect", () => {
    console.log("a user disconnected:" + "socket-id" + socket.id);
  });
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
