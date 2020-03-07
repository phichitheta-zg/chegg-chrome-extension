import React from "react";

export default class QueueTab extends React.Component {
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
          backgroundColor: "rgba(253, 222, 114, 0.87)",
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
  }
}
