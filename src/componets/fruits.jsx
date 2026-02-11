import React from "react"

function Items(b){
    console.log(b,"itmes") // {k:[]}
    const {k}=b 
   
    return(
       <React.Fragment >
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
    console.log(a.children.fresh_costly_fruits)
    return(
   <ol style={{marginTop:"80px"}}>
    <Items k={a.children.fresh_costly_fruits}/> 
   </ol>
    )
}
export default OrderedFruits