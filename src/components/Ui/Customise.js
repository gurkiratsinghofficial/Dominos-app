import React, { useState } from "react";
import pizzaImage from "../../images/pizza.png";
import { Card } from "react-bootstrap";
import CustomCheckbox from "./custom components/CustomCheckbox";
import CustomRadio from "./custom components/CustomRadio";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  openModal,
  selectModal,
  selectModalPizza,
  selectNonVegTopping,
  selectVegTopping,
} from "../../features/Pizza/PizzaSlice";
import Strings from "../../constants/constants";
/**
 * @description:JSX for Customise Modal
 */
function Customise() {
  const [cheesePrice, setCheesePrice] = useState(0);
  const [modalPrice, setModalPrice] = useState(0);
  const [size, setSize] = useState();
  const [crust, setCrust] = useState();
  const [cheese, setCheese] = useState(false);
  const [veg, setVeg] = useState([]);
  const [nonVeg, setNonVeg] = useState([]);
  const values = {
    size: size,
    crust: crust,
    toppings: veg.concat(nonVeg),
    cheese: cheese,
  };

  const modal = useSelector(selectModal);
  const dispatch = useDispatch();
  const Modalpizza = useSelector(selectModalPizza);
  const vegTopping = useSelector(selectVegTopping);
  const nonVegTopping = useSelector(selectNonVegTopping);
  const vegFunc = (value, checked) => {
    const top = [...veg];
    if (checked) {
      top.push(value);
      setVeg(top);
      if (size === "small") {
        setModalPrice(modalPrice + 30);
      }
      if (size === "medium") {
        setModalPrice(modalPrice + 50);
      }
      if (size === "large") {
        setModalPrice(modalPrice + 70);
      }
    } else {
      if (top.includes(value)) {
        const index = top.indexOf(value);
        top.splice(index, 1);
        setVeg(top);
        if (size === "small") {
          setModalPrice(modalPrice - 30);
        }
        if (size === "medium") {
          setModalPrice(modalPrice - 50);
        }
        if (size === "large") {
          setModalPrice(modalPrice - 70);
        }
      }
    }
  };
  const nonVegFunc = (value, checked) => {
    const top = [...nonVeg];
    if (checked) {
      top.push(value);
      setNonVeg(top);
      if (size === "small") {
        setModalPrice(modalPrice + 30);
      }
      if (size === "medium") {
        setModalPrice(modalPrice + 50);
      }
      if (size === "large") {
        setModalPrice(modalPrice + 70);
      }
    } else {
      if (top.includes(value)) {
        const index = top.indexOf(value);
        top.splice(index, 1);
        setNonVeg(top);
        if (size === "small") {
          setModalPrice(modalPrice - 30);
        }
        if (size === "medium") {
          setModalPrice(modalPrice - 50);
        }
        if (size === "large") {
          setModalPrice(modalPrice - 70);
        }
      }
    }
  };

  const cheeseFunc = (value, checked) => {
    console.log(checked, size);
    if (checked) {
      if (size === "small") {
        setModalPrice(modalPrice + 35);
        setCheese(true);
        return;
      } else if (size === "medium") {
        setModalPrice(modalPrice + 55);
        setCheese(true);
        return;
      } else if (size === "large") {
        setModalPrice(modalPrice + 75);
        setCheese(true);
        return;
      }
      console.log(cheesePrice);
      setModalPrice(modalPrice + cheesePrice);
    } else {
      if (size === "small") {
        setModalPrice(modalPrice - 35);
      } else if (size === "medium") {
        setModalPrice(modalPrice - 55);
      } else if (size === "large") {
        setModalPrice(modalPrice - 75);
      }
      setCheese(false);
      return;
    }
  };
  const submit = (Modalpizza) => {
    dispatch(
      addToCart({
        item: Modalpizza,
        values: values,
        cheese: cheese,
      })
    );
    setNonVeg([]);
    setVeg([]);
    setModalPrice(0);
    dispatch(openModal());
  };
  const setDataSize = (param, price) => {
    console.log(param, price);
    setSize(param);
    setModalPrice(price);
  };
  const setDataCrust = (param, price) => {
    console.log(param, price);
    setCrust(param);
    setModalPrice(modalPrice + price);
    console.log(modalPrice);
  };
  return (
    <div>
      {modal ? (
        <>
          <div className="customise-div">
            <button
              className="close-customise"
              onClick={() => {
                dispatch(openModal());
              }}
            >
              X
            </button>
            <Card.Img variant="top" src={pizzaImage} />
            <Card.Body>
              <Card.Title>₹{modalPrice}</Card.Title>
              <Card.Title>{Modalpizza.name}</Card.Title>
              <Card.Text>{Modalpizza.description}</Card.Text>
            </Card.Body>
            <Card.Body>
              <CustomRadio
                Modalpizza={Modalpizza}
                setDataSize={setDataSize}
                title="Size"
              />
            </Card.Body>
            <Card.Body>
              <CustomRadio
                Modalpizza={Modalpizza}
                setDataCrust={setDataCrust}
                title="Crust"
              />
            </Card.Body>
            <Card.Body>
              <CustomCheckbox
                setFunc={cheeseFunc}
                Topping={[{ name: "cheese" }]}
                title={Strings.CHEESE}
              />
            </Card.Body>
            <Card.Body>
              <CustomCheckbox
                setFunc={vegFunc}
                Topping={vegTopping}
                title={Strings.VEG_TOP}
              />
            </Card.Body>
            <Card.Body>
              <CustomCheckbox
                setFunc={nonVegFunc}
                Topping={nonVegTopping}
                title={Strings.NON_VEG_TOP}
              />
            </Card.Body>

            <div className="green-customise-bar">
              <div className="green-cart-customise-button">
                <button
                  onClick={() => {
                    submit(Modalpizza);
                  }}
                  style={{ position: "relative" }}
                >
                  Add to cart
                </button>
                <span className="customise-green-price">₹{modalPrice}</span>
              </div>
            </div>
          </div>
          <div
            className="close-div"
            onClick={() => {
              dispatch(openModal());
            }}
          ></div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Customise;
