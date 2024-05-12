import axios from "axios";
axios.defaults.baseURL = "http://localhost:2000";
axios.defaults.withCredentials = true; //The withCredentials property is a boolean value that indicates whether or not cross-site Access-Control requests should be made using credentials. This includes cookies, authorization headers, or TLS client certificates. Setting withCredentials has no effect on same-origin requests. When the withCredentials property is set to true, Axios sends cookies and other credentials automatically. This tells Axios to send any cookies associated with the domain of the request. The server will generate a session ID and store it in a cookie on the user's device.



export const ALL_PRD="Allproducts"
export const SHOW_PROD="SHOW_PROD"
export const ADD_CART="ADD_CART"
export const ADD_WISH="ADD_WISH"
export const REMOVE_CART="REMOVE_CART"

export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAILURE = "USER_REGISTER_FAILURE";
export const VERIFY_OTP_REQ="VERIFY_OTP-REQ";
export const VERIFY_OTP_SUCCESS="VERIFY_OTP-SUCCESS";
export const VERIFY_OTP_FAILURE="VERIFY_OTP-FAILURE";
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

export const DATA_FETCH_REQ="DATA_FETCH_REQ"
export const DATA_FETCH_SUCCESS="DATA_FETCH_SUCCESS"
export const DATA_FETCH_FAILURE="DATA_FETCH_FAILURE"

export const LOGOUT="LOGOUT"
export const CATEG="categ"

export const REM_CART="REM_CART"

export  const registeruser=(data,navigate)=>  //One of the main use cases for this middleware(redux thunk) is for handling actions that might not be synchronous, for example, using axios to send a GET request. Redux Thunk allows us to dispatch those actions asynchronously and resolve each promise that gets returned.  
    async (dispatch)=>{                       //Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux. This allows for delayed actions, including working with promises.
        console.log(data);
        
        dispatch({type:USER_REGISTER_REQUEST});
        try {
            const res= await axios.post("/api/signup", data)   ///post method me data bhi bhejna hota hai
            console.log(res); //here we get a response obj, in which there is a data object which brings the data which we send from backend as (res.status.json())
            if(res.data.success){                                             ///when we post data, after signup it gives success true
                dispatch({type:USER_REGISTER_SUCCESS,payload:{
                    message: res.data.message,
                    user: res.data.user
                }})
                localStorage.setItem("email", res.data.user.email);   //we stored email in localstorage bcoz in otp-verification email is needed
                navigate("/otpverify")
            }
            else{
                dispatch({type:USER_REGISTER_FAILURE, payload:res.data.message})
            }

        } catch (error) {
            console.log("yyy");   //console.log is very imp to check the flow of code and errors
            dispatch({type:USER_REGISTER_FAILURE, payload:error})
        }
    }

    // In Redux Thunk, we do not put curly braces when defining the action creator function. Instead, we return a function that takes dispatch as an argument and can perform asynchronous operations before dispatching the actual action.
 //VVVVV IMPORTANT   =====>   //For example, if we were to use curly braces to define the action creator, we would be returning an object, which is not compatible with the Redux Thunk middleware. Instead, by returning a function, we can achieve the asynchronous behavior and dispatch actions based on the results of the asynchronous operations.In summary, the lack of curly braces when defining the action creator in Redux Thunk is a deliberate choice to enable the use of asynchronous operations and dispatching actions within the action creator function

 export const verifyotp=(otp,navigate)=> async(dispatch)=>{  ///we cant put curly brackets before async //if put curly braces then use return keyword
    dispatch({type:VERIFY_OTP_REQ})
    console.log(otp);
    console.log("rtetr");
    const email=localStorage.getItem("email")
    try {
        
        const res= await axios.post("/api/verify-otp",{email,otp})
        if(res.data.success){
            dispatch({type:VERIFY_OTP_SUCCESS,payload:res.data.message});
            localStorage.clear()
            navigate("/login")
        }
        else{
            dispatch({type:VERIFY_OTP_FAILURE,payload:res.data.message})
        }
    } catch (error) {
        console.log("yyy");
        dispatch({type:VERIFY_OTP_FAILURE,payload:error})
    }
}

export const loginuser=(data,navigate)=>async(dispatch)=>{
    dispatch({type:USER_LOGIN_REQUEST})
    console.log("yuty");
    try {
        const res=await axios.post("/api/login",data)
        console.log(res,"iyuityrtetewrrw");
        console.log("123");
        if(res.data.success&&res.data.user.isVerified){
            dispatch({type:USER_LOGIN_SUCCESS,payload:res.data.user})
            
          
            navigate({
                pathname:"/home",
                search:`user=${res.data.user._id}`
            })
        }
        else{
            dispatch({type:USER_LOGIN_FAILURE,payload:res.data.message})
        }
    } catch (error) { 
        console.log("uyyut");
        dispatch({type:USER_LOGIN_FAILURE,payload:error})
    }
}
    

// export function Allproducts(p){ 
//     return{
//         type:ALL_PRD,
//         payload:p
//     }
// }

export const Allproducts=(navigate)=>async(dispatch)=>{
    dispatch({type:DATA_FETCH_REQ})
    try {
        const res=await axios.get("/api/getproducts")
        console.log(res,"satoru");
        if(res.data.success){
            dispatch({type:DATA_FETCH_SUCCESS,payload:{
                message:res.data.message,
                prod:res.data.prod,
                success:res.data.success
            }})
            navigate("/home")
        }
        else{
            dispatch({type:DATA_FETCH_FAILURE, payload:{
                messsage:res.data.message,
                success:res.data.success
            }})
        }
    } catch (error) {
        dispatch({type:DATA_FETCH_FAILURE,message:error})
    }
}

// export const showproducts=(p,navigate)=>async(dispatch)=>{
//     dispatch({
//         type:SHOW_PROD,
//         payload:p
        
//     })
//    navigate(`/products/${p.id}`)
// }


export function showproducts(p,nav){
    
    return{
        type:SHOW_PROD,
        payload:p

        
    }
   
//    navigate(`/products/${p.id}`)
}


export function addproducts(a){
    return{
        type:ADD_CART,
        payload: a
    }
}

export function addwishlist(a){
    return{
        type:ADD_WISH,
        payload: a
    }
}

export function removecart(a){
    return{
        type:REM_CART,
        payload:a
    }
}


export const logoutuser=(b)=>async(dispatch)=>{
    console.log(b.email,"dhivam");
        const res=await axios.put("/api/logout",b)
        console.log("dhivam");

        if(res.data.success){
            
            dispatch({
                type:LOGOUT,payload:{message:res.data.message,
                    user:res.data.user
                } 

            })
            dispatch({
                type:REMOVE_CART,payload:b.cart
            })
        }
    }

export const cat=(u)=>{
    return{
        type:CATEG,
        payload:u
    }
}