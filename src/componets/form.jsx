import { useRef, useState } from "react"

function Form(){
    console.log("form is shaking")
    const[name,setname]=useState("sweet tisukoni ra...")// ["",fn]
    const nameref=useRef() // {current:}
    const handleSubmit=(e)=>{
        e.preventDefault()
       console.log("form sumitted succesfully",nameref.current.value)
    }
    return(<form onSubmit={handleSubmit}>
    <input placeholder="enter your name" ref={nameref}/>
    <button type="submit">submit</button>
    </form>)
}
export default Form