import { useEffect, useState } from "react"
import axios from "axios";

 function useFetch(url){
   const [data,setdata] =useState("")
   const getproducts=async()=>{
       try{
            let response=await axios.get(url)
            console.log(response,"response")
            setdata(response.data)
       }catch(err){
          console.log(err,"error")
       }
    }
    useEffect(()=>{
   getproducts()
    },[])
return data
 
}
export default useFetch