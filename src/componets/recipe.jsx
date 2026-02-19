import { useParams } from "react-router"
import CustomNavbar from "../classcomponents/customnavbar"
import { useEffect, useState } from "react"
import { DNASpinner } from "./customspinner"
import useFetch from "../customhooks/usefetch"

function Recipe(){
    
    const {id}=useParams() 

   const data= useFetch(`https://dummyjson.com/recipes/${id}`)

    return(<>
    <CustomNavbar/>
     <h1 style={{marginTop:"70px"}}></h1>
   {data?<img src={data.image}/>:<DNASpinner/>}
    </>)
}
export default Recipe