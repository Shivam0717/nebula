import { useDispatch, useSelector } from "react-redux"
import "./signup.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { registeruser } from "../redux/action"
import { Link } from "react-router-dom"
import { toast, Toaster } from "sonner";


function SIGNUP(){
   
    const[userdata,setdata]=useState({  //form se data leke ek jagah store krwaya then dispatch se voh data action ko bhejdiya
        name:"",
        email:"",
        password:"",
        gender:""
    })
    const dispatch=useDispatch()
    const navigate=useNavigate();
    function sign(e){
        e.preventDefault();
        dispatch(registeruser(userdata,navigate))
    }
    // const isloading=useSelector((state)=>state.user) 
    // console.log(isloading);
    // console.log(isloading);
    const success=useSelector((state)=>state.user.success)
    console.log("success");
    const error=useSelector((state)=>state.user.error)
    // console.log(isloading);

    useEffect(() => {
      if (success) {
        toast.success("Signed up");
      }
      if (error) {
        console.log(error);
        toast.error("User already exist");
      }
    }, [success, error]);

    return(
        <>
         <Toaster richColors position="top-center" />
        
        <section className="sign rounded pt-4 mb-5 pe-5">
         <div className="mt-3 ms-5 ps-5 mb-4"><h2 className="ms-3 " style={{borderBottom:"solid white 3px", width:"180px", color:"yellow"}}>Sign up</h2></div>
         

         <div className="ms-2">

         <div className="ms-5 mb-2">
  <label htmlFor="exampleFormControlInput1" className="form-label rr mb-1 ms-1 fw-bold">Name</label>
  <input type="text" className="form-control w-100 in"  placeholder="Enter Name" value={userdata.name} onChange={(e)=>setdata({...userdata, name:e.target.value})}/>
</div>

<div className="ms-5 mb-2">
  <label htmlFor="exampleFormControlInput1" className="form-label rr mb-1 ms-1 fw-bold">Email address</label>
  <input type="email" className="form-control w-100 in" id="exampleFormControlInput1 " placeholder="name@example.com" value={userdata.email} onChange={(e)=>setdata({...userdata, email:e.target.value})}/>
</div>

<div className="ms-5 mb-2">
  <label htmlFor="exampleFormControlInput1" className="form-label rr mb-1 ms-1 fw-bold">Password</label>
  <input type="password" className="form-control w-100 in" id="exampleFormControlInput1" placeholder="Enter Password" value={userdata.password} onChange={(e)=>setdata({...userdata, password:e.target.value})}/>
</div>

<div className="mt-3">
    <div className=" form-check-inline ms-5 mt-1 me-4">
        <p className="fw-bold rr" >Gender</p>
    </div>
    
  <div className="form-check form-check-inline me-3">
    <input className="form-check-input r1" type="radio" name="inlineRadioOptions" value="male" id="inlineRadio1" aria-valuemax={"male"} defaultValue="option1" onChange={(e)=>{setdata({...userdata,gender:e.target.value})}}/>
    <label className="form-check-label  text-light " htmlFor="inlineRadio1"  style={{fontSize:"13px"}} >Male</label>
  </div>

  <div className="form-check form-check-inline mb-0">
    <input className="form-check-input r2" type="radio" name="inlineRadioOptions" value="female" id="inlineRadio2" defaultValue="option2" onChange={(e)=>{setdata({...userdata,gender:e.target.value})}} />
    <label className="form-check-label  text-light " htmlFor="inlineRadio2"  style={{fontSize:"13px"}}>Female</label>
  </div>

</div>

</div>

<div className="ms-2 mt-0">
<div className="form-check ms-5 mt-0" >
  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
  <label className="form-check-label fw-bold " htmlFor="flexCheckChecked" style={{fontSize:"14px",marginTop:"-30px !important",color:"grey"}}>
    Remember me
  </label>
</div>
</div>


         
         <div className="ps-3 mt-3 pe-5">
       <button className="btn btn-primary w-100 ms-5 mt-2 bt fw-bold " type="button" onClick={sign}>Register</button>

         </div>
         <div className="mt-4 ms-5 pt-2">
            <span className="ms-5 " style={{color:"grey"}}>Already have an account? <a href="">Login</a></span>
         </div>
        </section>


        </>
    )
}
export {SIGNUP}