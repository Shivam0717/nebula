import { useDispatch, useSelector } from "react-redux"
import data from "../data.json"
import { useNavigate } from "react-router";
import { showproducts } from "../redux/action";
import { Link } from "react-router-dom";
import "./Prod.css"
import { toast, Toaster } from "sonner";
import { useEffect, useState } from "react";

function PROD2(){

  const[price,setprice]=useState("")

  const[pr,setpr]=useState([])
  
  const qq=useSelector((state)=>state.root.data[0])

  console.log(pr,"djkhjsd");

  useEffect(()=>{
    console.log("rere");
    setpr(qq)
    
  },[])
    
    // const product=pr
    // const product=useSelector((state)=>state.root.data[0])
    // console.log(product);
    // console.log(product.root.data);
    // const pr=data.products

    

    const item=useSelector((state)=>state.item.item)
    console.log(item,"pp");

    const dispatch=useDispatch()
    const navigate=useNavigate()

    function show(){
      console.log(price,"one");
      console.log(qq);
      if(price==""){
        setpr(qq)
      }
      else{
      let aa=qq.map((a)=>{ 
       
        if((Number(price)-300)<Number(a.price)&&Number(a.price)<Number(price)){
          return(a)
        }
        else{
          return([])
        }
      })
      console.log(aa,"qwq");
      setpr(aa.flat())

    }
  }


    function showitem(p){   //here i passed navigate as parameter BUT not use in future //bcoz of this parameter maxcallstack error occured 
        console.log(p);
        dispatch(showproducts(p))
    }
    // let arr=[]
    // for (let index = 0; index < 4; index++) {
    //     let row=[]
    //     for (let j = 0; j <= index; j++) {
    //        row.push(<> <span  class="material-symbols-outlined star1">
    //        star
    //        </span></>)
            
    //     }
    //     arr.push(row)
    // }
    return(
        
        <>
        <section className="d-flex flex-row">
        <div className="ms-3 fixed-top " style={{height:"600px", width:"250px",  borderRight:"solid 2px grey",marginTop:"100px"}}>
            <div className="ps-3 mt-3 me-3 pb-3 text-white border-bottom border-warning"><h4 className="fw-bolder">Filters</h4></div>
            <div className="pe-3 ps-2">
                <p className="mt-4 ms-3 text-light fw-bold" style={{fontSize:"14px"}}>Price</p>
                <div className="me-3 mt-2 ms-3">
                <div className="form-check mb-2 ">
    <input className="form-check-input" type="radio" value="300" name="flexRadioDefault" id="flexRadioDefault1" onChange={(e)=>setprice(e.target.value)}/>
    <label className="form-check-label text-light" htmlFor="flexRadioDefault1" style={{fontSize:"14px"}}>
        $ 0 - $ 300
    </label>
  </div> <div className="form-check mb-2">
    <input className="form-check-input" type="radio" value="600" name="flexRadioDefault" id="flexRadioDefault1"  onChange={(e)=>setprice(e.target.value)}/>
    <label className="form-check-label text-light" htmlFor="flexRadioDefault1" style={{fontSize:"14px"}}>
        $ 300 - $ 600
    </label>
  </div> <div className="form-check mb-2">
    <input className="form-check-input" type="radio" value="900" name="flexRadioDefault" id="flexRadioDefault1"  onChange={(e)=>setprice(e.target.value)}/>
    <label className="form-check-label text-light" htmlFor="flexRadioDefault1" style={{fontSize:"14px"}}>
    $ 600 - $ 900
    </label>
  </div> <div className="form-check mb-2">
    <input className="form-check-input" type="radio" value="1200" name="flexRadioDefault" id="flexRadioDefault1"  onChange={(e)=>setprice(e.target.value)}/>
    <label className="form-check-label text-light" htmlFor="flexRadioDefault1" style={{fontSize:"14px"}}>
    $ 900 - $ 1200
    </label>
  </div>
</div>
            </div>
            
            <div className="pe-3 ps-2">
                <p className="mt-5 ms-3 text-light fw-bold" style={{fontSize:"15px"}}>Rating</p>
                <div className="me-3 mt-2">
                    <section style={{marginLeft:"15px"}}>
                      
                  
  <div className="form-check mb-2">
    <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault1" />
    <label className="form-check-label text-light" htmlFor="flexRadioDefault1">
    <span  class="material-symbols-outlined star1">
star
</span>
    </label>
  </div><div className="form-check mb-2">
    <input className="form-check-input " type="radio" name="flexRadioDefault2" id="flexRadioDefault1" />
    <label className="form-check-label text-light" htmlFor="flexRadioDefault1">
    <span  class="material-symbols-outlined star1">
star
</span> <span  class="material-symbols-outlined star1">
star
</span>
    </label>
  </div><div className="form-check mb-2">
    <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault1" />
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
    <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault1" />
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
    <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault1" />
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
<button type="button" class="btn btn-primary p-0 mt-4 ms-2 fw-bold" style={{height:"30px",width:"200px",fontSize:"15px"}} onClick={show}>APPLY</button>
</div>
            </div>
        </div>
        <div className=" p-5" style={{height:"auto", width:"1150px", backgroundColor:"rgba(0,0,0,0.1)",marginTop:"100px", marginLeft:"300px"}}>
            <h3 className="text-white fw-bolder mb-5 " style={{marginTop:"-130px"}} >PRODUCTS</h3>
            {pr.map((p)=>{
                return(
                    <>
                   <Link to={`/products/${p.id}`} style={{textDecoration:"none"}}>   <div className="w-100 pd border-bottom border-top border-warning d-flex flex-row justify-content-between p-3 " style={{height:"200px"}}  onClick={(e)=>{e.persist();showitem(p)}}>
            <img className="h-100 border border-dark rounded " src={p.thumbnail} alt="" style={{width:"200px"}}/>
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
export {PROD2}



//satish sir //auditor //dhanvarsha trucap company // jehdi ldh branch h //hmbla road  //othe gold packagr short /// system ch closing // cash short
//ajay kumar (auditor)
//sanjeev amritpal nameeta  ehna nu dsje anda

//nitesh sharma customer //16 lakh //payment online k