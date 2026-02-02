import React from "react"

class CounterApp extends React.Component{

    state={
        count:0
    }
    decrement=()=>{
        this.setState({count:this.state.count-1})
    }
    increment=()=>{
       this.setState({count:this.state.count+1})
    }
  render(){
    return(<>
    
     <h1>Counter App</h1>
     <button onClick={this.decrement}>Decrement</button>
     <h2 style={{color:this.state.count<=0?this.state.count==0?"black":"red":"green"}}>Count : {this.state.count}</h2>
     <button onClick={this.increment}>Increment</button>
    </>)
  }
}
export default CounterApp