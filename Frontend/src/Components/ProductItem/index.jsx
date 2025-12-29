import React from "react";
import { useContext } from "react";
import "../ProductItem/style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import { MyContext } from "../../App";

const ProductItem = () => {
  const context = useContext(MyContext);
  return (
    <div className="productItem shadow-lg rounded-md overflow-hidden border border-[rgba(0,0,0,0.1)] ">
      {/* IMAGE */}
      <div className="imgWrapper w-full   rounded-md relative">
        <Link to="/">
          <div className="img h-[250px] overflow-hidden">
            <img
              src="https://serviceapi.spicezgold.com/download/1753722939206_125c18d6-592d-4082-84e5-49707ae9a4fd1749366193911-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-1.jpg"
              className="w-full h-full object-cover"
            />
            //second image for same image to change on hover in future
            {/* <img
          src="https://serviceapi.spicezgold.com/download/1753722939206_125c18d6-592d-4082-84e5-49707ae9a4fd1749366193911-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-1.jpg"
          className="w-full h-full object-cover"
        /> */}
          </div>
        </Link>
        {/* DISCOUNT */}
        <span className="absolute top-2 left-2 bg-[#ff5252] text-white px-2 py-0.5 rounded-md text-[12px] z-50">
          10%   
        </span>

        {/* ACTION ICONS */}
        <div className="actions absolute top-3 right-3 z-50 flex flex-col gap-2 transition-all  group-hover:opacity-100">
          <Button
            className="w-[35px] h-[35px] min-w-[35px] rounded-full bg-white hover:bg-primary hover:text-white group "
            onClick={() => context.setOpenProductDetailsModal(true)}
          >
            <MdZoomOutMap className="text-[18px] text-black group-hover:text-white" />
          </Button>

          <Button className="w-[35px] h-[35px] min-w-[35px] rounded-full bg-white hover:bg-primary hover:text-white group">
            <IoGitCompareOutline className="text-[18px] text-black group-hover:text-white" />
          </Button>

          <Button className="w-[35px] h-[35px] min-w-[35px] rounded-full bg-white hover:bg-primary hover:text-white group">
            <FaRegHeart className="text-[18px] text-black group-hover:text-white" />
          </Button>
        </div>
      </div>

      {/* INFO */}
      <div className="info p-3 py-5">
        <h6 className="text-[13px] font-normal!">
          <Link to="/" className="link transition-all">
            Soylent Green
          </Link>
        </h6>

        <h3 className="text-[14px] mt-1 font-medium text-black">
          <Link to="/" className="link transition-all">
            Siril Georgette Pink Color Saree with Blouse Piece
          </Link>
        </h3>

        <Rating defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-3 mt-1">
          <span className=" oldPriceline-through text-gray-500 text-[15px] font-medium">$58.00</span>
          <span className=" pricetext-[#ff5252] text-[15px]  font-semibold">$30.00</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
