import { useDispatch, useSelector } from "react-redux"
import CustomNavbar from "../classcomponents/customnavbar"
import Slider from "../classcomponents/customslider"
import { increment } from "../items_preparing_house/tenthous_items"

function Service(){
    const dispatch=useDispatch()
  const data=  useSelector((state)=>{
        return state.pullamma.pindi_vantalu
    })
const cartItems=useSelector((state)=>{
    console.log(state.cartproducts.recipes)
    return state.cartproducts.recipes
})
    return(
        <>
        <CustomNavbar/>
        <Slider/>
        <h1>cart Items : {cartItems.length}</h1>
        <h1>this is service page</h1>
        <p>janthikalu:{data.janthikalu}</p>
        <p>arisalu: {data.arisalu}</p>
        <p>laddulu: {data.laddulu} <button onClick={()=>dispatch(increment())}>+</button></p>
        </>
    )
}
export default  Service