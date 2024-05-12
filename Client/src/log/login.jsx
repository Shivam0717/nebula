import { useState } from "react";
import "./signup.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loginuser } from "../redux/action";
import { Link, useSearchParams } from "react-router-dom";
import { toast, Toaster } from "sonner";

function LOGIN(){

 

// const navigate = useNavigate();

  const error=useSelector((state)=>state.user.error)

  // console.log(error,"yy");
  const[a,seta]=useState()

    const ss=useSelector((state)=>state.user.login)
    console.log(ss,"login");
    const [data,setdata]=useState({
        email:"",
        password:""
    })
    const dispatch=useDispatch()
    const navigate=useNavigate()
    function ev(){
       dispatch(loginuser(data,navigate)) 

        console.log(error,"yy");
        // if(!ss){
        //   toast.error("User not verified")   ///toaster yaha lgane se yeh update ni ho pa rha tha coz ss ki value starting me false hogi if user sahi hua tb bhi due to asynchronus nature of js updation se pehle toast chl jaega SO WE PUT TOAST INSIDE REDUCER
        // }
      
      
     
      
     
      
    }
   
    
    return(
        <>
        <Toaster richColors position="top-center" duration={2000}/>
         <section className="sign rounded pt-4 mb-5 pe-5 pt-5">
         <div className="mt-3 ms-5 ps-5 mb-4"><h2 className="ms-4 " style={{borderBottom:"solid white 3px", width:"130px", color:"yellow"}}>Login</h2></div>
         <div className="mt-5">
         <div className="ms-5 mb-2 ">
  <label htmlFor="exampleFormControlInput1" className="form-label rr mb-1 ms-1 fw-bold" >Email address</label>
  <input type="text" className="form-control w-100 in"  placeholder="Enter email" value={data.email} onChange={(e)=>setdata({...data,email:(e.target.value)})}/>
</div>

<div className="ms-5 mb-2 mt-4">
  <label htmlFor="exampleFormControlInput1" className="form-label rr mb-1 ms-1 fw-bold">Password</label>
  <input type="password" className="form-control w-100 in" id="exampleFormControlInput1 " placeholder="Password"  value={data.password} onChange={(e)=>setdata({...data,password:(e.target.value)})}/>
</div>
</div>
<div className="ps-1 mt-5 pe-5">
       <button className="btn btn-primary w-100 ms-5 mt-2 bt fw-bold " type="button" onClick={()=>{ev()}}>Login</button>

         </div>
         <div className="mt-5 ms-5 pt-2">
            <span className="ms-4 " style={{color:"grey"}}>Do not have an account? <Link to="/signup"><a href="">Register</a></Link></span>
         </div>

         </section>
        </>
    )
}
export {LOGIN}