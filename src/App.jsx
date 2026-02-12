import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomNavbar from './classcomponents/customnavbar'
import Slider from './classcomponents/customslider'
import Fetchproducts from './componets/fetchproducts'
import Getproducts from './componets/getproducts'

function App() {
  

    return(<>
   <CustomNavbar/>
   <Slider/>
   <Getproducts/>
    </>)

    
  
}

export default App
