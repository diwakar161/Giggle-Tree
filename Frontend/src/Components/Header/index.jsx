import React, { useContext } from "react";
import { Link } from "react-router-dom"; // ✅ correct import
import Search from "./Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Tooltip from "@mui/material/Tooltip";

import logo from "../../assets/images/logo.png";
import Navigation from "./Navigation";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";

/* ✅ CONTEXT IMPORT (ONLY FIX) */
import { MyContext } from "../../App";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const context = useContext(MyContext);

  return (
    <header className="bg-white">
      {/* Top Strip */}
      <div className="top-strip py-2! border-t border-b border-gray-200">
        <div className="container ">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[14px] font-medium">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>

            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-4">
                <li>
                  <Link
                    to="/help-centre"
                    className="text-[13px] font-medium transition hover:text-gray-600"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/order-tracking"
                    className="text-[13px] font-medium transition hover:text-gray-600"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header py-3! border-b border-gray-200">
        <div className="container flex items-center justify-between ">
          {/* Logo */}
          <div className="col1 w-[25%]">
            <Link to={"/"}>
              <img src={logo} alt="logo" className="w-[180px] h-auto" />
            </Link>
          </div>

          {/* Search */}
          <div className="col2 w-[45%]">
            <Search />
          </div>

          {/* Right Icons + Links */}
          <div className="col3 w-[30%] flex items-center justify-end gap-2">
            <ul className="flex items-center gap-6 list-none">
              {/* Login / Register */}
              <li>
                <Link
                  to="/login"
                  className="link transition text-[15px] font-medium hover:text-gray-600"
                >
                  Login
                </Link>
                &nbsp;|&nbsp;
                <Link
                  to="/register"
                  className="link transition text-[15px] font-medium hover:text-gray-600"
                >
                  Register
                </Link>
              </li>

              {/* Compare */}
              <li>
                <Tooltip title="Compare">
                  <IconButton aria-label="compare">
                    <StyledBadge badgeContent={2} color="secondary">
                      <IoGitCompareOutline size={22} />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              {/* Wishlist */}
              <li>
                <Tooltip title="Wishlist">
                  <IconButton aria-label="wishlist">
                    <StyledBadge badgeContent={3} color="secondary">
                      <FaRegHeart size={22} />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              {/* Cart */}
              <li>
                <Tooltip title="Cart">
                  <IconButton
                    aria-label="cart"
                    onClick={() => context.setOpenCartPanel(true)}
                  >
                    <StyledBadge badgeContent={4} color="secondary">
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
