import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <Nav
        variant="pills"
        defaultActiveKey="/home"
        className="d-flex justify-content-between px-5"
      >
        <h1>Education</h1>
        <div className="d-flex">
          <Nav.Item>
          <Link to='/home'>Home</Link>
            {/* <Nav.Link href="/home">Home</Nav.Link> */}
          </Nav.Item>
          <Nav.Item>
              <Link to='/order'>Order</Link>
            {/* <Nav.Link href="order">Order</Nav.Link> */}
          </Nav.Item>
        </div>
      </Nav>
    </div>
  );
};

export default Header;
