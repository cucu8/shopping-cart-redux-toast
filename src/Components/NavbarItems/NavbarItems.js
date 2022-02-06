import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { shopIcon } from "../../Icons/ShopIcon";
import "./Navbar.css";

const NavbarItems = () => {
  const { cartItems } = useSelector((state) => state.cartSlice);
console.log(cartItems.length);
  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Link to="/" className="home-link">
            Online Shop
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="home-link">
                Home
              </Link>
            </Nav>
            <Nav>
              <Link className="shop-icon" to="/shopping-cart">
                {shopIcon}
                <span className="badge rounded-pill bg-danger">
                  {cartItems.length}
                </span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarItems;
