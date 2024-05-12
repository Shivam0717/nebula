import "./middle.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function MIDDLE(){

 useEffect(() => {
        AOS.init();
      }, [])

    return(
        <>
         <div className='d-flex flex-column justify-content-center align-items-center mt-1'>
        <h1 className="text-warning ms-5 mt-5 fw-bold" data-aos="fade-up">CATEGORIES</h1>
        <h4 className="text-light ms-5 mt-2 mb-0 " data-aos="fade-up"> Most Demaded Sections</h4>
        </div>
        <section className="ms-5 me-5 mt-0">
      <div className="row row-cols-1 row-cols-md-3 g-4 m-3 ">
  <div className="col">
    <div className="card  text-bg-black mb-3 ms-2 mt-4" data-aos="flip-left" style={{maxWidth: '25rem',height:"300px"}}>
        
      <img className="img" src="https://img.freepik.com/premium-photo/sport-equipment-orange-background_188078-2757.jpg" alt="" style={{height:"300px"}}/>
      <div className="t1 text-black "><h2 >Electronics</h2></div>
    </div>
  </div>
  <div className="col">
    <div className="card text-bg-danger mb-3 ms-2 mt-4" data-aos="flip-left" style={{maxWidth: '25rem',height:"300px"}}>
      <img className="img" src="https://img.freepik.com/premium-photo/tshirts-hangers-red-background-generative-ai_220873-28684.jpg" alt="" style={{height:"300px"}}/>
      <div className="t2 "><h2>Clothing</h2></div>
     </div>
  </div>
  <div className="col">

<div className="card  mb-3 ms-2 mt-4" data-aos="flip-left" style={{maxWidth: '25rem',height:"300px",backgroundColor:"orange"}}>
  <img className="img" src="https://img.freepik.com/premium-photo/sport-equipment-orange-background_188078-2757.jpg" alt="" style={{height:"300px"}} />
  <div className="t2"><h2>Sports</h2></div>
</div>
</div>
</div>
</section>

        </>
    )
}
export {MIDDLE}