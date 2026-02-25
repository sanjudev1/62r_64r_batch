

// fetch the data 

import { useEffect, useState } from "react";
import { DNASpinner } from "./customspinner";
import { Link } from "react-router";
import useFetch from "../customhooks/usefetch";
import { useDispatch } from "react-redux";
import { increment } from "../items_preparing_house/cart";


function Getproducts(){
    const dispatch = useDispatch()
    const data=useFetch("https://dummyjson.com/recipes")
    

    return(<div style={{}}>
    {data?<div style={{display:"flex",flexWrap:"wrap"}}>
    
    {data.recipes.map(e=><div style={{display:"flex",flexDirection:"column",width:"250px"}}>
     <Link to={`/recipe/${e.id}`}><img style={{width:"250px"}}src={e.image}/></Link>
     <button onClick={()=>dispatch(increment(e))} >Add to Cart</button>

    </div>)}
    </div>:<DNASpinner/>}
    </div>)
}
export default Getproducts