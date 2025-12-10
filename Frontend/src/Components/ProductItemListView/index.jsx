import React from "react";
import "../ProductItem/style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
// import { MdCutlineShoppingCart } from "react-icons/md";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

const ProductItem = () => {
  return (
    <div className="productItem shadow-lg rounded-md overflow-hidden border border-[rgba(0,0,0,0.1)] flex items-center ">
      {/* IMAGE */}
      <div className="group imgWrapper w-[25%]  rounded-md relative">
        <Link to="/">
          <div className="img h-[220px] overflow-hidden">
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
          <Button className="w-[35px] h-[35px] min-w-[35px] rounded-full bg-white hover:bg-primary hover:text-white group">
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
      <div className="info p-3 py-5 px-8 w-[75% ] ">
        <h6 className="text-[15px] text">
          <Link to="/" className="link transition-all">
            Soylent Green
          </Link>
        </h6>

        <h3 className="text-[18px] mb-3 title mt-3 font-medium text-black">
          <Link to="/" className="link transition-all">
            Siril Georgette Pink Color Saree with Blouse Piece
          </Link>
        </h3>

        <p className="text-[14px] mb-3">
          We denounce with righteous indignation and dislike men who are so
          beguiled and demoralized by the charms of pleasure of the moment, so
          blinded by desire that they cannot{" "}
        </p>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-3 mt-1">
          <span className="line-through text-gray-500">$58.00</span>
          <span className="text-[#ff5252] font-semibold">$30.00</span>
        </div>
        <div className="mt-3">
          <Button className="btn-ord flex gap-2 ">
            <MdOutlineRemoveShoppingCart  className="text-[20px]" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
