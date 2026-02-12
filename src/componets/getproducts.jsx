

// fetch the data 

import { useEffect, useState } from "react";
import { DNASpinner } from "./customspinner";
import { Link } from "react-router";

function Getproducts(){

   const[data,setdata]=useState("") // ["",fn]

   const getrecipes=async()=>{
      try{
        let response= await fetch('https://dummyjson.com/recipes')
       response= await response.json()
       setdata(response.recipes)
      }catch(err){
        console.log(err)
      }

    }

    useEffect(()=>{
       getrecipes()
    },[])

    return(<div style={{}}>
    {data?<>
    
    {data.map(e=><Link to={`/recipe/${e.id}`}><img style={{width:"250px"}}src={e.image}/></Link>)}
    </>:<DNASpinner/>}
    </div>)
}
export default Getproducts