import React from "react";
import Button from "@mui/material/Button";
import QtyBox from "../QtyBox";
import Rating from "@mui/material/Rating";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { IoGitCompareOutline } from "react-icons/io5";



const ProductDetailsComponent = () => {
  const [productActionIndex, setProductActionIndex] = React.useState(null);

  return (
    <>
      <h1 className="text-[24px] font-semibold">
        Boys Striped Relaxed Fit Hooded Shirt Boys Checked Regular Fit Shacket
        with Flap Pockets{" "}
      </h1>

      <div className="flex items-center gap-3">
        <span className="text-gray-400 text-[13px]">
          Brands :
          <span className="font-medium text-black opacity-75">
            House of Chikankari
          </span>
        </span>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <span className="text-[13px] cursor-pointer">Review (5)</span>
      </div>
      <div className="flexitems-center gap-4 mt-4 ">
        <span className="oldPrice line-through text-gray-500 text-[20px] font-medium">
          $58.00
        </span>
        <span></span>
        <span className=" price text-[#ff5252] text-[20px] font-semibold">
          $55.00
        </span>
        <span className="text-[14px]">
          Available In Stock:
          <span className="text-green-600 text-[14px] font-bold">
            147 Items
          </span>
        </span>
      </div>
      <p className="mt-3 pr-10 mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel neque
        dignissimos delectus totam quos enim laborum aliquid sit esse fugit,
        beatae quas reiciendis, sed praesentium similique dicta laboriosam.
        Adipisci, consectetur.
      </p>
      <div className="flex items-center gap-3">
        <span className="text-[16px] ">Size:</span>
        <div className="flex items-center gap-1 actions">
          <Button
            className={`${
              productActionIndex === 0 ? " bg-[#ff5252]! text-white !" : ""
            }`}
            onClick={() => setProductActionIndex(0)}
          >
            S
          </Button>
          <Button
            className={`${
              productActionIndex === 1 ? " bg-[#ff5252]! text-white !" : ""
            }`}
            onClick={() => setProductActionIndex(1)}
          >
            M
          </Button>
          <Button
            className={`${
              productActionIndex === 2 ? " bg-[#ff5252]! text-white !" : ""
            }`}
            onClick={() => setProductActionIndex(2)}
          >
            L
          </Button>
          <Button
            className={`${
              productActionIndex === 3 ? " bg-[#ff5252]! text-white !" : ""
            }`}
            onClick={() => setProductActionIndex(3)}
          >
            XL
          </Button>
        </div>
      </div>
      <p className="text-[14px] mb-2 mt-5 text-black">
        Free Shipping(Est. Delivery in 2-3 days)
      </p>
      <div className="flex items-center gap-4 py-4">
        <div className="qtyBoxWrapper w-[70px]">
          <QtyBox />
        </div>
        <Button className="btn-org flex gap-2">
          <MdOutlineShoppingCart className="text-[22px]" /> Add To Cart
        </Button>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-medium">
          <FaRegHeart className="text-[18px]" /> Add to Wishlist
        </span>

        <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-medium">
          <IoGitCompareOutline className="text-[18px]" /> Add to Compare
        </span>
      </div>
    </>
  );
};

export default ProductDetailsComponent;
