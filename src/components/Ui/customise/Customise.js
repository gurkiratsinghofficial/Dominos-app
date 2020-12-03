import React, { useEffect, useState } from "react";
import MyCheckbox from "../../Ui/myComponents/MyCheckbox";
import MyRadio from "../../Ui/myComponents/MyRadio";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  openModal,
  selectModal,
  selectModalPizza,
  selectNonVegTopping,
  selectVegTopping,
} from "../../../features/Pizza/PizzaSlice";
import Strings from "../../../constants/constants";
import CustomiseHeader from "./CustomiseHeader";
import TotalBar from "./TotalBar";
/**
 * @description:JSX for Customise Modal
 */
function Customise() {
  /**fetch Pizza details that is to be displayed in modal */
  const Modalpizza = useSelector(selectModalPizza);
  /**select state of modal :open or closed */
  const modal = useSelector(selectModal);
  /**select veg toppings from state */
  const vegTopping = useSelector(selectVegTopping);
  /**select non veg toppings from state */
  const nonVegTopping = useSelector(selectNonVegTopping);

  const dispatch = useDispatch();

  const [cheesePrice] = useState(0);
  const [modalPrice, setModalPrice] = useState(0);
  const [size, setSize] = useState("small");
  const [crust, setCrust] = useState("FreshPan");
  const [cheese, setCheese] = useState(false);
  const [veg, setVeg] = useState([]);
  const [nonVeg, setNonVeg] = useState([]);
  const [obj, setObj] = useState({
    size: 0,
    crust: 0,
  });
  useEffect(() => {
    if (Modalpizza)
      setObj({
        size: Modalpizza.sizes[0].price,
        crust: Modalpizza.crusts[0].price,
      });
  }, [Modalpizza]);
  useEffect(() => {
    setModalPrice(obj.size + obj.crust);
  }, [obj]);
  const values = {
    size: size,
    crust: crust,
    toppings: veg.concat(nonVeg),
    cheese: cheese,
  };
  /**Sets values for veg toppings */
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
  /**sets values for nonveg toppings */
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
  /**sets value if cheese is selected or not */
  const cheeseFunc = (value, checked) => {
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
  /**submit handler */
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
  /**sets the size of pizza */
  const setDataSize = (param, price) => {
    setSize(param);
    setObj((old) => {
      return { ...old, size: price };
    });
  };
  /**sets the crust of pizza */
  const setDataCrust = (param, price) => {
    setCrust(param);
    setObj((old) => {
      return { ...old, crust: price };
    });
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
            <CustomiseHeader modalPrice={modalPrice} Modalpizza={Modalpizza} />
            <MyRadio
              Modalpizza={Modalpizza}
              setDataSize={setDataSize}
              title="Size"
            />
            <MyRadio
              Modalpizza={Modalpizza}
              setDataCrust={setDataCrust}
              title="Crust"
            />
            <MyCheckbox
              setFunc={cheeseFunc}
              Topping={[{ name: "cheese" }]}
              title={Strings.CHEESE}
            />
            <MyCheckbox
              setFunc={vegFunc}
              Topping={vegTopping}
              title={Strings.VEG_TOP}
            />
            <MyCheckbox
              setFunc={nonVegFunc}
              Topping={nonVegTopping}
              title={Strings.NON_VEG_TOP}
            />

            <TotalBar
              submit={submit}
              modalPrice={modalPrice}
              Modalpizza={Modalpizza}
            />
          </div>
          <div
            className="close-div"
            onClick={() => {
              dispatch(openModal()); /** Grey overlay for closing the modal */
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
