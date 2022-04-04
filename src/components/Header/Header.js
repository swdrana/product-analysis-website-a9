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
        className="d-flex justify-content-between align-items-center px-5 py-4 my-nav"
      >
        <h1 className="m-0" style={{'color':'orangered'}}>Book Review</h1>
        <div className="d-flex ">
          <Nav.Item>{/* <Nav.Link href="/home">Home</Nav.Link> */}</Nav.Item>
          <Nav.Item>{/* <Nav.Link href="order">Order</Nav.Link> */}</Nav.Item>
          <Link to="/home">Home</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/about">About</Link>
        </div>
      </Nav>
    </div>
  );
};

export default Header;
