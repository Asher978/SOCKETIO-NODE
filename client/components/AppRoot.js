import React, { Component } from "react";
import io from "socket.io-client";

// random color helper
function selectColor(colorNum, colors) {
  if (colors < 1) colors = 1;
  return "hsl(" + ((colorNum * (360 / colors)) % 360) + ",100%,50%)";
}

export default class AppRoot extends Component {
  state = {
    client: null,
    myData: []
  };
  componentDidMount() {
    this.socket = io.connect("http://localhost:3334");
    this.socket.on("connect", () => {
      this.setState({ client: this.socket });
    });

    this.socket.on("TIMEREVENT", data => {
      this.setState(prevState => ({
        myData: [...prevState.myData, data]
      }));
    });
  }

  renderSocketServerData = () => {
    const { myData } = this.state;
    if (myData.length) {
      return myData.map((item, i) => {
        return (
          <li
            key={i}
            style={{
              color: `${selectColor(12, item)}`
            }}
          >
            Data received from socketserver ---> {item}
          </li>
        );
      });
    }
  };
  render() {
    return (
      <div>
        <h1>Socket.Io</h1>
        <h2>My Socket Id is:</h2>
        <p>{this.state.client ? this.state.client.id : "Not Connected Yet"}</p>
        <ul>{this.renderSocketServerData()}</ul>
      </div>
    );
  }
}
