import React from "react";

export default class LoginButton extends React.Component {
  constructor(props) {
    super(props);
  }

  renderOnlineUser = () => {
    return (
      <div
        style={{
          display: "flex",
          width: "200px",
          height: "30px",
          backgroundColor: "rgba(250, 202, 98, 0.849)",
          border: "none",
          borderRadius: "5px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "13px",
          marginBottom: 10
        }}
      >
        <p>{this.props.user.name}</p>
      </div>
    );
  };

  renderLoginButton = () => {
    return (
      <div
        style={{
          display: "flex",
          width: "200px",
          height: "30px",
          backgroundColor: "rgba(133, 250, 98, 0.769)",
          border: "none",
          borderRadius: "5px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "13px",
          marginBottom: 10
        }}
      >
        <p> Log in now! </p>
      </div>
    );
  };

  render() {
    return <div>{this.props.user.name ? this.renderOnlineUser() : this.renderLoginButton()}</div>;
  }
}
