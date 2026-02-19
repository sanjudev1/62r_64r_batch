

// fetch the data 

import { useEffect, useState } from "react";
import { DNASpinner } from "./customspinner";
import { Link } from "react-router";
import useFetch from "../customhooks/usefetch";

function Getproducts(){

    const data=useFetch("https://dummyjson.com/recipes")
    
  
   
  

    return(<div style={{}}>
    {data?<>
    
    {data.recipes.map(e=><Link to={`/recipe/${e.id}`}><img style={{width:"250px"}}src={e.image}/></Link>)}
    </>:<DNASpinner/>}
    </div>)
}
export default Getproducts