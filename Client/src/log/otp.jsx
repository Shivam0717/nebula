import { useState,useEffect } from "react"
import "./signup.css"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { verifyotp } from "../redux/action"
import { toast, Toaster } from "sonner";

function OTP(){
    const[otp,setotp]=useState("")
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const success=useSelector((state)=>state.user.success)
    const otp1=useSelector((state)=>state.user.otp)
    console.log("success");
    const error=useSelector((state)=>state.user.error)

    // console.log(isloading);

    useEffect(() => {
      if (success) {
        toast.success("Signed up");
      }
      if (error) {
        toast.error("jdhh");
      }
    }, [success, error]);

    function yt(e){
        e.preventDefault() 
        console.log("rr");
        dispatch(verifyotp(otp,navigate)) 
        if(otp1){
            toast.error("Wrong otp")
        }
    }
    return(
        <>
        <Toaster richColors position="top-center" duration={1000}/>
        <section className="sign rounded pt-4 mb-5 pe-5 pt-5">
        <div className="mt-3 ms-5 ps-5 mb-4 pb-1"><h3 className="ms-0 pb-2 " style={{borderBottom:"solid white 3px", width:"210px", color:"green"}}>OTP-verification</h3></div>
        <div className="px-3 py-5 my-5 ms-5"><input className="form-control w-100 " type="text" placeholder="Enter the OTP"  value={otp} onChange={(e)=>setotp(e.target.value)} /></div>
        <div style={{marginLeft:"160px", marginTop:"-60px"}}><button type="button" class="btn btn-primary" onClick={yt}>Verify</button>
</div>
        </section>
        </>
    )
}
export {OTP}