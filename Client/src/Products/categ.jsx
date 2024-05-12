import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { showproducts } from "../redux/action";
import "./Prod.css"

function CATEG(){
    const pr=useSelector((state)=>state.category.categ)
    console.log(pr,"djkhjsd");

    const item=useSelector((state)=>state.item.item)
    console.log(item,"pp");

    const dispatch=useDispatch()

    function showitem(p){   //here i passed navigate as parameter BUT not use in future //bcoz of this parameter maxcallstack error occured 
        console.log(p);
        dispatch(showproducts(p))
    }
    return(
        
        <>
         <section className="d-flex flex-row">
        <div className="ms-3 fixed-top " style={{height:"550px", width:"250px",  borderRight:"solid 2px grey",marginTop:"100px"}}>
            <div className="ps-3 mt-3 me-3 pb-3 text-white border-bottom border-warning"><h4 className="fw-bolder">Filters</h4></div>
            <div className="pe-3 ps-2">
                <p className="mt-4 ms-3 text-light fw-bold" style={{fontSize:"14px"}}>Price</p>
                <div className="me-3 mt-2 ms-3">
                <div className="form-check mb-2 ">
    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
    <label className="form-check-label text-light" htmlFor="flexRadioDefault1" style={{fontSize:"14px"}}>
        $ 0 - $ 100
    </label>
  </div> <div className="form-check mb-2">
    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
    <label className="form-check-label text-light" htmlFor="flexRadioDefault1" style={{fontSize:"14px"}}>
        $ 101 - $ 500
    </label>
  </div> <div className="form-check mb-2">
    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
    <label className="form-check-label text-light" htmlFor="flexRadioDefault1" style={{fontSize:"14px"}}>
        $ 501 - $ 1000
    </label>
  </div> <div className="form-check mb-2">
    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
    <label className="form-check-label text-light" htmlFor="flexRadioDefault1" style={{fontSize:"14px"}}>
        {`>`} $ 1000
    </label>
  </div>
</div>
            </div>
            
            <div className="pe-3 ps-2">
                <p className="mt-5 ms-3 text-light fw-bold" style={{fontSize:"14px"}}>Rating</p>
                <div className="me-3 mt-2">
                <section style={{marginLeft:"15px"}}>
                      
                  
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label text-light" htmlFor="flexRadioDefault1">
                        <span  class="material-symbols-outlined star1">
                    star
                    </span>
                        </label>
                      </div><div className="form-check mb-2">
                        <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label text-light" htmlFor="flexRadioDefault1">
                        <span  class="material-symbols-outlined star1">
                    star
                    </span> <span  class="material-symbols-outlined star1">
                    star
                    </span>
                        </label>
                      </div><div className="form-check mb-2">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label text-light" htmlFor="flexRadioDefault1">
                        <span  class="material-symbols-outlined star1">
                    star
                    </span> <span  class="material-symbols-outlined star1">
                    star
                    </span> <span  class="material-symbols-outlined star1">
                    star
                    </span>
                        </label>
                      </div><div className="form-check mb-2">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label text-light" htmlFor="flexRadioDefault1">
                        <span  class="material-symbols-outlined star1">
                    star
                    </span> <span  class="material-symbols-outlined star1">
                    star
                    </span> <span  class="material-symbols-outlined star1">
                    star
                    </span> <span  class="material-symbols-outlined star1">
                    star
                    </span>
                        </label>
                      </div><div className="form-check mb-2">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label text-light" htmlFor="flexRadioDefault1">
                        <span  class="material-symbols-outlined star1">
                    star
                    </span> <span  class="material-symbols-outlined star1">
                    star
                    </span> <span  class="material-symbols-outlined star1">
                    star
                    </span> <span  class="material-symbols-outlined star1">
                    star
                    </span> <span  class="material-symbols-outlined star1">
                    star
                    </span>
                        </label>
                      </div>
                    
                    
                    </section>
                    <button type="button" class="btn btn-primary p-0 mt-4 ms-2 fw-bold" style={{height:"30px",width:"200px",fontSize:"15px"}}>APPLY</button>
</div>
            </div>
        </div>
        <div className=" p-5" style={{height:"auto", width:"1150px", backgroundColor:"rgba(0,0,0,0.1)",marginTop:"100px", marginLeft:"300px"}}>
            <h3 className="text-white fw-bolder mb-5 " style={{marginTop:"-130px"}} >PRODUCTS</h3>
            {pr.map((p)=>{
                return(
                    <>
                   <Link  to={`/products/${p.id}`} style={{textDecoration:"none"}}>   <div className="w-100 pd border-bottom border-top border-warning d-flex flex-row justify-content-between p-3 " style={{height:"200px"}}  onClick={(e)=>{e.persist();showitem(p)}}>
            <img className="h-100 border border-dark rounded" src={p.thumbnail} alt="" style={{width:"200px"}}/>
            <div className=" w-75  pt-3 pb-0 ps-4 pe-3 mb-0">
                <p className="text-white  fw-bold"style={{fontSize:"20px"}}>{p.title}</p>
                <p className="mt-0 pt-0 text-light" style={{fontSize:"14px"}}>{p.description}</p>
                <h4 className="text-warning ">$ {p.price}.00</h4>
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
export {CATEG}