import React from "react"
import CounterTwo from "./counter2"

class CounterOne extends React.PureComponent{
  
    render(){
        console.log("counter one")
        return(<>
        <CounterTwo/>
        </>)
    }
}
export default CounterOne