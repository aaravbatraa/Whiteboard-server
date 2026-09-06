const { WebSocketServer } = require("ws");
const http = require("http");

const port = process.env.PORT || 1234;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Whiteboard sync server is running");
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws, req) => {
  import("y-websocket-server/utils").then(({ setupWSConnection }) => {
    setupWSConnection(ws, req);
  });
});

server.listen(port, () => {
  console.log(`Sync server listening on port ${port}`);
});