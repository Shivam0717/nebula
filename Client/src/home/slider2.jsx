import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import data from "../data.json"
import "./slider.css"

// Import Swiper styles
import 'swiper/css';
import { MODAL } from '../modal';
import { useDispatch, useSelector } from 'react-redux';
import { showproducts } from '../redux/action';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from "react";

function SLIDER2(){

  useEffect(() => {
    AOS.init();
  }, [])

  const item=useSelector((state)=>state.item.item)
  console.log(item,"pp");

  const dispatch=useDispatch()

  const nav=useNavigate()

  function showitem(a){
    dispatch(showproducts(a,nav))
  }

  const pr=useSelector((state)=>state.root.data[0])
//   console.log(pr,"djkhjsd");
  const neww=pr
  // console.log(neww);
  // console.log(neww[1].stock<50);
  const sld = neww.filter((a)=>Number(a.stock)>55)
  // console.log(sld);
    return(
        <>
         <div className='d-flex flex-column justify-content-center  mt-1'>
        <h1 className="text-warning ms-5 mt-5 fw-bold" data-aos="fade-up">OUR PRODUCTS</h1>
        <h4 className="text-light ms-5 ps-2 mt-2 mb-2"data-aos="fade-up"> Released in Halloween</h4>
        </div>
        <section className="r-wrapper  mt-1 bg-black  pb-5" style={{overflow:"hidden" , width:"1470px",height:"400px"}}>
    <Swiper
    
      spaceBetween={10}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}

      data-aos="fade-up"
    >
         <SliderButtons />
         {sld.map((a)=>{
          return(
            <>
            <SwiperSlide>
{/* data-bs-target="#exampleModalToggle" data-bs-toggle="modal" */}
<Link to={`/products/${a.id}`} style={{textDecoration:"none"}}><div className="card pb-1  mt-5" style={{width: '15rem', height:"20rem", marginLeft:"25px"}}  onClick={(e)=>{e.persist(),showitem(a)}}> 
<img src={a.thumbnail} className="card-img-top " alt="..." style={{height:"150px"}}/>
<div className="card-body">
<div className='d-flex flex-row justify-content-evenly w-25'><p className=" text-warning fw-bold">$ </p><p className='fw-bold' style={{fontSize:"14px"}}>{a.price}.00</p></div>
<h5 className="card-title" style={{fontSize:"16px"}}>{a.title}</h5>
<p className="card-text " style={{height:"60px", overflow:"hidden", fontSize:"12px", color:"grey"}}>{a.description}</p>

</div>
</div></Link>


  </SwiperSlide>
            </>
          )
         })
        
}
        {/* <SwiperSlide>yo</SwiperSlide>
        <SwiperSlide>yo</SwiperSlide>
        <SwiperSlide>yo</SwiperSlide>
        <SwiperSlide>yo</SwiperSlide>
        <SwiperSlide>yo</SwiperSlide> */}


      {/* <SwiperSlide style={{width:"1400"}}>
      <div className='d-flex flex-row ' style={{width:"1400"}}>
        {sld.map((p)=>{
            return(
                <>
                
               <div className="card " style={{width: '200px', height:"23rem"} }>
  <img src={p.thumbnail} className="card-img-top" alt="..." style={{height:"200px"}}/>
  <div className="card-body">
    <h5 className="card-title fw-bold">{p.title}</h5>
    <p className="card-text mb-0  text-body-secondary" style={{height:"70px", overflow:"hidden"}}>{p.description}</p>

  </div>
</div>


                </>
            )
        })}
      </div>
      </SwiperSlide> */}
      
    </Swiper>
    </section>
   
        </>
    )
}
export{SLIDER2}

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="d-flex flex-row justify-content-between  r-buttons" style={{width:"1470px"}}>
      <button className='bt2'  onClick={() => swiper.slidePrev()}>&lt;</button>
      <button className='bt2' onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

