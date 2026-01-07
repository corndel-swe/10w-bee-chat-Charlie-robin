import { WebSocketServer } from "ws";

const server = new WebSocketServer({ port: 5001 });

const greeting = JSON.stringify({
  content: "Hello from the server!",
});

server.on("connection", (socket) => {
  // THIS IS NOT THE DATA SCHEMA THE CLIENT EXPECTS
  socket.send(greeting);

  socket.on("message", (message) => {
    const clientMessage = JSON.parse(message);
    // THIS IS NOT THE DATA SCHEMA THE CLIENT EXPECTS
    socket.send(JSON.stringify({ content: clientMessage.content }));
  });
});
