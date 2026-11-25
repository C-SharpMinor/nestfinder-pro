import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ResetPassword from './pages/ResetPassword'
import ForgotPassword from './pages/ForgotPassword'

import Properties from "./pages/Properties"
import './App.css'
import {Routes, Route, useLocation} from 'react-router'
import PropertyDetails from './pages/PropertyDetails'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {

const location = useLocation()

// Pages that should NOT show Navbar and Footer
  const hideLayout = ['/login', '/sign-up', '/forgot-password', '/reset-password'].includes(location.pathname)

  return (
    <>
{!hideLayout && <Navbar />}

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
      <Route path='/reset-password' element={<ResetPassword />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
    <Route path='/properties' element={<Properties/>}/>
  
    <Route path='/properties/:id' element={<PropertyDetails />}/>

    </Routes>
    {!hideLayout && <Footer />}
    
      
    </>

  )
}

export default App
