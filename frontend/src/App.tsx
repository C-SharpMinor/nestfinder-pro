import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ResetPassword from './pages/ResetPassword'
import ForgotPassword from './pages/ForgotPassword'

import Properties from "./pages/Properties"
import './App.css'
import {Routes, Route} from 'react-router'
import PropertyDetails from './pages/PropertyDetails'

function App() {

  return (
    <>
    <Routes>
      <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
      <Route path='/reset-password' element={<ResetPassword />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
    <Route path='/properties' element={<Properties/>}/>
  
    <Route path='/properties/:id' element={<PropertyDetails />}/>

    </Routes>
      
    </>

  )
}

export default App
