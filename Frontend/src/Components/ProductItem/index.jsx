import React from "react";
import "../ProductItem/style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
const ProductItem = () => {
  return (
    <div className="productItem shadow-lg rounded-md overflow-hidden border border-[rgba(0,0,0,0.1)] ">
      <div className="imgWrapper w-full h-[220px] overflow-hidden rounded-md relative">
        <img
          src="https://serviceapi.spicezgold.com/download/1753722939206_125c18d6-592d-4082-84e5-49707ae9a4fd1749366193911-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-1.jpg"
          className="w-full"
        />
        <span className="discount flex items-center absolute top-2.5 left-2.5 z-50 bg-#ff5252 text-white rounded-md "></span>
      </div>

      <div className="info p-3 py-5">
        <h6 className="text-[13px]">
          <Link to="/" className="link transition-all">
            Soylent Green
          </Link>
        </h6>

        <h3 className="text-[13px] mt-1 mb-1 font-medium text-black">
          <Link to="/" className="link transition-all">
            Siril Georgette Pink Color Saree with Blouse Piece
          </Link>
        </h3>
        <Rating name="size-small " defaultValue={4} size="small" readOnly />
        <div className="flex items-center gap-4">
<span className="oldPrice line-through text-gray-500 text-[15px] font-medium"> $58.00 </span>
<span className="price text-[#ff5252]  text-[15px] font-semibold">58.00</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
