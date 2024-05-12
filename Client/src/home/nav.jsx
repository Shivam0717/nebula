import "./nav.css"
import Name from '../assets/icon2.png'
import { useCallback, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import data from "../data.json"
import { Allproducts, addproducts, addwishlist, cat, logoutuser, removecart, showproducts } from "../redux/action"
import { Menu } from '@headlessui/react'
import { Toaster, toast } from 'sonner';

function NAV(){

  const Dispatch=useDispatch()
  // const[ww,setww]=useState([])
  let arr=[]
  let ww=[]
  const cart=useSelector((state)=>state.cart.cart)
  console.log(cart,"oyyo");

  const wish=useSelector((state)=>state.wish.wishlist)
  console.log(wish,"poyyy");
  const zz=wish.flat()
  console.log(zz);

  console.log(cart.flat(),"cartttt");
   ww=cart.flat()  //main

   
   const[total,settotal]=useState()
   function tot(){
    let a = 0
    ww.forEach(e => {
      
      console.log(e.price);
      a+=parseInt(e.price)
     });
     settotal(a)
   }
  
   
  //  console.log(a);
  //  console.log(total,"luffy");


  const acc=useSelector((state)=>state.user.user)
  // console.log(acc,"hi");


  let islogged=useSelector((state)=>state.user.login)
  // console.log(islogged,"scarlett");

  

  const[style,setstyle]=useState("none")
  const[style2,setstyle2]=useState("none")
  const[style3,setstyle3]=useState("none")
  const[pr1,setpr1]=useState("block")
  const[pr2,setpr2]=useState("none")

  // const[cartt,setcartt]=useState([])
  
  // Dispatch(addproducts(arr))

  function logout(){
    const det={
      email:acc.email, ///i put email instead of per as backend server could not read per
      cart:ww,
      wish:zz
    }
  //  console.log(det.email);
    Dispatch(logoutuser(det))
  }


  function vis(){
    style=="none"?setstyle("block"):setstyle("none")
  
  }

  useEffect(() => {
    if(islogged){
      // console.log("ioui");
      setpr1("none")
      setpr2("block")
    }
    else{
      setpr1("block")
      setpr2("none")
      setstyle3("none")
    } 
  }, []);
  
  function vis2(){
    style2=="none"?setstyle2("block"):setstyle2("none")
  }
  function vis3(){
    style3=="none"?setstyle3("block"):setstyle3("none")
  }
  

  let prodi=useSelector((state)=>state.root.data[0])
  // console.log(prodi,"naruto");
  let pro=useSelector((state)=>state.root.data[0])
  console.log(pro,"sasuke");

  const [search,setsearch]=useState("")
  let i;
  function give(){
    const kk=Array.from(pro)
    for (let index = 0; index < kk.length; index++) {
      if(search.toLowerCase().split(" ").join("")==kk[index].title.toLowerCase().split(" ").join("")){
        // if(kk[index].title.toLowerCase(search.toLowerCase())){
        i=kk[index]
        console.log(i);
        Dispatch(showproducts(i))
      }
    }
   
  }
  

  function cls(){
    const prod=prodi
    // console.log(prod,"yuetyr");
    // Dispatch(Allproducts(prod))
  }

const lk=useSelector((state)=>state.category.categ)

  let  prods=[]
  let aa;
  let el=[]
  function elct(){
    
    prods=pro
    console.log(prods.length,"poiouiy");
    aa= prods.map((p)=>{
      return{...p}       //////IMPPPPPP ////here prods doesnot give an array so we cannot do foreach SO we used map, we mapped an array BUT objects inside it come undefined SO we did return ...p
    })
    // console.log(aa,"gojo");
    aa.forEach(w => {
      
        if(w.category.includes("electronics")){
        // console.log(e,"qpuiuryu");
        // dispatchEvent(Allproducts(w))
        el=[...el,w]     ////if we do (let el=[]) here then it will give error can use before initialization
        
      }
    });
    // console.log(el,"elect");
    Dispatch(cat(el))
  }
  function groc(){
    
    prods=pro
    // console.log(prods.length,"poiouiy");
    aa= prods.map((p)=>{
      return{...p}       //////IMPPPPPP ////here prodi doesnot give an array so we cannot do foreach SO we used map, we mapped an array BUT objects inside it come undefined SO we did return ...p
    })
    // console.log(aa,"gojo");
    aa.forEach(w => {
      
        if(w.category.includes("groceries")){
        // console.log(e,"qpuiuryu");
        // dispatchEvent(Allproducts(w))
        el=[...el,w]     ////if we do (let el=[]) here then it will give error can use before initialization
        
      }
    });
    // console.log(el,"elect");
    Dispatch(cat(el))
  }
  function home(){
    
    prods=pro
    console.log(prods.length,"poiouiy");
    aa= prods.map((p)=>{  })
    // console.log(aa,"gojo");
    aa.forEach(w => {
      
        if(w.category.includes("house")){
        // console.log(e,"qpuiuryu");
        // dispatchEvent(Allproducts(w))
        el=[...el,w]     
        
      }
    });
    // console.log(el,"elect");
    Dispatch(cat(el))
  }
  function hlth(){
    
    prods=pro
    console.log(prods.length,"poiouiy");
    aa= prods.map((p)=>{
      return{...p}        })
    // console.log(aa,"gojo");
    aa.forEach(w => {
      
        if(w.category.includes("health")){
       
        el=[...el,w]     
        
      }
    });
    // console.log(el,"elect");
    Dispatch(cat(el))
  }

  function beauty(){
    
    prods=pro
    console.log(prods.length,"poiouiy");
    aa= prods.map((p)=>{
      return{...p}        })
    // console.log(aa,"gojo");
    aa.forEach(w => {
      
        if(w.category.includes("skincare")||w.category.includes("fragrance")){
       
        el=[...el,w]     
        
      }
    });
    // console.log(el,"elect");
    Dispatch(cat(el))
  }
  
  let getcart=useSelector((state)=>state.user.user.Cart)
  let getwish=useSelector((state)=>state.user.user.Wishlist)
  console.log(getcart,"getcart");
  //Dispatch(addproducts(arr))
 
//  let pp;

//////////////////////////////////////
// if(islogged){
 
//   const hj=Array.from(pro)
//   console.log(hj,"iwyyu");
//   const kk= hj.map((p)=>{
//     return{...p}        
//   })
//   const px=Array.from(getcart)

//   // setcartt([...cartt,px])
//   console.log(px.length,"lengthhh");
//   for (let index = 0; index < px.length; index++) {
//     console.log(px[index]);
//     // const elem=kk.filter((p)=> p._id==px[index])
//     // console.log(elem);
//   // setcartt([...cartt,"hh"])

//   for (let j = 0; j < kk.length; j++) {
//     // console.log(kk[j].title);
//     if(px[index]==kk[j]._id){ 
//       // Dispatch(addproducts(kk[j]))
//     arr=[...arr,kk[j]]
//     }
//   }
     

// // }
// // console.log(cartt,"cartttt");
// // const arr2=[...arr,"iui"]


// }
// console.log(arr,"qwqw");


 
// console.log("345");

// //  console.log(arr);
// }


// else{
//   console.log("yooo");
// }
//////////////////////////////////////



// function sent(){
//   console.log(arr,"naruto");
//   Dispatch(addproducts(arr));
// }

function sent(){
  console.log(getcart,"naruto");
 
    console.log("oiouiuuiuiu");
  
  
  
}
if(islogged){
  useEffect(()=>{
    Dispatch(addproducts(getcart));
    Dispatch(addwishlist(getwish))
  },[])
  useEffect(()=>{
    toast.success("User Logged in",{position:"top-center",duration:2000})
  },[])
}

// function rem(a){
//   console.log("one");
//   ww=ww.map((b)=>b!==a)
// }

function showitem(p){   
  console.log(p);
  Dispatch(showproducts(p))
}
const navigate=useNavigate()
function nav(){
  navigate({
    pathname:"/home",
    search:`user=?${acc._id}`
  })
}
    return(
        <>
        <Toaster  richColors/>
        <nav className="navbar navbar-expand-lg  sticky-top bg-black ">
  <div className="container-fluid ">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarTogglerDemo01" style={{height:"49px"}}>
      <Link to="/" style={{ textDecoration: 'none' }}><a className="navbar-brand text-light" href="#"><img src={Name} style={{width:"150px", height:"49px"}}></img></a></Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{marginLeft:"60px"}}>
        <li className="nav-item">
          {islogged?<a className="nav-link active a1"  onClick={nav}>Home</a>:<Link to="/home" style={{ textDecoration: 'none' }}><a className="nav-link active a1"  href="#">Home</a></Link>}
        </li>
        <li className="nav-item">
          <a className="nav-link active a1"  href="#">Today's deal</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link a1" id="prd" onClick={vis}>Products</a>
        </li>
        <div className="drop p-5 " style={{display:style}}>
  <h3 className=" fw-bolder" style={{color:"yellow", marginLeft:"220px",textShadow:"2px 2px orange"}}>Category</h3>
  
  <ul className="mt-4 ">
  <div class="container text-center">
  <div class="row row-cols-3">
  <Link to="/electronics" style={{textDecoration:"none"}}> <div class="col"><li class="cat" onClick={()=>{vis();elct()}}>Electronics</li></div></Link>
    <div class="col" ><li class="cat">Clothing and accessories</li></div>
    <Link to="/house" style={{textDecoration:"none"}}><div class="col"><li class="cat" onClick={()=>{vis();home()}}>House</li></div></Link>
    
    <Link to="/groceries" style={{textDecoration:"none"}}><div class="col"><li class="cat" onClick={()=>{vis();groc()}}>Groceries</li></div></Link>
    <Link to="/beauty&personalcare" style={{textDecoration:"none"}}><div class="col"><li class="cat"  onClick={()=>{vis();beauty()}}>Beauty and personal care</li></div></Link>

    <Link to="/electronics" style={{textDecoration:"none"}}> <div class="col"><li class="cat" onClick={()=>{vis();hlth()}}>Health</li></div></Link>
    <div class="col"><li class="cat">Baby and kids</li></div>
    <Link to="/books" style={{textDecoration:"none"}}><div class="col"><li class="cat">Books and media</li></div></Link>
  <Link to="/allproducts" style={{textDecoration:"none"}}><div class="col" onClick={()=>{vis();cls()}}><li class="cat">ALL PRODUCTS</li></div></Link>
  </div>
</div>
  
</ul>

</div>
        <li className="nav-item">
          <Link to="/about" style={{ textDecoration: 'none' }}><a className="nav-link active a1"  href="#">About</a></Link>
        </li>
        <li className="nav-item">
          <Link to="/support" style={{textDecoration:"none"}}><a className="nav-link active a1"  href="#">Support</a></Link>
        </li>
       
      </ul>
      <div className="d-flex" >
        <input className="form-control me-2 mt-2" type="search" placeholder="Search" aria-label="Search" style={{height:"27px", width:"400px", fontSize:"13px"}} value={search} onChange={(e)=>setsearch(e.target.value)} 
        onKeyDown={(e) => { 
          if (e.key === "Enter") { 
            console.log(e.key);
           give()
           navigate(`/products/${search}`)
          } 
      }} 
      
  />
        <Link to={`/products/${search}`}><button className="btn  btn-outline-success  text-light pt-2 pb-0  "  onClick={give}><span class="material-symbols-outlined"  style={{ fontSize:"20px", height:"20px"}}>
search
</span></button></Link>

      </div>
      <a><span class=" icon material-symbols-outlined  pt-2 ps-4 pe-0" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"  style={{color:"white", fontSize:"25px", cursor:"pointer"}} onClick={()=>{sent(),tot()}}>
shopping_cart
</span></a>
<a ><span class=" icon material-symbols-outlined pt-2 ps-4 " style={{color:"white", fontSize:"28px", cursor:"pointer",display:pr1}} onClick={vis2}>
person
</span></a>
<div className="  ms-4 fw-bolder text-light prf" style={{height:"35px", width:"35px",borderRadius:"50% 50% 50% 50%",display:pr2,fontSize:"25px", paddingLeft:"10px",cursor:"pointer"}} onClick={vis3}>{acc.name?acc.name[0].toUpperCase():"w"}</div>
<div className="drop2 ps=0 pt-3 mt-2" style={{display:style3,border:"solid white", height:"200px"}}>
  <span className="iy ms-4 mb-3 text-warning "> Hi, {acc.name}</span>
  <div className="ss pb-2"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" onClick={()=>{vis3,()=>{settotal(a)}}}><a  className="text-light">Wishlist</a></div>
   <div className="ss pb-3" ><a className="text-light">History</a></div>
   <Link to="/" style={{textDecoration:"none"}}><div className="ss" style={{borderTop:"solid grey 1px"}}><a href="" onClick={logout}>LOGOUT</a></div></Link>
</div>


<div className="drop2 p=0" style={{display:style2}}>
   <Link to="/login" style={{textDecoration:"none"}}><div className="ss" ><a href="" >LOGIN</a></div></Link>
   <Link to="/signup" style={{textDecoration:"none"}}><div className="ss" ><a href="">SIGNUP</a></div></Link>
   {/* <div className="ss" style={{borderTop:"solid grey 1px"}} ><a href="">LOGOUT</a></div> */}
</div>
    </div>
  </div>
</nav>





{/* cart */}
<div>
  <div className="modal fade modal-xl" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content bg-black" style={{ height:"500px"}}>
        <div className="modal-header">
          <h1 className="modal-title fs-5 text-warning fw-bolder" id="exampleModalToggleLabel">MY CART</h1>
          <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close" style={{height:"10px", width:"10px"}}/>
        </div>
        <div className="modal-body ms-4 mt-3 d-flex flex-column" style={{overflow:"scroll"}}>
        
         {islogged?ww.map((p)=>{
          return(
          <>
             <Link className="h-25 mb-4 me-5"   style={{textDecoration:"none"}} ><div className=" w-100  crt me-5 mb-4 d-flex flex-row justify-content-between" style={{height:"75px"}} onClick={(e)=>{e.persist();showitem(a)}}>
            <section className="d-flex flex-row">
          <img src={p.thumbnail} style={{height:"75px", width:"100px"}}/>
          <div className="mt-2">
          <span className="fw-bold ms-4 mt-3 text-light " style={{marginTop:"-40px", fontSize:"16px"}}>{p.title}</span>
          <br />
          <span className="fw-bold ms-4  text-warning " style={{ fontSize:"16px", marginTop:"10px"}}>$ {p.price}.00</span>
          </div>
          </section>
          <span class="material-symbols-outlined dust2 mt-4 me-4 text-light" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" onClick={()=>{Dispatch(removecart(p)),tot()}} style={{fontSize:"30px"}}>
          delete
          </span>
         
          </div> 
          </Link>
          
          </>

          )}):console.log("yu")}
        
        </div>
        <div className="modal-footer">
          <span className="text-light fw-bold " style={{marginRight:"30px"}}>TOTAL :<span className="ms-2 text-warning" style={{fontSize:"20px"}}> $ {total}</span> </span>
          <button className="btn btn-success" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">BUY</button>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex={-1}>
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">THANK YOU!!</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body mb-3">
         
        </div>
      
      </div>
    </div>
  </div>
 
</div>
{/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button> */}

<div className="offcanvas offcanvas-start bg-black" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel" style={{width:"400px"}}>
  <div className="offcanvas-header">
  <span class="material-symbols-outlined text-danger  mt-4 me-0" style={{marginLeft:"50px", fontSize:"30px"}}>
favorite
</span>
    <h3 className="offcanvas-title  fw-bold  mt-3 text-warning" id="offcanvasWithBothOptionsLabel" style={{borderBottom:"solid 2px yellow", marginLeft:"-30px"}}>My Wishlist</h3>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
  </div>
  <div className="offcanvas-body">
    
  {zz.map((a)=>{
    return(
            <>
            <Link to={`/products/${a.id}`} style={{textDecoration:"none"}}><div className="ms-3 mb-5 mt-4 crt d-flex flex-row me-5"  style={{height:"70px",}} onClick={(e)=>{e.persist();showitem(a),vis3()}}>
            <img className="mb-4 mt-0" src={a.thumbnail} style={{height:"70px",width:"100px"}}/>
            <div className="mt-1">
            <span className="text-white fw-bold ms-4 " style={{fontSize:"14px"}}>{a.title}</span>
            <br></br>
            <span className="text-success fw-bold ms-4 " style={{fontSize:"14px"}}>$ {a.price}.00</span>
            </div>
            
            <span class="material-symbols-outlined mt-1 dust text-light"  style={{fontSize:"25px"}}>
          delete
          </span>
            
            
            </div>
            </Link>
            </>
    )
          })}
  </div>
</div>


        </>
    )
}
export {NAV}