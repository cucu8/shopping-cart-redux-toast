import React, { useEffect, useState } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../store/cartSlice/cartSlice";

import "./ShoppingCart.css";
const ShoppingCart = () => {
  const { cartItems } = useSelector((state) => state.cartSlice);
  let total1 = 0;
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const totalCost = (value) => {
    if (cartItems.length > 0) {
      for (let i = 0; i < cartItems.length; i++) {
        total1 += parseInt(cartItems[i].price * cartItems[i].cartQuantitiy);
        setTotal(total1);
      }
    } else {
      setTotal(0);
    }
  };

  useEffect(() => {
    totalCost();
    
  }, [cartItems]);
  return (
    <div>
      <h1>Shopping Cart</h1>
      <Container>
        <Row className="cart-row">
          <Col xs={12} md={6} lg={3}>
            <h4>PRODUCT</h4>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h4>PRİCE</h4>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h4> QUANTİTY</h4>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h4>TOTAL</h4>
          </Col>
        </Row>
        {cartItems.map((item) => (
          <Row key={item.id} className="row-items">
            <Col xs={12} md={6} lg={3}>
              <h6>{item.name}</h6>
              <img
                className="cart-avatar"
                src={item.avatar}
                alt="cart avatar"
              />
              <p>{item.description}</p>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <h4>$ {item.price}</h4>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <h4>{item.cartQuantitiy}</h4>
            </Col>
            <Col xs={12} md={6} lg={3}>
              Total:$ {item.price * item.cartQuantitiy}
            </Col>
          </Row>
        ))}
        <div className="total">
          <Button
            className="clear-button"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </Button>
          <span>Total:{total}</span>
        </div>
      </Container>
    </div>
  );
};

export default ShoppingCart;
