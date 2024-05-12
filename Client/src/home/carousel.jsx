import { Link } from "react-router-dom"
import "./carousel.css"

function CAROUSEL(){
    return(
        <>
   <div id="carouselExampleAutoplaying" className="carousel slide rounded" data-bs-ride="carousel" >
   
  <div className="carousel-inner rounded">
    
    <div className="carousel-item active rounded" style={{height:"400px"}}>
    <div className="text-white" style={{position:"absolute" , zIndex:"1",width:"1200px" ,textAlign:"center", marginLeft:"150px", marginTop:"20px", textShadow: "2px 2px black"}}>
        <h3 className="text-light fw-bolder">NEW COLLECTION</h3>
        <p className="ev p-0 mb-0 mt-3">Happy Halloween</p>
        <p className="ev p-0 m-0">SALE</p>
        <button className="btn btn-warning mt-4" >SHOP NOW</button>
    </div >
      <img src="https://assets.editorial.aetnd.com/uploads/2009/11/halloween-gettyimages-1424736925.jpg" className="d-block w-100" alt="..." style={{marginTop:"-300px", filter:"blur(8px)"}}/>
    </div>
    <div className="carousel-item active rounded" style={{height:"400px"}}>
    <div className="text-white" style={{position:"absolute" , zIndex:"1",width:"1200px" ,textAlign:"center", marginLeft:"150px", marginTop:"20px", textShadow: "2px 2px black"}}>
        <h3 className="text-light fw-bolder">NEW COLLECTION</h3>
        <p className="ev p-0 mb-0 mt-3">Happy Halloween</p>
        <p className="ev p-0 m-0">SALE</p>
        <button className="btn btn-warning mt-4" >SHOP NOW</button>
    </div >
    
      <img src="https://assets.editorial.aetnd.com/uploads/2009/11/halloween-gettyimages-1424736925.jpg" className="d-block w-100" alt="..." style={{marginTop:"-300px", filter:"blur(8px)"}}/>
    </div> <div className="carousel-item active rounded" style={{height:"400px"}}>
    <div className="text-white" style={{position:"absolute" , zIndex:"1",width:"1200px" ,textAlign:"center", marginLeft:"150px", marginTop:"20px", textShadow: "2px 2px black"}}>
        <h3 className="text-light fw-bolder">NEW COLLECTION</h3>
        <p className="ev p-0 mb-0 mt-3">Happy Halloween</p>
        <p className="ev p-0 m-0">SALE</p>
        <button className="btn btn-warning mt-4" >SHOP NOW</button>
    </div >
      <img src="https://assets.editorial.aetnd.com/uploads/2009/11/halloween-gettyimages-1424736925.jpg" className="d-block w-100" alt="..." style={{marginTop:"-300px", filter:"blur(8px)"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </>
    )
}
export default CAROUSEL