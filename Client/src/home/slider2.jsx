
import 'aos/dist/aos.css';

import { useEffect, useState } from "react";

function SLIDER2(){

  const [count, setCount] = useState({
    cust:0,
    stores:0,
    dealers:0
  });

  // useEffect(() => {                              //No, that code is not entirely correct. In the useEffect hook, when updating the state with setCount, you should use the functional update approach to ensure that you are updating the state based on the previous state correctly.
  //   const interval = setInterval(() => {
  //       setCount(({
  //           ...count,
  //           stores: count.stores < 100 ? count.stores + 1 : count.stores,
  //           // cust: cust < 25 ? cust + 1 : cust,
  //           // dealers: dealers < 200 ? dealers + 1 : dealers
  //       }));
  //   }, 50);



//   In the above code snippet, you attempted to update the count state using setCount. However, there are a few issues:

// Directly using the count state: You directly accessed the count state inside setInterval. In React, state updates are asynchronous. So, when you're updating the state inside setInterval, count might not be the most up-to-date state. This could lead to unexpected behavior because the count value may not be what you expect it to be.

// Missing functional update: React provides a functional form of state update using setState or in this case, setCount. When the new state depends on the previous state, it's recommended to use this functional form. This ensures that you're always updating the state based on the latest state.

// Here's why the functional update is important:

// Let's say the count state changes between the time setInterval is set up and when it actually executes. In this case, your count inside setInterval will be outdated, potentially leading to unexpected behavior.

// By using the functional update (prevCount => ...), React guarantees that you're always working with the latest state. This is crucial for cases where state updates are asynchronous or when multiple updates may occur in a short period.


//   useEffect(() => {
//     const interval = setInterval(() => {
//         setCount(prevCount => ({
//             ...prevCount,
//             stores: prevCount.stores < 100 ? prevCount.stores + 1 : prevCount.stores,
//             cust: prevCount.cust < 25 ? prevCount.cust + 1 : prevCount.cust,
//             dealers: prevCount.dealers < 200 ? prevCount.dealers + 1 : prevCount.dealers
//         }));
//     }, 50);

//     return () => clearInterval(interval);
// }, []);



////////for different increment time/////

useEffect(() => {
  const intervalStores = setInterval(() => {
      setCount(prevCount => ({
          ...prevCount,
          stores: prevCount.stores < 100 ? prevCount.stores + 1 : prevCount.stores
      }));
  }, 100); // Increment stores every 50 milliseconds

  const intervalCust = setInterval(() => {
      setCount(prevCount => ({
          ...prevCount,
          cust: prevCount.cust < 70 ? prevCount.cust + 1 : prevCount.cust
      }));
  }, 150); // Increment cust every 100 milliseconds

  const intervalDealers = setInterval(() => {
      setCount(prevCount => ({
          ...prevCount,
          dealers: prevCount.dealers < 200 ? prevCount.dealers + 1 : prevCount.dealers
      }));
  }, 50); // Increment dealers every 200 milliseconds

  return () => {
      clearInterval(intervalStores);
      clearInterval(intervalCust);
      clearInterval(intervalDealers);
  };
}, []);

   

    return(
        <>
        <div className='my-5 px-4' style={{width:"100%", height:"100px"}}>

         <div className=' h-100 w-100 d-flex justify-content-between' >
          <div className='h-100' style={{width:"33%"}}><p className='fw-bold text-center text-info mb-0' style={{fontSize:"30px"}}>Customers</p><p className='fw-bold text-center text-white' style={{fontSize:"50px"}}>{count.cust}k+</p></div>
          <div className='h-100' style={{width:"33%"}}><p className='fw-bold text-center text-info mb-0' style={{fontSize:"30px"}}>Stores</p><p className='fw-bold text-center text-white' style={{fontSize:"50px"}}>{count.stores}+</p></div>
          <div className='h-100' style={{width:"33%"}}><p className='fw-bold text-center text-info mb-0' style={{fontSize:"30px"}}>Dealers</p><p className='fw-bold text-center text-white' style={{fontSize:"50px"}}>{count.dealers}+</p></div>
         </div>
         </div>
   
        </>
    )
}
export{SLIDER2}



