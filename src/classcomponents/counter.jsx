import {Component} from "react" // React={Component:""}
import chimtu from "./counter.module.css"
import CounterOne from "./counter1"

class Counter extends Component{
constructor(){
  super()
    this.state={
    count:0 
  }
}
getSnapshotBeforeUpdate(a,b){
 console.log(a,b)
}

shouldComponentUpdate(){
 return true
}
componentDidUpdate(){
 console.log("updating.....😍😍😍😍😍😍😍")
}
static getDerivedStateFromProps(){
console.log("state from props...")
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
     <CounterOne/>
    </>)
  }
}

export default Counter