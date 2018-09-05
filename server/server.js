import http from "http";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import Session from "express-session";
import morgan from "morgan";
import SocketIO from "socket.io";

import connectionHandler from "./sockets";

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3050;

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Session.
const session = Session({
  resave: true,
  saveUninitialized: true,
  key: "your key here",
  secret: "your secret here"
});
app.use(session);

// Logging (debug only).
app.use(morgan("dev"));

/**
-----------------------------------------------
----------- SOCKET-IO SERVER SETUP  ----------
-----------------------------------------------
*/
const socketServer = http.createServer();
const socketPort = 3334;
const io = SocketIO(socketServer);

// auth middleware if anyone cares to use it
io.use((socket, next) => {
  session(socket.handshake, {}, next);
});

/**
 * connectionHandler  - eventListener
 */
io.on("connection", connectionHandler);

server.listen(port);
socketServer.listen(socketPort);
console.log(`🌐  Express Server listening on port ${port}`);
console.log(`🌐  Socket Server listening on port ${socketPort}`);
