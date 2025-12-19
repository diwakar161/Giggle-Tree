

import React, { createContext, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import ProductListing from "./Pages/ProductListing";
import ProductDetails from "./Pages/ProductDetails";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ProductZoom from "./Components/ProductZoom";
import ProductDetailsComponent from "./Components/ProductDetails";
import { IoCloseSharp } from "react-icons/io5";

/* ✅ CREATE CONTEXT */
export const MyContext = createContext(null);

function App() {
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [openCartPanel, setOpenCartPanel] = useState(false);

  const toggleCartPanel = (newOpen) => {
    setOpenCartPanel(newOpen);
  };

  const values = {
    setOpenProductDetailsModal,
    setOpenCartPanel,
    toggleCartPanel,
    openCartPanel,
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productListing" element={<ProductListing />} />
            <Route path="/product" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>

          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

      {/* Product Details Modal */}
      <Dialog
        open={openProductDetailsModal}
        fullWidth
        maxWidth="lg"
        onClose={() => setOpenProductDetailsModal(false)}
        className="productDetailsModal"
      >
        <DialogContent>
          <div className="flex w-full relative">
            <Button
              className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! absolute! top-[15px] right-[15px] bg-[#f1f1f1]"
              onClick={() => setOpenProductDetailsModal(false)}
            >
              <IoCloseSharp className="text-[20px]" />
            </Button>

            <div className="w-[40%] px-3">
              <ProductZoom />
            </div>

            <div className="w-[60%] py-8 px-8 pr-16 productContent">
              <ProductDetailsComponent />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Cart Drawer */}
     
    </>
  );
}

export default App;
