import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HOME } from './Home'
import { NAV } from './home/nav'
import {WELCOME} from "./Welcome"
import { Outlet, useLocation } from 'react-router'
import { FOOTER } from './home/footer'

function App() {
  const location=useLocation()
  // const islocation=location.pathname==="/about" || location.pathname==="/home" || location.pathname==="/products" 
  const footloc=location.pathname==="/"
  const uuu=location.pathname==="/signup" || location.pathname==="/login" || location.pathname==="/otpverify"
  const prd=location.pathname==="/allproducts" || location.pathname=="/electronics" || location.pathname=="/house" || location.pathname=="/groceries" || location.pathname=="/books" || location.pathname=="/beauty&personalcare"

  return (
    <>
    {!uuu && !footloc && <NAV/>}
    {footloc && <WELCOME/>}
    
    <Outlet/>
    {!footloc && !prd && <FOOTER/>}
    </>
    
  )
}

export default App
