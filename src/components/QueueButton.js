import React from "react";

export default class QueueButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          width: "200px",
          height: "30px",
          backgroundColor: "rgba(122, 122, 122, 0.1)",
          border: "none",
          borderRadius: "5px",
          color: "grey",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          marginBottom: 10
        }}
      >
        <p>+</p>
      </div>
    );
  }
}
