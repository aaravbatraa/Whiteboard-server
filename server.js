import { WebSocketServer } from "ws";
import http from "http";
import { setupWSConnection } from "@y/websocket-server/utils";

const port = process.env.PORT || 1234;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Whiteboard sync server is running");
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws, req) => {
  setupWSConnection(ws, req);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Sync server listening on port ${port}`);
});