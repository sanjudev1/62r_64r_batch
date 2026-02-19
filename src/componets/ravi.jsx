import { useCallback, useMemo, useState } from "react"
import Sudheer from "./sudheer"

function Ravi(){
    console.log("ravi render...")
    const [val,setval]=useState(0)
    const normal=useCallback(()=>{
        return function(){}
    },[])
    const onincrement=()=>{
        setval(val+1)
    }
 const total= useMemo(()=>{
    console.log("calculating....")
   let arr=[1,2,3,8,9]
   let sum=0
   for(let num of arr){
    sum+=num
   }
   return sum
  },[])
    return(<>
    <h1>{val}</h1>
    <h2>{total}</h2>
    <button onClick={onincrement}>increment</button>
    <Sudheer plate={normal} />
    </>)
}
export default Ravi