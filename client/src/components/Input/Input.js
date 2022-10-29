import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../store/contex";
import Info from "../../assets/info-svgrepo-com.svg";
import "./input.scss";
const Input = ({ type, placeholder, data }) => {
  const {
    selectedProduct,
    onSelectedProduct,
    selectedDate,
    onSelectedDate,
    errors,
    onSelectedQuantity,
  } = useContext(ProductContext);

  const [ddState, setDdState] = useState(false);

  //Selected quantity from user
  const quantityState = (e) => {
    if (e.target.value !== "") {
      document.getElementById("placeholder").style.opacity = 0;
      onSelectedQuantity(e.target.value);
    } else if (e.target.value == "") {
      document.getElementById("placeholder").style.opacity = 1;
    }
  };

  //Selected date from user
  const dateHandler = (e) => {
    const date = new Date(e.target.value);
    return onSelectedDate(date);
  };

  //Selected product type from user
  const getType = (e) => {
    onSelectedProduct(
      data?.filter((name) => name.value === e.target.textContent)
    );
  };

  //Dropdown function
  const toggleDd = () => {
    return setDdState(!ddState);
  };

  //useEffect function for closing dropdown by clicking anywhere on the screen
  useEffect(() => {
    const startEvent = (e) => {
      if (e.path[0].className !== "customselect") {
        return setDdState(false);
      }
    };
    document.body.addEventListener("click", startEvent);
    return () => {
      document.body.addEventListener("click", startEvent);
    };
  }, []);

  return (
    <div className="inputwrapper">
      {type !== "submit" ? (
        type == "number" ? (
          <>
            <img src={Info} />
            <div className="tooltip">
              Shipping Dates May Vary Based on Quantity
            </div>
            <input
              onChange={quantityState}
              className="input"
              id="productnumber"
              name="quantity"
              type="number"
            />
            <label id="placeholder" htmlFor="test">
              {placeholder}
            </label>
            {errors && <div className="errormessage">{errors.quantity}</div>}
          </>
        ) : type == "select" ? (
          <>
            <div className="customselect" id="productstyle" onClick={toggleDd}>
              <div className="options" id="opts">
                {ddState &&
                  data?.map((x) => (
                    <div onClick={getType} className="option">
                      {x.value}
                    </div>
                  ))}
              </div>
            </div>
            <label
              id="selected"
              style={
                selectedProduct[0]?.value
                  ? { color: "black", zIndex: "22" }
                  : { zIndex: "22" }
              }
              htmlFor="test"
            >
              {selectedProduct[0]?.value
                ? selectedProduct[0]?.value
                : placeholder}
            </label>
            {errors && <div className="errormessage">{errors.type}</div>}
          </>
        ) : (
          <>
            <input
              name="date"
              onChange={dateHandler}
              required
              className="input"
              id="datepicker"
              type={"date"}
            />

            <label htmlFor="test">{selectedDate ? "" : placeholder}</label>
            {errors && <div className="errormessage">{errors.date}</div>}
          </>
        )
      ) : (
        <>
          <input type="submit" value="Calculate" />
        </>
      )}
    </div>
  );
};

export default Input;
