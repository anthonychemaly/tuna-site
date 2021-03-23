import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

export default class index extends Component {
  render() {
    return (
      <Navbar
        style={{ backgroundColor: "#EFEFEF" }}
        //  bg="dark" variant="dark"
      >
        <Navbar.Brand href="#home">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              alt=""
              src="https://svgshare.com/i/VH1.svg"
              width="60"
              height="60"
              className="d-inline-block align-top"
              style={{ marginRight: "10%" }}
            />
            <p style={{ fontSize: 50, fontFamily: "Montserrat",color:"#CF222A" }}>Tuna</p>
          </div>
        </Navbar.Brand>
      </Navbar>
    );
  }
}
