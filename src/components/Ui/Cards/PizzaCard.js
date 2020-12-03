import React from "react";
import { Card } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/Pizza/PizzaSlice";
import Strings from "../../../constants/constants";
import PizzaCardHeader from "./PizzaCardComponents/PizzaCardHeader";
import PizzaCardOptions from "./PizzaCardComponents/PizzaCardOptions";
import PizzaCardButton from "./PizzaCardComponents/PizzaCardButton";
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
        <PizzaCardHeader item={item} />
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
                <PizzaCardOptions item={item} />
                <PizzaCardButton />
              </Form>
            </>
          </Formik>
        </div>
      </Card>
    </div>
  );
}

export default PizzaCard;
