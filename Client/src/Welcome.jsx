import { Link, useNavigate } from "react-router-dom"
import "./Welcome.css"
import log from "./assets/icon2.png"
import { useDispatch, useSelector } from "react-redux"
import { Allproducts } from "./redux/action"

function WELCOME(){
    const aa=useSelector((state)=>state.user.login)
    console.log(aa)
    const dispatch= useDispatch()
    const navigate=useNavigate()
    return(
        <>
        <div className="w-div">
            <p className="mb-0 p3">Welcome To India's Finest E-Store</p>
            <img className="mt-0 log" src={log} alt="" />
            <a style={{ textDecoration: 'none' }} onClick={()=>dispatch(Allproducts(navigate))}><p  className="cont" >Continue &gt;&gt;</p></a>
        </div>
        </>
    )
}
export {WELCOME}