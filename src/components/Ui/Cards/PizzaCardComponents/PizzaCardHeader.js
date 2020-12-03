import React from "react";
import { openModal } from "../../../../features/Pizza/PizzaSlice";
import arrow from "../../../../images/arrow.png";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

function PizzaCardHeader({ item }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Card.Img variant="top" src={item.imageSRC} />
      <Card.ImgOverlay>
        <div className="pizza-card-overlay">
          <h5 className="pizza-card-price">.</h5>
          <Button
            variant="light"
            size="sm"
            style={{ height: "1%", padding: "0" }}
            onClick={() => {
              dispatch(openModal(item));
            }}
          >
            Customise
            <img width="15" height="15" alt="arrow" src={arrow}></img>
          </Button>{" "}
        </div>
      </Card.ImgOverlay>
    </div>
  );
}

export default PizzaCardHeader;
