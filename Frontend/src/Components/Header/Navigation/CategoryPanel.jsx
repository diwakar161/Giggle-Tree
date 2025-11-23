import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FiMinusSquare } from "react-icons/fi";

function CategoryPanel(props) {
  const [submenuIndex, setSubmenuIndex] = React.useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = React.useState(null);

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };
  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };
  const openInnerSubmenu = (index) => {
    if (innerSubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="p-3 text-[16px] font-medium flex items-center justify-between ">
        Shop By Categories{" "}
        <IoCloseSharp
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[20px]"
        />
      </h3>

      <div className="scroll">
        <ul className="w-full">
          <li className="list-none relative">
            {/* FASHION BUTTON */}
            <div className="flex items-center w-full">
              <Link to="/" className="w-full">
                <Button className="w-full text-left! justify-start! px-3! text-[rgba(0,0,0,0.8)]!">
                  Fashion
                </Button>
              </Link>

              {submenuIndex === 0 ? (
                <FiMinusSquare
                  className="absolute top-2.5 right-[15px] cursor-pointer"
                  onClick={() => openSubmenu(0)}
                />
              ) : (
                <FaRegSquarePlus
                  className="absolute top-2.5 right-[15px] cursor-pointer"
                  onClick={() => openSubmenu(0)}
                />
              )}
            </div>

            {/* SHOW APPAREL ONLY WHEN FASHION IS OPEN */}
            {submenuIndex === 0 && (
              <ul className="submenu pl-3 mt-1">
                {/* APPAREL */}
                <li className="list-none relative mt-1">
                  <div className="flex items-center w-full">
                    <Link to="/" className="w-full">
                      <Button className="w-full text-left! justify-start! px-3! text-[rgba(0,0,0,0.8)]!">
                        Apparel
                      </Button>
                    </Link>

                    {innerSubmenuIndex === 0 ? (
                      <FiMinusSquare
                        className="absolute top-2.5 right-[15px] cursor-pointer"
                        onClick={() => openInnerSubmenu(0)}
                      />
                    ) : (
                      <FaRegSquarePlus
                        className="absolute top-2.5 right-[15px] cursor-pointer"
                        onClick={() => openInnerSubmenu(0)}
                      />
                    )}
                  </div>

                  {/* INNER ITEMS WHEN APPAREL IS OPEN */}
                  {innerSubmenuIndex === 0 && (
                    <ul className="inner_submenu pl-6 mt-1">
                      <li className="list-none mb-1">
                        <Link to="/" className="link px-3! text-[14px]">
                          Smart Tablet
                        </Link>
                      </li>

                      <li className="list-none mb-1">
                        <Link to="/" className="link px-3! text-[14px]">
                          Crepe T-Shirt
                        </Link>
                      </li>

                      <li className="list-none mb-1">
                        <Link to="/" className="link px-3! text-[14px]">
                          Leather Watch
                        </Link>
                      </li>

                      <li className="list-none mb-1">
                        <Link to="/" className="link px-3! text-[14px]">
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="list-none relative mt-1">
                  <div className="flex items-center w-full">
                    <Link to="/" className="w-full">
                      <Button className="w-full text-left! justify-start! px-3! text-[rgba(0,0,0,0.8)]!">
                        Apparel
                      </Button>
                    </Link>

                    {innerSubmenuIndex === 1 ? (
                      <FiMinusSquare
                        className="absolute top-2.5 right-[15px] cursor-pointer"
                        onClick={() => openInnerSubmenu(1)}
                      />
                    ) : (
                      <FaRegSquarePlus
                        className="absolute top-2.5 right-[15px] cursor-pointer"
                        onClick={() => openInnerSubmenu(1)}
                      />
                    )}
                  </div>

                  {/* INNER ITEMS WHEN APPAREL IS OPEN */}
                  {innerSubmenuIndex === 1 && (
                    <ul className="inner_submenu pl-6 mt-1">
                      <li className="list-none mb-1">
                        <Link to="/" className="link px-3! text-[14px]">
                          Smart Tablet
                        </Link>
                      </li>

                      <li className="list-none mb-1">
                        <Link to="/" className="link px-3! text-[14px]">
                          Crepe T-Shirt
                        </Link>
                      </li>

                      <li className="list-none mb-1">
                        <Link to="/" className="link px-3! text-[14px]">
                          Leather Watch
                        </Link>
                      </li>

                      <li className="list-none mb-1">
                        <Link to="/" className="link px-3! text-[14px]">
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}

      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}

export default CategoryPanel;
