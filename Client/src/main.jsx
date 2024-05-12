import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { Provider } from 'react-accessible-accordion/dist/types/components/ItemContext.js'
import { store } from "./redux/store/index.js";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ABOUT } from "./About.jsx";
import { HOME } from "./Home.jsx";
import { PRODUCTS } from "./home/products.jsx";
import { PRODUCT2 } from "./Product.jsx";
import { PROD2 } from "./Products/Prod.jsx";
import { SIGNUP } from "./log/signup.jsx";
import { OTP } from "./log/otp.jsx";
import { LOGIN } from "./log/login.jsx";
import { SUPPORT } from "./Support/support.jsx";
import { ITEM } from "./item.jsx";
import { CATEG } from "./Products/categ.jsx";
import LOADING from "./loading.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/signup" element={<SIGNUP />}></Route>
            <Route path="/otpverify" element={<OTP/>}></Route>
            <Route path="/login" element={<LOGIN/>}></Route>
            <Route path="/home" element={<HOME />}></Route>
            <Route path="/home/:login" element={<HOME />}></Route>
            <Route path="/about" element={<ABOUT />}></Route>
            <Route path="/support" element={<SUPPORT/>}></Route>
            <Route path="/products/:item" element={<ITEM/>}></Route>
            <Route path="/:categ" element={<CATEG/>}/>
           
             
              {/* <Route path="/products/signup" element={<SIGNUP />}></Route> */}
              <Route path="/allproducts" element={<PROD2 />}></Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    
  </Provider>
);
