import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice/cartSlice";
import { fetchAllProducts } from "../../store/productSlice/serviceProductSlice";

import "./HomePage.css";
const HomePage = () => {
  const dispatch = useDispatch();
  const { productList, status } = useSelector((state) => state.productSlice);
 
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  if (status === "pending") {
    return <h1>Loading...</h1>;
  }

  if (status === "success") {
    return (
      <div>
        <Container>
          <Row className="product-row">
            {productList.length > 0 ? (
              productList.map((product) => (
                <Col
                  key={product.id}
                  xs={12}
                  md={6}
                  lg={4}
                  xl={3}
                  className="product-col"
                >
                  <p>{product.name}</p>
                  <img
                    className="product-image"
                    src={product.avatar}
                    alt="product-avatar"
                  />
                  <p>$ {product.price}</p>
                  <Button
                    onClick={() => dispatch(addToCart(product))}
                    className="add-to-dart-button"
                  >
                    Add To Cart
                  </Button>
                </Col>
              ))
            ) : (
              <h1 className="error-message">{productList.message}</h1>
            )}
          </Row>
        </Container>
      </div>
    );
  }
};

export default HomePage;
