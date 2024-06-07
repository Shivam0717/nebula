import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "./slider.css"

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';

// Import Swiper styles
import 'swiper/css';
import { useDispatch, useSelector } from 'react-redux';
import { showproducts } from '../redux/action';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function SLIDER(){

  useEffect(()=>{
    AOS.init();
  },[])

  const item=useSelector((state)=>state.item.item)
  console.log(item,"pp");

  const dispatch=useDispatch()

  const nav=useNavigate()

  function showitem(a){
    dispatch(showproducts(a,nav))
  }

  const pr=useSelector((state)=>state.root.data[0])
  console.log(pr,"djkhjsd");
  const neww=pr
  // console.log(neww);
  // console.log(neww[1].stock<50);
  const sld = neww.filter((a)=>Number(a.stock)<55)
  // console.log(sld);
    return(
        <>
        <div  className="" style={{width:"100%", marginTop:"80px", paddingLeft:"250px", paddingRight:"250px"}}><hr className=' text-info bg-info' /></div>
         <div className='d-flex flex-column justify-content-center align-items-center  mt-4'>
        <h1 className="text-info ms-5 mt-5 fw-bold" >OUR PRODUCTS</h1>
        <h4 className="text-light ms-5 ps-2 mt-2 mb-2 " > Released in Halloween</h4>
        </div>
        <section className="r-wrapper  mt-1 bg-black  pb-5" style={{overflow:"hidden" , width:"1470px",height:"400px"}}>
    <Swiper
    
    modules={[ Pagination, Scrollbar,Navigation, Autoplay]}
    spaceBetween={10}
    slidesPerView={5}
    autoplay={{ delay: 2000, disableOnInteraction: false }}
    scrollbar={{ draggable: true }}
    
  
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}

      data-aos="fade-up"
    >
         
         {sld.map((a)=>{
          return(
            <>
            <SwiperSlide>
{/* data-bs-target="#exampleModalToggle" data-bs-toggle="modal" */}
<Link to={`/products/${a.id}`} style={{textDecoration:"none"}}><div className="card pb-1  mt-5"  style={{width: '15rem', height:"20rem", marginLeft:"25px"}} onClick={(e)=>{e.persist(),showitem(a)}}> 
<img src={a.thumbnail} className="card-img-top " alt="..." style={{height:"150px"}}/>
<div className="card-body">
<div className='d-flex flex-row justify-content-evenly w-25'><p className=" text-warning fw-bold">$ </p><p className='fw-bold' style={{fontSize:"14px", width:"70px"}}>{a.price}.00</p></div>
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
export{SLIDER}



