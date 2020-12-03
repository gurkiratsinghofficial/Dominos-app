import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import pizzaImage from "../../../images/pizza.png";
import { MySelect } from "../../../helpers/inputs";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { openModal, addToCart } from "../../../features/Pizza/PizzaSlice";
import arrow from "../../../images/arrow.png";
import Strings from "../../../constants/constants";
/**
 * @description:JSX for card to be displayed inside menu
 * @param {object} props
 */
function PizzaCard(props) {
  const dispatch = useDispatch();
  const { item } = props;

  return (
    <div className="pizza-card-div">
      <Card
        style={{
          width: "16rem",
          height: "20rem",
          boxShadow: "3px 2px 4px grey",
        }}
      >
        <Card.Img variant="top" src={pizzaImage} />
        <Card.ImgOverlay>
          <div className="pizza-card-overlay">
            <h5 className="pizza-card-price"></h5>
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
        <div alt="pizza-img" className="pizza-card-body">
          <Card.Title>{item.name}</Card.Title>
          <p>
            <small>{item.description}</small>
          </p>
          <Formik
            initialValues={{
              size: item.sizes[0].size,
              crust: item.crusts[0].crust,
            }}
            validationSchema={Yup.object({
              size: Yup.string().required(Strings.SELECT_SIZE),
              crust: Yup.string().required(Strings.SELECT_CRUST),
            })}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(addToCart({ item: item, values: values }));
            }}
          >
            <>
              <Form>
                <div className="pizza-card-options">
                  <MySelect name="size">
                    {item.sizes.map((size, index) => (
                      <option key={index} value={size.size} price={size.price}>
                        {size.size}-{size.price}
                      </option>
                    ))}
                  </MySelect>
                  <MySelect style={{ width: "7vw" }} name="crust">
                    {item.crusts.map((crust, index) => (
                      <option
                        key={index}
                        value={crust.crust}
                        price={crust.price}
                      >
                        {crust.crust}-{crust.price}
                      </option>
                    ))}
                  </MySelect>
                </div>
                <div className="pizza-card-add-div">
                  <Button
                    size="sm"
                    className="pizza-card-add"
                    variant="outline-success"
                    type="submit"
                  >
                    {Strings.ADD_TO_CART}
                  </Button>
                </div>
              </Form>
            </>
          </Formik>
        </div>
      </Card>
    </div>
  );
}

export default PizzaCard;
