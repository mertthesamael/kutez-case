import React, { useState } from "react";


const ProductContext = React.createContext({
    emptyValue:''
})

export const ProductContextWrapper = (props) => {

    const [selectedProduct, setSelectedProduct] = useState({})
    const [selectedDate, setSelectedDate] = useState("")
    const [errors, setErrors] = useState({})
    const [result, setResult] = useState()
    const [calcDay, setCalcDay] = useState()
    const [selectedQuantity, setSelectedQuantity] = useState()

    const selectedQuantityHandler = (val) => {
        return setSelectedQuantity(val)
    }

    const errorsHandler = (err,type) => {
        return setErrors(prevState => ({
            ...prevState,
            [type]:err,
            
        }))
    }

    const calcDayHandler = (val) => {
        return(setCalcDay(val))
    }

    const resultHandler = (val) => {
        return setResult(val)
    }

    const selectedProductHandler = (val) => {
        return setSelectedProduct(val)
    }
    const selectedDateHandler = (val) => {
        return setSelectedDate(val)
    }

    return(
        <ProductContext.Provider value={{
            selectedProduct:selectedProduct,
            onSelectedProduct:selectedProductHandler,
            selectedDate:selectedDate,
            onSelectedDate:selectedDateHandler,
            onError:errorsHandler,
            errors:errors,
            result:result,
            onResult:resultHandler,
            calcDay:calcDay,
            onCalcDay:calcDayHandler,
            selectedQuantity:selectedQuantity,
            onSelectedQuantity:selectedQuantityHandler,
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export {ProductContext}