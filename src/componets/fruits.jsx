import React from "react"

function Items(b){
    console.log(b,"itmes") // {k:[]}
    const {k}=b 
   
    return(
       <React.Fragment>
          {k.map(e=><li>{e}</li>)} 
       </React.Fragment>
    )
}
export function UnorderedFruits(a){
    console.log(a,"underorder fun a") // {arr:[]}
    return(
        <ul>
       <Items k={a.fruits}/>
        </ul>
    )
}


function OrderedFruits(a){

    return(
   <ol>
    <Items k={a.fruits}/> 
   </ol>
    )
}
export default OrderedFruits