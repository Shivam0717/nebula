import axios from "axios"
import { useEffect, useState } from "react";
import data from "../data.json"
import { useDispatch, useSelector } from "react-redux";
import { showproducts } from "../redux/action";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';



function PRODUCTS(){

  useEffect(()=>{
    AOS.init();
  },[])

    const [products,setproducts]=useState([])
   
    
    const item=useSelector((state)=>state.item.item)
    console.log(item,"pp");
  
    const dispatch=useDispatch()
  
    function showitem(a){
      console.log(a);
      dispatch(showproducts(a))
    }
  

    let ff=[]
    let ff2=[]
    const pr=useSelector((state)=>state.root.data[0])
    // console.log(pr,"Boss");
    const gr=Array.from(pr)
    console.log(gr.length);
     for (let index = 0; index < gr.length; index++) {
        if(gr[index].brand=="Apple"){
            // console.log("hi");
            ff2=[...ff2,gr[index]]
        }
        
     }
    console.log(ff2);
    
    return(
   

        <>
        <h1 className="text-info ms-5 mt-5 fw-bold" data-aos="fade-up">GET MORE PRODUCTS</h1>
        <h4 className="text-light ms-5 mt-2 mb-4 "  data-aos="fade-up"> Upgrade youself ....</h4>

        <section >

            <div className=" mb-3 mt-3 d-flex flex-row justify-content-evenly"  data-aos="fade-up">
        {ff2.map((p)=>{
            return(
                <>
                
              <Link to={`/products/${p.id}`} style={{textDecoration:"none",width:"200px"}}> <div className="card mt-3 mb-4" style={{width: '15rem', height:"20rem"} } onClick={(e)=>{e.persist();showitem(p)}}>
  <img src={p.thumbnail} className="card-img-top" alt="..." style={{height:"150px"}}/>
  <div className="card-body">
  <div className='d-flex flex-row justify-content-evenly w-25'><p className=" text-warning fw-bold">$ </p><p className='fw-bold' style={{fontSize:"14px", width:"70px"}}>{p.price}.00</p></div>
    <h5 className="card-title fw-bold mt-0">{p.title}</h5>
    <p className="card-text mb-0  text-body-secondary" style={{height:"60px",fontSize:"12px", overflow:"hidden"}}>{p.description} </p>
    {/* <a href="#" className="btn btn-primary mt-2">${p.price}</a> */}
  </div>
</div></Link>

                </>
            )
        })}
        </div>
        </section>
        </>
    )
}
export {PRODUCTS}