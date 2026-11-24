import Properties from "./pages/Properties"
<<<<<<< HEAD
import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router'
import PropertyDetails from './pages/PropertyDetails'
=======

>>>>>>> property-list

function App() {

  return (
<<<<<<< HEAD
    
    
    
    
    <div>
      <Routes>
        <Route path='/properties' element={<Properties/>}/>
      
        <Route path='/properties/:id' element={<PropertyDetails />}/>
      </Routes>
    </div>
=======
    <>
    
    <Properties/>
    
    </>
>>>>>>> property-list
  )
}

export default App
