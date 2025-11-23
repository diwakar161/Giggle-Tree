import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home"; 


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path={"/" } exact={true} element={<Home/>}/>
  
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
