import React, { useState } from "react";


const ProductContext = React.createContext({
    emptyValue:''
})

export const ProductContextWrapper = (props) => {

    const [selectedProduct, setSelectedProduct] = useState({})
    const [selectedDate, setSelectedDate] = useState("")
    const [errors, setErrors] = useState({})
    const [result, setResult] = useState("Please enter your order information to estimate shipping date...")
    const [calcDay, setCalcDay] = useState()

    const errorsHandler = (err,type) => {
        return setErrors(prevState => ({
            ...prevState,
            [type]:err
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
            onCalcDay:calcDayHandler
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export {ProductContext}