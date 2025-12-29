import React from "react";
import TextField from "@mui/material/TextField";

const Checkout = () => {
  return (
    <section className="py-10">
      <div className="container flex gap-5">
        {/* LEFT SIDE */}
        <div className="leftCol w-[70%]">
          <div className="card bg-white shadow-md p-5 rounded-md w-full">
            <h1>Billing Details</h1>

            <form className="w-full mt-5">
              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Full Name"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    type="email"
                    className="w-full"
                    label="Email"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <h6 className="text-[14px] font-medium mb-2">Street address</h6>

              <div className="flex items-center gap-5 pb-5">
                <div className="col w-full">
                  <TextField
                    className="w-full"
                    label="House No. and Street Name"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="col w-full">
                  <TextField
                    className="w-full"
                    label="Apartment, suite, unit, etc. (optional)"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Town / City"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="State / Country"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <h6 className="text-[14px] font-medium mb-3">Postcode / ZIP *</h6>

              <div className="flex items-center gap-5 pb-5">
                <div className="col w-full">
                  <TextField
                    className="w-full"
                    label="ZIP Code"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Email Address"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="rightCol w-[30%]">
          <div className="card shadow-md bg-white p-5 rounded-md">
            <h2 className="mb-4">Your Order</h2>

            <div className="flex items-center justify-between py-3 border-t border-b border-[rgba(0,0,0,0.1)]">
              <span className="text-[14px] font-semibold">Product</span>
              <span className="text-[14px] font-semibold">Subtotal</span>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <div className="img w-20">
                <img
                  src="https://imgs.search.brave.com/Rx57mCHcQtnHyUjJZ0XsM468yuURzP5m946XLPkjOhw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/am92aWluZGlhLmNv/bS9jZG4vc2hvcC9m/aWxlcy8yWTVBNjI5/Ni5qcGc_dj0xNzU0/MDMzMDM2JndpZHRo/PTUzMw"
                  className="w-full rounded transition-all hover:scale-105"
                  alt="product"
                />
              </div>


              
              <div>
                <p className="text-[14px] font-medium">Product Name</p>
                <p className="text-[13px] text-gray-500">₹999</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
