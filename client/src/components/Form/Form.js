import { useContext } from "react"
import { ProductContext } from "../../store/contex"
import Input from "../Input/Input"




const Form = ({data}) => {
    const { selectedProduct, selectedDate,calcDay, onCalcDay, onSelectedDate, errors, onError, onResult } =
      useContext(ProductContext);
    // Function for pop-up sequence
    const popup = () => {
        document.querySelector(".errPopup").style.opacity = 1;
        setTimeout(() => {
          document.querySelector(".errPopup").style.opacity = 0;
        }, 3000);
    }

    //Date error
    const checkDate = (e,selectedDatee, now) => {
      if (selectedDatee < now) {
        onError("Planned order date, cannot be in the past", "date");
        e.target.date.style.boxShadow = '0 0 0 2px #F94C66'

        popup()
      } else {
        onError(null, "date");
        e.target.date.style.boxShadow = ''

      }
    };
    //Type error
    const checkType = (e,type) => {
        if (type === 'Fabric Type') {
          onError("Please select a product type", "type");
          e.style.boxShadow = '0 0 0 2px #F94C66'
  
          popup()
        } else{
        onError(null, "type");
        e.style.boxShadow = ''

        }
      };

    //Quantity error
    const checkQuantity = (e) => {
      if (e.target.quantity.value < 0 || e.target.quantity.value > 100) {
        
        onError(`Quantity must be between 0-${selectedProduct[0]?.quantity}`, "quantity");
        e.target.quantity.style.boxShadow = '0 0 0 2px #F94C66'
        popup()
      } else if (e.target.quantity.value === ''){
        onError(`Please enter a valid quantity`, "quantity");
        e.target.quantity.style.boxShadow = '0 0 0 2px #F94C66'
        popup()

      }
      
      else if (
        e.target.quantity.value > 0 ||
        e.target.quantity.value < 0
      ) {
        onError(null, "quantity");
        e.target.quantity.style.boxShadow = ''

      }
    };

    //Form handler
    const getFormData = (e) => {
      const productType = document.getElementById("selected").textContent;
      const typeInputField = document.querySelector('.customselect')
      e.preventDefault();
      const now = new Date();
      const selected = new Date(selectedDate);
      let day = 2;
      selected.setDate(selected.getDate() + day)

      if(selected.getDay() ===0){
            selected.setDate(selected.getDate() + 1)
        }
        if(selected.getDay() ===6){

            selected.setDate(selected.getDate() + 2)
        }
      checkDate(e,selectedDate, now);
      checkType(typeInputField,productType);
      onCalcDay(2)
      checkQuantity(e);
        onResult(selected.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) )
    }

    return(
        <form onSubmit={getFormData}>
        <Input placeholder='Order Date'/>
        <Input placeholder='Fabric Type' type='select' data={data?.product_types}/>
        <Input placeholder='Quantity' type='number' data={data?.product_types}/>
        <Input placeholder='Quantity' type="submit"/>
        </form>
    )

}


export default Form