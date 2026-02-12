import { useParams } from "react-router"
import CustomNavbar from "../classcomponents/customnavbar"
import { useEffect, useState } from "react"
import { DNASpinner } from "./customspinner"

function Recipe(){
    const[data,setdata]=useState("")
    const {id}=useParams()
    useEffect(()=>{

        fetch(`https://dummyjson.com/recipes/${id}`)
.then(res => res.json())
.then((response)=>{
  setdata(response)
});
    },[])
    return(<>
    <CustomNavbar/>
     <h1 style={{marginTop:"70px"}}></h1>
   {data?<img src={data.image}/>:<DNASpinner/>}
    </>)
}
export default Recipe