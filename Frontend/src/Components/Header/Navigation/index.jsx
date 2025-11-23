import React, { useState } from "react";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";
import "../Navigation/style.css";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };
  return (
    <>
      <nav className="py-4! px-4! border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between ">
          {/* Left side: Shop by Categories */}
          <div className="col_1 w-[20%] flex items-center">
            <Button
              className="flex items-center gap-2 w-full justify-start font-semibold normal-case"
              onClick={openCategoryPanel}
              sx={{
                color: "black",
                textTransform: "none",
                fontSize: "14px",
                fontWeight: 550,
                "&:hover": { color: "black", backgroundColor: "transparent" },
              }}
            >
              <RiMenu2Fill className="text-[18px]" />
              SHOP BY CATEGORIES
              <LiaAngleDownSolid className="text-[13px] ml-1" />
            </Button>
          </div>

          {/* Center: Navigation links */}
          <div className="col_2 w-[60%] flex justify-center  ">
            <ul className="flex items-center gap-4 nav">
              <li className="list-none">
                <Link
                  to="/"
                  className="text-[14px] font-medium hover:text-gray-600"
                >
                  <Button
                    sx={{
                      color: "rgba(0,0,0,0.8)",
                      textTransform: "none",
                      fontWeight: 500,
                      "&:hover": { color: "#ff5252" },
                    }}
                    className="link-transition"
                  >
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link
                  to="/fashion"
                  className="text-[14px] font-medium hover:text-gray-600"
                >
                  <Button
                    sx={{
                      color: "rgba(0,0,0,0.8)",
                      textTransform: "none",
                      fontWeight: 500,
                      "&:hover": { color: "#ff5252" },
                    }}
                    className="link-transition"
                  >
                    Fashion
                  </Button>
                </Link>

                <div className="submenu absolute top-[120%]  left-0 min-w-[200px] bg-white shadow-md opacity-0">
                  <ul>
                    {/* ---------------- MEN ITEM ---------------- */}
                    <li className="list-none w-full relative">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.8)] text-[14px] w-full text-left! justify-start! rounded-none!">
                          Men
                        </Button>
                      </Link>

                      {/* ------------ SECOND SUBMENU (MOVE THIS HERE) ------------ */}
                      <div className="submenu absolute top-0 left-full min-w-[200px] bg-white shadow-md opacity-0">
                        <ul>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="text-[rgba(0,0,0,0.8)] text-[14px] w-full text-left! justify-start! rounded-none!">
                                T-shirt
                              </Button>
                            </Link>
                          </li>

                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="text-[rgba(0,0,0,0.8)] text-[14px] w-full text-left! justify-start! rounded-none! ">
                                Jeans
                              </Button>
                            </Link>
                          </li>

                          <li className="list-none">
                            <Link to="/" className="w-full">
                              <Button className="text-[rgba(0,0,0,0.8)] text-[14px] w-full text-left! justify-start! rounded-none! ">
                                Footwear
                              </Button>
                            </Link>
                          </li>

                          <li className="list-none">
                            <Link to="/" className="w-full">
                              <Button className="text-[rgba(0,0,0,0.8)] text-[14px] w-full text-left! justify-start! rounded-none!">
                                Pants
                              </Button>
                            </Link>
                          </li>

                          <li className="list-none">
                            <Link to="/" className="w-full">
                              <Button className="text-[rgba(0,0,0,0.8)] text-[14px] w-full text-left! justify-start! rounded-none! ">
                                Watch
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* ------------ END SECOND SUBMENU ------------ */}
                    </li>

                    {/* ---------------- OTHER ITEMS ---------------- */}
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.8)] text-[14px] w-full text-left! justify-start! rounded-none! ">
                          Women 
                        </Button>
                      </Link>
                    </li>

                    <li className="list-none">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.8)] text-[14px] w-full text-left! justify-start! rounded-none! ">
                          Kids
                        </Button>
                      </Link>
                    </li>

                    <li className="list-none">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.8)] text-[14px] w-full text-left! justify-start! rounded-none!">
                          Girls
                        </Button>
                      </Link>
                    </li>

                    <li className="list-none">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.8)] text-[14px] w-full text-left! justify-start! rounded-none! ">
                          Boys
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link
                  to="/electronics"
                  className="text-[14px] font-medium hover:text-gray-600"
                >
                  <Button
                    sx={{
                      color: "rgba(0,0,0,0.8)",
                      textTransform: "none",
                      fontWeight: 500,
                      "&:hover": { color: "#ff5252" },
                    }}
                    className="link-transition"
                  >
                    Electronics
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/bags"
                  className="text-[14px] font-medium hover:text-gray-600"
                >
                  <Button
                    sx={{
                      color: "rgba(0,0,0,0.8)",
                      textTransform: "none",
                      fontWeight: 500,
                      "&:hover": { color: "#ff5252" },
                    }}
                    className="link-transition"
                  >
                    Bags
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/footwear"
                  className="text-[14px] font-medium hover:text-gray-600"
                >
                  <Button
                    sx={{
                      color: "rgba(0,0,0,0.8)",
                      textTransform: "none",
                      fontWeight: 500,
                      "&:hover": { color: "#ff5252" },
                    }}
                    className="link-transition"
                  >
                    Footwear
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/groceries"
                  className="text-[14px] font-medium hover:text-gray-600"
                >
                  <Button
                    sx={{
                      color: "rgba(0,0,0,0.8)",
                      textTransform: "none",
                      fontWeight: 500,
                      "&:hover": { color: "#ff5252" },
                    }}
                    className="link-transition"
                  >
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/beauty"
                  className="text-[14px] font-medium hover:text-gray-600"
                >
                  <Button
                    sx={{
                      color: "rgba(0,0,0,0.8)",
                      textTransform: "none",
                      fontWeight: 500,
                      "&:hover": { color: "#ff5252" },
                    }}
                    className="link-transition"
                  >
                    Beauty
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/wellness"
                  className="text-[14px] font-medium hover:text-gray-600"
                >
                  <Button
                    sx={{
                      color: "rgba(0,0,0,0.8)",
                      textTransform: "none",
                      fontWeight: 500,
                      "&:hover": { color: "#ff5252" },
                    }}
                    className="link-transition"
                  >
                    Wellness
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/jewellery"
                  className="text-[14px] font-medium hover:text-gray-600"
                >
                  <Button
                    sx={{
                      color: "rgba(0,0,0,0.8)",
                      textTransform: "none",
                      fontWeight: 500,
                      "&:hover": { color: "#ff5252" },
                    }}
                    className="link-transition"
                  >
                    Jewellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Right side: Free International Delivery */}
          <div className="col_3 w-[22%] flex justify-end pr-3">
            <p className="text-[14px] font-medium flex items-center gap-2 m-0">
              <GoRocket className="text-[17px]" />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>
      <CategoryPanel
        isOpenCatPanel={isOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
