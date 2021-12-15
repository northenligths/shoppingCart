import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";

export default function SingleProduct({ prod }) {
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
          <Button variant="danger">Remove from cart</Button>
          <Button disabled={!prod.inStock}>
            {/* disabled button if product not in stock */}
            {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            {/* Render text according to product availability */}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
