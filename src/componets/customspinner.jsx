import React from 'react'
import { Audio, DNA } from 'react-loader-spinner'

export class DNASpinner extends React.Component {
  componentWillUnmount(){
    alert("spinner is expired...")
  }
  render(){
    return (
   <DNA
visible={true}
height="80"
width="80"
ariaLabel="dna-loading"
wrapperStyle={{}}
wrapperClass="dna-wrapper"
/>
  )
  }
}