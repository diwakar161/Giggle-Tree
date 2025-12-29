import React from "react";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Rating from "@mui/material/Rating";
import { GoTriangleDown } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";

const CartItems = (props) => {
  const [selectedSize, setCartItems] = React.useState(props.size);
  const [sizeanchorEl, setSizeAnchorEl] = React.useState(null);
  const openSize = Boolean(sizeanchorEl);
  const [qtyanchorEl, setQtyAnchorEl] = React.useState(null);
  const [selectedQty, setSelectedQty] = React.useState(props.qty);
  const openQty = Boolean(qtyanchorEl);
  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };
  const handleCloseSize = (value) => {
    setSizeAnchorEl(null);
    if (value !== null) {
      setCartItems(value);
    }
  };

  const handleClickQty = (event) => {
    setQtyAnchorEl(event.currentTarget);
  };
  const handleCloseQty = (value) => {
    setQtyAnchorEl(null);
    if (value != null) {
      setSelectedQty(value);
    }
  };

  return (
    <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
      <div className="img w-[15%]  rounded-md overflow-hidden">
        <Link to="/product/7845" className=" group">
          <img
            src="https://images.pexels.com/photos/2533323/pexels-photo-2533323.jpeg"
            className="=w-full transition-all group-hover:scale-105"
          />
        </Link>
      </div>
      <div className="info w-[85%] relative">
        <IoCloseSharp className="text-[22px] cursor-pointer absolute top-0 right-0 link transition-all" />
        <span className="text-[13px]">Sangria</span>
        <h3 className="text-[15px]">
          <Link className="">A-winter wear Sweatshirt and a Cap</Link>
        </h3>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-4 mt-2">
          {/* SIZE BUTTON */}
          <span
            className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-semibold py-1 px-2 rounded-md cursor-pointer"
            onClick={handleClickSize}
          >
            Size: {selectedSize}
            <GoTriangleDown />
          </span>

          {/* SIZE MENU */}
          <Menu
            id="size-menu"
            anchorEl={sizeanchorEl}
            open={openSize}
            onClose={() => handleCloseSize(null)}
          >
            <MenuItem onClick={() => handleCloseSize("S")}>S</MenuItem>
            <MenuItem onClick={() => handleCloseSize("M")}>M</MenuItem>
            <MenuItem onClick={() => handleCloseSize("L")}>L</MenuItem>
            <MenuItem onClick={() => handleCloseSize("XL")}>XL</MenuItem>
            <MenuItem onClick={() => handleCloseSize("XXL")}>XXL</MenuItem>
          </Menu>

          {/* QTY BUTTON */}
          <span
            className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-semibold py-1 px-2 rounded-md cursor-pointer"
            onClick={handleClickQty}
          >
            Qty: {selectedQty}
            <GoTriangleDown />
          </span>

          {/* QTY MENU */}
          <Menu
            id="qty-menu"
            anchorEl={qtyanchorEl}
            open={openQty}
            onClose={() => handleCloseQty(null)}
          >
            <MenuItem onClick={() => handleCloseQty(1)}>1</MenuItem>
            <MenuItem onClick={() => handleCloseQty(2)}>2</MenuItem>
            <MenuItem onClick={() => handleCloseQty(3)}>3</MenuItem>
            <MenuItem onClick={() => handleCloseQty(4)}>4</MenuItem>
            <MenuItem onClick={() => handleCloseQty(5)}>5</MenuItem>
            <MenuItem onClick={() => handleCloseQty(6)}>6</MenuItem>
            <MenuItem onClick={() => handleCloseQty(7)}>7</MenuItem>
            <MenuItem onClick={() => handleCloseQty(8)}>8</MenuItem>
            <MenuItem onClick={() => handleCloseQty(9)}>9</MenuItem>
            <MenuItem onClick={() => handleCloseQty(10)}>10</MenuItem>
          </Menu>
        </div>

        <div className="flex items-center gap-4 mt-2">
          <span className=" oldPriceline-through  text-[14px] font-semibold">
            $58.00
          </span>
          <span className=" pricetext text-[#ff5252] text-[14px]  font-semibold">
            $30.00
          </span>
          <span className=" pricetext- text-[#ff5252] text-[14px]  font-semibold">
            55% OFF
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
