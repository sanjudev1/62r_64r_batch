
//function | component 

import { useState } from "react"

function CounterApp(){

   const [count,setcount]=useState(0) // [0,f]

   const increment=()=>{
      setcount(count+1)
   }

  const decrement=()=>{
    setcount(count-1)
  }



   return(<div style={{textAlign:"center",marginTop:"70px"}}>
    <h1>Counter application</h1>
    <div style={{display:"flex",justifyContent:"center"}}>
        <button className="btn btn-danger" onClick={decrement}>decre</button>
    <h2>count : {count}</h2>
    <button className="btn btn-success" onClick={increment}>incre</button>
    </div>
   </div>)
}

export default CounterApp