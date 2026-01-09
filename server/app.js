import { WebSocketServer } from "ws";

const server = new WebSocketServer({ port: 5001 });

const greeting = JSON.stringify({
  content: "Hello World",
  id: "greet-0",
  senderId: "0",
});

server.on("connection", (socket) => {
  socket.send(greeting);

  socket.on("message", (message) => {
    const clientMessage = JSON.parse(message);
    // DATA IS NOT 100% CORRECT RIGHT NOW
    socket.send(
      JSON.stringify({ content: clientMessage.content.toUpperCase() })
    );
  });
});
