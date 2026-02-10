import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Sanju from './App.jsx'
import Laptop from "./laptop.jsx"
import {Toss as Mytoss} from './componets/onlinetoss.jsx'
import Card from './componets/swiggy_headpart.jsx'

let arr=["apple","mango","orange","grapes","banana","kiwi","pine apple"]


import OrderedFruits, { UnorderedFruits } from './componets/fruits.jsx'
import Animal from './classcomponents/counter.jsx'
import CustomNavbar from './classcomponents/customnavbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './classcomponents/customslider.jsx'
import App from './App.jsx'
import Fetchproducts from './componets/fetchproducts.jsx'
import Counter from './classcomponents/counter.jsx'
import CounterApp from './componets/counterapp.jsx'
import Getproducts from './componets/getproducts.jsx'
createRoot(document.getElementById('root')).render(
 
  <>
  <CustomNavbar/>
  <Getproducts/>
  </>
   
    
   
    
   

)
