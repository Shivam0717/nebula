import { useDispatch, useSelector } from "react-redux"
import "./item.css"
import { addproducts, addwishlist } from "./redux/action";
import { useNavigate } from "react-router";
import { Toaster, toast } from 'sonner';

function ITEM(){

    let islogged=useSelector((state)=>state.user.login)
    let acc=useSelector((state)=>state.user.user)
    // console.log(islogged,"yehhhhhh");

    const cart=useSelector((state)=>state.cart.cart)
    console.log(cart.flat(),"oo");

    const dispatch=useDispatch()

    function addcart(a){
        
        dispatch(addproducts(a))
    }
    function addwish(a){
        
        dispatch(addwishlist(a))
    }
    const navigate=useNavigate()
    function logged(a){
        if(!islogged){
            navigate("/login")
        }
        else{
            toast.success('Product added to '+a,{position:"top-center", duration: 1000});
        }
    }

    const pro=useSelector((state)=>state.item.item[0])
    console.log(pro);
    return(
        <>
        <Toaster richColors />
        <section className="ms-5 ps-5 pe-2 item d-flex flex-row">
            <div className="ww ms-5 rounded"><img className="rounded border tx" src={pro.thumbnail} alt="" /></div>
            <div className="ps-5  pt-3 ms-5"> <h3 className="text-light fw-bolder">{pro.title}</h3>
            <p className="pe-5 mt-4 text-light" style={{fontSize:"14px"}}> {pro.description}</p>
            <h5 className="text-success">Price : $ {pro.price}.00 </h5>
            <p className="text-danger mt-3 "style={{fontSize:"14px"}}>Rating : {pro.rating}<span class="material-symbols-outlined star ms-1 text-warning"> 
    

star
</span></p>
<div className="mt-4 pt-2"> 
  <button type="button " className="btn btn-success me-5 " onClick={(e)=>{e.persist();addcart(pro),logged("Cart")}} style={{fontSize:"14px"}}>Add to cart</button>
  <button type="button" className="btn btn-danger" onClick={(e)=>{e.persist();addwish(pro),logged("Wishlist")}} style={{fontSize:"14px"}} >Wishlist</button>
</div>
            </div>
        </section>
        </>
    )
}
export {ITEM}