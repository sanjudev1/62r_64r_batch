import React, { useEffect } from 'react'
import { Audio, DNA } from 'react-loader-spinner'

export function DNASpinner () {
  
  useEffect(()=>{

    return()=>{
      console.log("spinner is expired this is clean up function")
    }
  },[])
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