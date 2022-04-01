import React, { Component } from "react";

export default class card extends Component {
  state = {
    toggle: false,
  };

  render() {
    return (
      <div className="card">
        <div className="title">
          <div
            className="first"
            onClick={() => {
              this.setState({
                toggle: !this.state.toggle,
              });
            }}
          >
            <h1>Title</h1>
            <div className="background"></div>
          </div>
        </div>

        {this.state.toggle && (
          <div className="card-body" style={{ color: "#FFF" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            content
          </div>
        )}
      </div>
    );
  }
}
