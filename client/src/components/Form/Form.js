import { useContext } from "react";
import { ProductContext } from "../../store/contex";
import Input from "../Input/Input";
import dayjs from "dayjs";
import dayjsBusinessDays from "dayjs-business-days";
dayjs.extend(dayjsBusinessDays);
const Form = ({ data }) => {
  const { selectedProduct, selectedDate, onError, onResult, selectedQuantity } =
    useContext(ProductContext);

  // Function for pop-up sequence
  const popup = () => {
    document.querySelector(".errPopup").style.opacity = 1;
    setTimeout(() => {
      document.querySelector(".errPopup").style.opacity = 0;
    }, 3000);
  };

  //Input Errors
  var dateEr = true;
  var typeEr = true;
  var quanEr = true;
  //Date error
  const checkDate = (e, selectedDatee, now) => {
    if (selectedDatee < now) {
      onError("Planned order date, cannot be in the past", "date");
      e.target.date.style.boxShadow = "0 0 0 2px #F94C66";
      popup();
      dateEr = true;
    } else if (selectedDatee >= now) {
      onError(null, "date");
      e.target.date.style.boxShadow = "";
      dateEr = false;
    }
  };
  //Type error
  const checkType = (e, type) => {
    if (type === "Fabric Type") {
      onError("Please select a product type", "type");
      e.style.boxShadow = "0 0 0 2px #F94C66";
      popup();
      typeEr = true;
    } else {
      onError(null, "type");
      e.style.boxShadow = "";
      typeEr = false;
    }
  };

  //Quantity error
  const checkQuantity = (e) => {
    if (e.target.quantity.value < 0 || e.target.quantity.value > 100) {
      onError(
        `Quantity must be between 0-${selectedProduct[0]?.quantity}`,
        "quantity"
      );
      e.target.quantity.style.boxShadow = "0 0 0 2px #F94C66";
      popup();
      quanEr = true;
    } else if (e.target.quantity.value === "") {
      onError(`Please enter a valid quantity`, "quantity");
      e.target.quantity.style.boxShadow = "0 0 0 2px #F94C66";
      popup();
      typeEr = true;
    } else if (e.target.quantity.value > 0 || e.target.quantity.value < 0) {
      onError(null, "quantity");
      e.target.quantity.style.boxShadow = "";
      quanEr = false;
    }
  };

  //Form handler
  const getFormData = (e) => {
    const productType = document.getElementById("selected").textContent;
    const typeInputField = document.querySelector(".customselect");
    e.preventDefault();
    const now = new Date();
    const selected = new Date(selectedDate);
    checkDate(e, selectedDate, now);
    checkType(typeInputField, productType);
    checkQuantity(e);

    let result;
    if (typeEr === false && quanEr === false && dateEr === false) {
      if (selectedProduct[0].value === "Cotton") {
        if (selectedQuantity <= 50) {
          result = dayjs(selected).businessDaysAdd(3);
        }
        if (selectedQuantity > 50) {
          result = dayjs(selected).businessDaysAdd(4);
        }
      }
      if (selectedProduct[0].value === "Linen") {
        if (selectedQuantity <= 50) {
          result = dayjs(selected).businessDaysAdd(5);
        }
        if (selectedQuantity > 50) {
          result = dayjs(selected).businessDaysAdd(6);
        }
      }
      onResult(
        result.$d.toLocaleDateString("en-us", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    }
  };

  return (
    <form onSubmit={getFormData}>
      <Input placeholder="Order Date" />
      <Input
        placeholder="Fabric Type"
        type="select"
        data={data?.product_types}
      />
      <Input placeholder="Quantity" type="number" data={data?.product_types} />
      <Input placeholder="Calculate" type="submit" />
    </form>
  );
};

export default Form;
