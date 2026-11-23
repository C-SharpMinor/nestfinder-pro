import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router'
import PropertyDetails from './pages/PropertyDetails'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/propertiesid' element={<PropertyDetails />}/>
      </Routes>
    </div>
  )
}

export default App
