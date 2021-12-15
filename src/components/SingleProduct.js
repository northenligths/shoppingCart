import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";
import { CartState } from "../context/Context";

export default function SingleProduct({ prod }) {
  const {
    state: { cart },
    dispatch, //dispatch triggers the action which then decides which action to perform whether to delete to an item or to add an item
  } = CartState();
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>Rs {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? ( //here we are checking if the product is fast delivery and rendering text according to the condition
              <div>Fast Delivery</div>
            ) : (
              <div>4 days Delivery</div>
            )}
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? ( // some checks whether the given item is in the array or not
            <Button
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                });
              }}
              variant="danger"
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch({
                  type: "ADD_T0_CART",
                  payload: prod,
                });
              }}
              disabled={!prod.inStock}
            >
              {/* disabled button if product not in stock */}
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
              {/* Render text according to product availability */}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
