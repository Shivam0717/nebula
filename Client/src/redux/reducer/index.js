import { ADD_CART, ADD_WISH, ALL_PRD, CATEG, DATA_FETCH_REQ, DATA_FETCH_SUCCESS, LOGOUT, REMOVE_CART, REM_CART, SHOW_PROD, USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, VERIFY_OTP_FAILURE, VERIFY_OTP_REQ, VERIFY_OTP_SUCCESS } from "../action"
import { toast, Toaster } from "sonner";
const initialstate={
    data:[],
    isloading:false,
    success:false,
}
const initialuser={
    user :{},
    isloading:false,
    success:"",
    error:"",
    login:false,
    otp:false
}
const initialcontact={
    info:[],
    isloading:false
}

const initprod={
    item:[],
}
const initcart={
    cart:[]
}
const initcat={
    categ:[]
}
const initwish={
    wishlist:[]
}

export function category(state=initcat,action){
    if(action.type==CATEG){
        return{...initcat,categ:action.payload}
    }
    return state;
}

export function wishreducer(state=initwish,action){
    if(action.type==ADD_WISH){
        return{...state,wishlist:[...state.wishlist,action.payload]}
        
    }
    return state;
}

export function cartreducer(state=initcart,action){
    if(action.type==ADD_CART){
        return{...state,cart:[...state.cart,action.payload]}
        
    }
    if(action.type==REMOVE_CART){
        return{...state,cart:[]}
    }
    if(action.type==REM_CART){
        console.log(action.payload._id,"popo");
        let cart1=[]
        console.log(cart1,"cart1");
        console.log(state.cart.flat(),"state");
        // cart1=(state.cart[0]).map((a)=>{return(a!==action.payload)})
        cart1=(state.cart).flat().map((a)=>{ ///flat coz nested array aari thi and new prd jb add krre the vog alg index le rhe the...to stop nesting we used flat
            if(a._id!==action.payload._id){
                    return(
                        a
                    )
            }
            else{
                return([])
            }
            // return(console.log(a))
            
        })
        console.log(cart1,"gfhgf");
        return{...state,cart:[...cart1]}
    }

    return state;
}



export function itemreducer(state=initprod,action){
    if(action.type==SHOW_PROD){
        return{...state,item:[action.payload]} //here we are not pushing a product but replacing it
    }
    return state;
}


export function reducer(state=initialstate,action){
    if(action.type==DATA_FETCH_REQ){
        return{...state,isloading:true}
    }
    else if(action.type==DATA_FETCH_SUCCESS){
        return{...state,isloading:false,data:[action.payload.prod]}
    }
    else{
        return state
    } 
}
export function userreducer(state=initialuser,action){
    switch(action.type){
        case USER_REGISTER_REQUEST: 
            return{...state,isloading:true,error:""}
        case USER_REGISTER_SUCCESS:
            return{...state,isloading:false, user:action.payload.user, success:action.payload.message}
        case USER_REGISTER_FAILURE:
            return{...state,isloading:false,error:action.payload.message}
        case VERIFY_OTP_REQ:
            return{...state,isloading:true}
        case VERIFY_OTP_SUCCESS:
            return{...state,isloading:false,success:action.payload}
        case VERIFY_OTP_FAILURE:
            return{...state,isloading:false,otp:true}
        case USER_LOGIN_REQUEST: 
            return{...state,isloading:true}
        case USER_LOGIN_SUCCESS:
            return{...state,isloading:false, user:action.payload, login:true , error:""} //here i by mistake put action.payload.user BUT in action its only payload (no user)
        case USER_LOGIN_FAILURE:
            toast.error("User not verified")
            return{...state,isloading:false,error:action.payload.message,login:false}
        case LOGOUT:
            return{...state,user:action.payload.user, login:false ,success:""}
    }
    return state;  //we have to give thus return otherwise there will be no initiale state AND a dagerous error will come
} 




// export function ProductReducer(state=intialstateProduct,action){
//     switch (action.type){
//         case Fetch_Products:
//             return{...state,isLoading:true}
//         case Fetch_Products_success:
//             // return{...state,products:[...state.products,action.payload]} //action.payload will already gives an array (here first will give a nested array AND in second rendering it will give 2 array nested in array)
//             return{...state,products:action.payload,isLoading:false}
//     default:
//     return state;
//     }
// }