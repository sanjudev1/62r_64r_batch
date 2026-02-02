import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sanju from './App.jsx'
import Laptop from "./laptop.jsx"
import {Toss as Mytoss} from './componets/onlinetoss.jsx'
import Card from './componets/swiggy_headpart.jsx'

let arr=["apple","mango","orange","grapes","banana","kiwi","pine apple"]


import OrderedFruits, { UnorderedFruits } from './componets/fruits.jsx'
import Animal from './classcomponents/counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card/>
    <Animal/>
   {/* <UnorderedFruits fruits={arr}/>
    <OrderedFruits fruits={arr} /> */}
    
    <Mytoss/>
    
   
  </StrictMode>,
)
