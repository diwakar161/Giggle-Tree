import React from "react";
import Sidebar from "../../Components/Sidebar";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductItem from "../../Components/ProductItem";
import ProductItemListView from "../../Components/ProductItemListView";
import Button from "@mui/material/Button";
import { IoGridSharp } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import  Pagination  from "@mui/material/Pagination";

const ProductListing = () => {
  const [itemView, setItemView] = React.useState("grid");
  // FIXED: Menu states (you commented these out earlier)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="py-5 pb-0">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition-all"
          >
            Home
          </Link>

          <Link
            underline="hover"
            color="inherit"
            href="#"
            className="link transition-all"
          >
            Fashion
          </Link>
        </Breadcrumbs>
      </div>

      <div className="bg-white p-2 mt-4">
        <div className="container flex gap-3">
          <div className="sidebarWrapper w-[20%] h-full bg-white">
            <Sidebar />
          </div>

          <div className="rightContent w-[80%] py-3">
            {/* TOP BAR */}
            <div className="bg-[#f1f1f1] p-2 w-full mb-4 rounded-md flex items-center justify-between">
              <div className="col1 flex items-center gap-3 itemViewActions ">
                {/* FIXED BUTTON SYNTAX */}
                <Button
                  className={`w-10! h-10! min-w-10! rounded-full! flex! items-center! justify-center! text-black! ${
                    itemView === "list" ? "active" : ""
                  }`}
                  onClick={() => setItemView("list")}
                >
                  <LuMenu className="text-[rgba(0,0,0,0.7)]" />
                </Button>

                <Button
                  className={`w-10! h-10! min-w-10! rounded-full! flex! items-center! justify-center! text-black! ${
                    itemView === "grid" ? "active" : ""
                  }`}
                  onClick={() => setItemView("grid")}
                >
                  <IoGridSharp className="text-[rgba(0,0,0,0.7)]" />
                </Button>

                <span className="text-[14px] font-medium pl-3 text-[rgba(0,0,0,0.7)]">
                  There are 27 products
                </span>
              </div>

              {/* SORT MENU */}
              <div className="col2 ml-auto flex items-center justify-end gap-3 pr-4">
                <span className="text-[14px] font-medium pl-3 text-[rgba(0,0,0,0.7)]">
                  Sort By
                </span>

                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="bg-white! text-[12px]! text-black! capitalize! border-2 border-black!"
                >
                  Sales, highest to lowest
                </Button>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    list: { "aria-labelledby": "basic-button" },
                  }}
                >
                  <MenuItem
                    onClick={handleClose}
                    className="text-[13px]! text-black capitalize!"
                  >
                    Sales, highest to lowest
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="text-[13px]! text-black capitalize!"
                  >
                    Relevance
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="text-[13px]! text-black capitalize!"
                  >
                    Name, A to Z
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="text-[13px]! text-black capitalize!"
                  >
                    Name, Z to A
                  </MenuItem>
                </Menu>
              </div>
            </div>

            {/* PRODUCT GRID */}
            <div
              className={`grid ${
                itemView === "grid"
                  ? "grid-cols-4 md:grid-cols-4"
                  : " grid-cols-1 md:grid-cols-1 gap-4"
              } gap-4`}
            >
              {itemView === "grid" ? (
                <>
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                </>
              ) : (
                <>
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                </>
              )}
            </div >
            <div className="flex items-center justify-center mt-10">
              <Pagination
              count={10} showFirstButton showLastButton/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
