
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pindi_vantalu: {
    janthikalu:50,
    arisalu : 78,
    laddulu:200,
    kajjikayalu:67
  },
}

export const mahaRuchuluSlice = createSlice({
  name: 'maharuchulu',
  initialState,
  reducers: {
    increment: (state) => {
        state.pindi_vantalu.laddulu=state.pindi_vantalu.laddulu+1
     console.log("increment fun is triggred")
    },
    decrement: (state) => {
    
    },
   
  },
})


export const { increment, decrement } = mahaRuchuluSlice.actions

export default mahaRuchuluSlice.reducer