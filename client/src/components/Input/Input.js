import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../../store/contex"
import "./input.scss"
import "react-datepicker/dist/react-datepicker.css"

const Input = ({type, placeholder, data}) => {

        
    const {selectedProduct, onSelectedProduct,selectedDate,onSelectedDate, errors} = useContext(ProductContext)
       
        const valueState = (e) => {
            if(e.target.value !==""){
                document.getElementById('placeholder').style.opacity = 0
            }
            else if(e.target.value ==""){
                document.getElementById('placeholder').style.opacity = 1
            }
        }
        const dateHandler = (e) => {
            const date = new Date(e.target.value)
            return onSelectedDate(date)
        }
        const [ddState, setDdState] = useState(false)
          const toggleDd = () => {
            return setDdState(!ddState)
          }
          const getOption = (e) => {
            onSelectedProduct(data?.filter(name => name.value === e.target.textContent))
          }

//useEffect function for closing dropdown by clicking anywhere on the screen          
useEffect(() => {
const startEvent = (e) => {
    if(e.path[0].className !== 'customselect'){
        return setDdState(false)        
     }
}
document.body.addEventListener("click", startEvent);
return () => {
    document.body.addEventListener("click", startEvent)
}
},[] )

    return(
        <div className='inputwrapper'>
            {type!== "submit"?
        type =='number'?
        <>
         <input onChange={valueState} className='input' id='test2' name='quantity' type='number'/>
         <label id='placeholder' htmlFor='test'>{placeholder}</label>
        {errors&&<div className="errormessage">{errors.quantity}</div>}
        </>:
        type =='select'?
        <>
        <div className="customselect" onClick={toggleDd}>
        
        <div className="options" id='opts' >
            {ddState&& data?.map(x=><div onClick={getOption} className='option'>{x.value}</div>)}
        </div>
        
        </div>
        <label id='selected' style={selectedProduct[0]?.value?{color:'black'}:{}} htmlFor='test'>{selectedProduct[0]?.value?selectedProduct[0]?.value:placeholder}</label>
        {errors&&<div className="errormessage">{errors.type}</div>}

        </>
        :
        <>
        <input name='date' onChange={dateHandler} required className='input' id='test' type={'date'}/>
        
        <label htmlFor='test'>{selectedDate?"":placeholder}</label>
        {errors&&<div className="errormessage">{errors.date}</div>}

        </>
    
        :<input type='submit' value='Calculate'/>
    }
    </div>

        
    )

}


export default Input