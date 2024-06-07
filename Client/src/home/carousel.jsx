import { Link } from "react-router-dom"
import "./carousel.css"

function CAROUSEL(){
    return(
        <>
        <div className="top-car px-3">
         <div className="car d-flex flex-column gap-4 " style={{width:"35%"}}>
            <div>
            <p className="my-0 fw-bold" style={{fontSize:"30px"}}>India's No. 1 Store</p>
            <h1 style={{fontSize:"53px"}}>We Grow , Us Grow</h1>
            <p style={{lineHeight:"30px", fontSize:"18px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium nulla, id vel possimus veniam provident ipsam eaque velit reprehenderit, iure numquam maxime nesciunt. Laudantium quia quibusdam amet </p>
            </div>
            <button type="button " class="btn btn-outline-info py-2 w-50 fw-bold">Explore
          
            </button>
         </div>

        </div>
        </>
    )
}
export default CAROUSEL