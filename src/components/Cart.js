import React, { useState, useEffect } from "react";
import { Col, FormControl, Image, ListGroup, Row } from "react-bootstrap";
import { CartState } from "../context/Context";
import { Button } from "react-bootstrap";
import Rating from "./Rating";
import { AiFillDelete } from "react-icons/ai";

export default function Cart() {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  //using useState and useEffect to calculate total price
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    ); //using qty to display to price according to total items in cart,qty is specified in reducer
  }, [cart]);
  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>Rs {prod.price}</Col>
                <Col md={2}>
                  <Rating rating={prod.ratings} />
                </Col>
                <Col md={2}>
                  <FormControl
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        }, //this will change the qty of the items in cart
                      })
                    }
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </FormControl>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />{" "}
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className="filters summary">
          <span className="title">Subtotal({cart.length}) items</span>
          {/* display total items in the cart */}
          <span style={{ fontWeight: 700, fontSize: 20 }}>Total:Rs{total}</span>
          <Button type="button" disabled={cart.length === 0}>
            Proceed To Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
