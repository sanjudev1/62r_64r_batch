import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sanju from './App.jsx'
import Laptop from "./laptop.jsx"
import {Toss as Mytoss} from './componets/onlinetoss.jsx'
import Items from './componets/swiggy_headpart.jsx'

import OrderedFruits, { UnorderedFruits } from './componets/fruits.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UnorderedFruits/>
    <OrderedFruits/>
    <Items/>
    <Mytoss/>
    <Items/>
   
  </StrictMode>,
)
