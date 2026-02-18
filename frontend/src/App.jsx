import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'


const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <div>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
      <div className="app">
        <Navbar setShowLogin = {setShowLogin}/>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/cart' element = {<Cart/>}/>
          <Route path = '/order' element = {<PlaceOrder/>}/>
        </Routes>
      </div>
    <Footer/>
    </div>
  )
}

export default App
