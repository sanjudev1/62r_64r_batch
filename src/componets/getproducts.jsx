

// fetch the data 

import { useEffect, useState } from "react";
import { DNASpinner } from "./customspinner";

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

    return(<div style={{marginTop:"60px"}}>
    {data?<>
    
    {data.map(e=><img style={{width:"250px"}}src={e.image}/>)}
    </>:<DNASpinner/>}
    </div>)
}
export default Getproducts