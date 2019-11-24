import React from "react";
import PCTLogo from "../assets/PCT-logo.png";

export default class Home extends React.Component {
  render() {
    return (
      <div style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <img src={PCTLogo} className="App-logo" alt="logo" />
        <p>Welcome to Phi Chi Theta! </p>
      </div>
    );
  }
}
