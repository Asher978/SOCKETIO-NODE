/**
 *
 * @param {*} socket
 * this gets fired on "connection"
 */
export default function connectionHandler(socket) {
  // this is the client connecting from the frontend
  console.log(`SOCKET CONNECTED WITH ID---> ${socket.id}`);

  // event that gets fired every 10 secs, once a socket joins
  setInterval(function() {
    var randomNum = Math.floor(Math.random() * 100);
    socket.emit("TIMEREVENT", randomNum);
  }, 1000);
}
