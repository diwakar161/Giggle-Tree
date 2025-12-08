import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home"; 
import Footer from "./Components/Footer";
import ProductListing from "./Pages/ProductListing";


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path={"/" } exact={true} element={<Home/>}/>
        <Route path={"/productListing" } exact={true} element={<ProductListing/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
