import { useEffect, useState } from "react"
import "./input.scss"

const Input = ({type, placeholder, data}) => {
console.log(data)
        const [selected, setSelected] = useState("")
        const valueState = (e) => {
            if(e.target.value !==""){
                document.getElementById('placeholder').style.opacity = 0
            }
            else if(e.target.value ==""){
                document.getElementById('placeholder').style.opacity = 1
            }
        }
        const [ddState, setDdState] = useState(false)
          const toggleDd = () => {
            return setDdState(!ddState)
          }
          const getOption = (e) => {
            console.log(e)
            setSelected(e.target.textContent)
          }
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
         <input onChange={valueState} min="1" max='100' className='input' id='test2' type='number'/>
         <label id='placeholder' htmlFor='test'>{placeholder}</label>
        </>:
        type =='select'?
        <>
        <div className="customselect" onClick={toggleDd}>
        
        <div className="options" id='opts' >
            {ddState&& data?.map(x=><div onClick={getOption} className='option'>{x.value}</div>)}
        </div>
        
        </div>
        <label style={selected?{color:'black'}:{}} htmlFor='test'>{selected?selected:placeholder}</label> 
        </>
        :
        <>
        <input className='input' id='test' type={type}/>
        <label htmlFor='test'>{placeholder}</label>
        </>
    
        :<input type='submit' value='Calculate'/>
    }
    </div>

        
    )

}


export default Input