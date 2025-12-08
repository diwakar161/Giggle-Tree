import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { LiaGiftSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { IoChatboxOutline } from "react-icons/io5";
import { Link } from "react-router";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="py-6 bg-[#fafafa]">
        <div className="container">
          <div className="flex items-center justify-center gap-2 pb-8 py-8">
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <LiaShippingFastSolid className="text-[50px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-semibold mt-3">Free Shipping</h3>
              <p className="text-[12px] font-medium">
                For all Orders Over $100
              </p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <PiKeyReturnLight className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-semibold mt-3">30 Days Return</h3>
              <p className="text-[12px] font-medium">For an Exchange Product</p>
            </div>{" "}
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <BsWallet2 className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-semibold mt-3">
                Secured Payment
              </h3>
              <p className="text-[12px] font-medium">Payment Cards Accepted</p>
            </div>{" "}
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <LiaGiftSolid className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-semibold mt-3">Special Gifts</h3>
              <p className="text-[12px] font-medium">Our First Product Order</p>
            </div>{" "}
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <BiSupport className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-semibold mt-3">Support 24/7</h3>
              <p className="text-[12px] font-medium">Contact us Anytime</p>
            </div>
          </div>

          <hr />
          <div className="footer flex  py-8">
            <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.1)]">
              <h2 className="text-[18px] font-semibold mb-4">Contact us</h2>
              <p className="text-[13px] font-normal pb-4">
                Classyshop - Mega Super Store 507-Union Trade Center France{" "}
              </p>
              <Link
                className="link text-[16px]"
                to="mailto:sales@yourcompany.com"
              >
                sales@yourcompany.com
              </Link>
              <span className="text-[22px] font-semibold block w-full mt-3 mb-5">
                (+123) 456-7890
              </span>

              <div className="flex items-center gap-2">
                <IoChatboxOutline className="text-[40px] text-[#ff5252]" />
                <span className="text-[16px] font-semibold">
                  Online Chat <br />
                  Get Expert Help
                </span>
              </div>
            </div>
            <div className="part2 w-[40%] flex  pl-8">
              <div className="part2_col1 w-[50%]">
                <h2 className="text-[18px] font-semibold mb-4"> Products </h2>

                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      New Products
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Best Sales
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Contact Us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Sitemap
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Stores
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="part2_col2 w-[50%]">
                <h2 className="text-[18px] font-semibold mb-4">
                  {" "}
                  Our company{" "}
                </h2>

                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Delivery
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Legal Notice
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Terms and conditions of use{" "}
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      About us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Secure payment
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="part2 2-[35%] flex pl-8 flex-col pr-8">
              <h2 className="text-[18px] font-semibold mb-4">
                Subscribe to newsletter
              </h2>
              <p className="text-[13px]">
                Subscribe to our latest newsletter to get news about special
                discounts.
              </p>

              <form className="mt-5">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full h-[45px] border outline-none focus:border-[rgba(0,0,0,0.3)]  pl-4 pr-4 rounded-sm mb-4"
                />
                <button className="btn-org">SUBSCRIBE</button>
                <FormControlLabel
                  control={<Checkbox  />}
                  label="I agree to terms and conditions and the privacy policy"
                  className="text-[13px] font-semibold"
                />
              </form>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip border-t border-[rgba(0,0,0,0.2)] py-3">
        <div className="container flex items-center justify-between">
          <ul className="flex items-center gap-2">
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all "
              >
                <FaFacebook className="text-[15px] group-hover:text-white " />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all "
              >
                <AiOutlineYoutube className="text-[18px] group-hover:text-white " />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all "
              >
                <FaPinterest className="text-[15px] group-hover:text-white " />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all "
              >
                <FaInstagram className="text-[15px] group-hover:text-white " />
              </Link>
            </li>
          </ul>
          <p className="text-[13px] text-center mb-0">
            2024 - Ecommerce Template{" "}
          </p>
          <div className="flex items-center">
            <img
              src="https://ecommerce-frontend-view.netlify.app/carte_bleue.png"
              alt="payment"
              
            />
            <img
              src="	https://ecommerce-frontend-view.netlify.app/visa.png"
              alt="payment"
             
            />
            <img
              src="	https://ecommerce-frontend-view.netlify.app/master_card.png"
              alt="payment"
             
            />
            <img
              src="https://ecommerce-frontend-view.netlify.app/american_express.png"
              alt="payment"
             
            />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Footer;
