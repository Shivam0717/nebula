import { useState } from "react";
import "./support.css";

function SUPPORT() {
    const [detail,setdetail]=useState({
        name:"",
        email:"",
        content:""
    })
  return (
    <>
    <section className="contact p-5 m-5 d-flex flex-row  rounded">
      <div className="w-50">
        <div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label text-light"
            >
              Name
            </label>
            <input
              type="text"
              className="form-control w-75 h-auto"
              id="exampleFormControlInput1"
              placeholder="Enter your name"
              value={detail.name}
              onChange={(e)=>setdetail({...detail,name:e.target.value})}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label text-light"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control w-75"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={detail.email}
              onChange={(e)=>setdetail({...detail,email:e.target.value})}
            />
          </div>
          </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label text-light"
          >
            Message
          </label>
          <textarea
            className="form-control w-75"
            id="exampleFormControlTextarea1"
            rows={3}
            defaultValue={""}
            value={detail.content}
            onChange={(e)=>setdetail({...detail,content:e.target.value})}
          />
        </div>
      </div>
      <div className="tr pt-5 ps-4">
        <div>
        <h2 className=" ee text-center text-black">"We Are Here To </h2>
        <h2 className=" ee text-center text-black mb-0">Support You"</h2>
        <p className="tt  text-warning ms-1 mt-4 text-center" >Feel free to reach us...</p>
        </div>
      </div>
      </section>
    </>
  );
}
export { SUPPORT };
