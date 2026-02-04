import React from "react"
import { DNASpinner } from "./customspinner";


class  Fetchproducts extends React.Component{
    state={
        recipes:[]
    }
     getproducts=()=>{
      console.log("get products ....")

      fetch('https://dummyjson.com/recipes')
.then(res => res.json())
.then((response)=>{
   console.log(response.recipes[0],"res")
   this.setState({recipes:response.recipes})
});
    }
   componentDidMount(){
   this.getproducts()
   }
   render(){
   return(
     <>
   
    {this.state.recipes.length>0?
    
    <>
    {this.state.recipes.map(e=><img style={{width:"250px"}} src={e.image}/>)}
    </>
    
    
    
    :<DNASpinner/>}
    </>
   )
   } 
}
export default Fetchproducts