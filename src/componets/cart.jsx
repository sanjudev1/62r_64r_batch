import { useDispatch, useSelector } from "react-redux"
import CustomNavbar from "../classcomponents/customnavbar"
import Slider from "../classcomponents/customslider"
import Ravi from "./ravi"
import { decrement, increment } from "../items_preparing_house/cart"

function Cart(){
    const dispatch=useDispatch()
    const cartItems=useSelector((state)=>{
        return state.cartproducts.recipes
    })
    return(
        <>
        <CustomNavbar/>
        <Slider/>
        {cartItems.length>0?
        
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
        {cartItems.map(e=><div>

            <img src={e.image} style={{width:"100px"}}/>
            <br/>
           <div style={{display:"flex"}}> 
            <button className="btn btn-danger" onClick={()=>dispatch(decrement(e))}>-</button>
            <h3>{e.quantity}</h3>
            <button className="btn btn-success" onClick={()=>dispatch(increment(e))}>+</button>
            </div>
        </div>)}
        </div>
        :"Cart is Empty"}
        </>
    )
}
export default  Cart