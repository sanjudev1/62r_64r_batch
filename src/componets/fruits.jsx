import React from "react"

let arr=["apple","mango","orange","grapes","banana","kiwi","pine apple"]

// 
function Items(){
    return(
       <React.Fragment>
          {arr.map(e=><li>{e}</li>)} 
       </React.Fragment>
    )
}
export function UnorderedFruits(){
    return(
        <ul>
        <Items/>
        </ul>
    )
}


function OrderedFruits(){
    return(
   <ol>
    <Items/>
   </ol>
    )
}
export default OrderedFruits