import { useParams } from "react-router-dom"
import { ACC } from "./home/acc"
import CAROUSEL from "./home/carousel"
import { FOOTER } from "./home/footer"
import { MIDDLE } from "./home/middle"
import { NAV } from "./home/nav"
import { PRODUCTS } from "./home/products"
import { SLIDER } from "./home/slider"
import { SLIDER2 } from "./home/slider2"
import { useState } from "react"
import LOADING from "./loading"
// import { SPLIDER } from "./home/splider"

function HOME(){
    const[loader,setloader]=useState(true)
    setTimeout(()=>{
        setloader(false)
    },1000)
    return(
        <>
         {loader?<><LOADING/></>:<>
        <CAROUSEL/>
        <SLIDER2/>
        <SLIDER/>
        <MIDDLE/>
        
        <PRODUCTS/>
        </>}
    
        {/* <SPLIDER/> */}
        {/* <ACC/> */}
      

        </>
    )
}
export {HOME}