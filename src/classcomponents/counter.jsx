import {Component} from "react" // React={Component:""}
import chimtu from "./counter.module.css"

class Counter extends Component{
  state={
    count:0
  }
  increment=()=>{
  // how to update 
  this.setState({
    count:this.state.count+1
  })
  }
  decrement=()=>{
  // how to update 
  this.setState({
    count:this.state.count-1
  })
  }
  render(){
    return(<>
     <h1>Counter App</h1>
     <button onClick={this.decrement}>decrement</button>
     <h2 >count : {this.state.count}</h2>
     <button onClick={this.increment}>increment</button>
    </>)
  }
}

export default Counter