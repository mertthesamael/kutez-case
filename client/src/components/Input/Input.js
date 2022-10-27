import "./input.scss"


const Input = ({type, placeholder}) => {

    return(
        <div className='inputwrapper'>
            {type!== "submit"?
        <>
        <input className='input' id='test' type={type}/>
        <label  for='test'>{placeholder}</label>
        </>
        :<input type='submit' value='Calculate'/>
            }
        </div>

        
    )

}


export default Input