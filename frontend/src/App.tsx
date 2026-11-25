import Properties from "./pages/Properties"
import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router'
import PropertyDetails from './pages/PropertyDetails'

function App() {

  return (
    
    <div>
      <Routes>
        <Route path='/properties' element={<Properties/>}/>
      
        <Route path='/properties/:id' element={<PropertyDetails />}/>
      </Routes>
    </div>
  )
}

export default App
