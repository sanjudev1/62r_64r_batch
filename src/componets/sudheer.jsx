import React, { useContext } from "react"
import Amulya from "./amulya"
import { Waiter2 } from "../main"

function Sudheer(prop){
    console.log("sudheer rendering...")
   const final_stuff= useContext(Waiter2)
    return(<>
   
    <h1>{final_stuff.deserts}</h1>
    <Amulya  plate={prop.plate}/>
    </>)
}
export default React.memo(Sudheer)