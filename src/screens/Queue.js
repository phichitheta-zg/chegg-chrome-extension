import React from "react";

export default class Queue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onlineUsers: [
        {
          name: "Carley Peldiak",
          loggedIn: true
        }
      ],
      queue: [
        {
          name: "Lam Tran",
          loggedIn: false
        },
        {
          name: "Evan Eckels",
          loggedIn: false
        }
      ]
    };
  }

  render() {
    return (
      <div
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          padding: 10
        }}
      >
        {this.state.onlineUsers.map(user => (
          <div
            style={{
              flex: 1,
              width: "200px",
              height: "30px",
              backgroundColor: "rgba(122, 122, 122, 0.1)",
              border: "none",
              borderRadius: "5px",
              textAlign: "center",
              alignItems: "center",
              fontSize: "13px"
            }}
          >
            <p>{user.name}</p>
          </div>
        ))}

        {this.state.queue.map(user => (
          <div
            style={{
              flex: 1,
              width: "200px",
              height: "30px",
              backgroundColor: "rgba(122, 122, 122, 0.1)",
              border: "none",
              borderRadius: "5px",
              textAlign: "center",
              alignItems: "center",
              fontSize: "13px"
            }}
          >
            <p>{user.name}</p>
          </div>
        ))}
      </div>
    );
  }
}
