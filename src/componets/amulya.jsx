import { useContext } from "react"
import { Waiter1 } from "../main"

function Amulya(){
  console.log("amulya rendering...")
  const tasy_food= useContext(Waiter1)
  console.log(tasy_food)
    return(<>
    
    <h1>having {tasy_food.food} </h1>
    </>)
}
export default Amulya