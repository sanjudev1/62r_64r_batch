import { createContext, StrictMode } from 'react'
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
import Form from './componets/form.jsx'
import {  BrowserRouter, Routes, Route  } from "react-router";
import About from './componets/about.jsx'
import Service from './componets/service.jsx'
import Notfound from './componets/notfound.jsx'
import Recipe from './componets/recipe.jsx'
export const Waiter1 = createContext();
export const Waiter2 = createContext();
createRoot(document.getElementById('root')).render(
 
  <>
<Waiter1 value={{food:"Goongura mutton biryani rendu liverlu extra "}}>
  <Waiter2 value={{deserts:"dilpasand apricort delight"}}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  </BrowserRouter>,
  </Waiter2>
  </Waiter1>
 
  </>
   
    
   
    
   

)
