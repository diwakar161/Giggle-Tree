import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../../Components/ProductZoom";
// import Link from '@mui/material/Link';
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";

import TextField from "@mui/material/TextField";
import ProductSlider from "../../Components/ProductSlider";
import ProductDetailsComponent from "../../Components/ProductDetails";


const ProductDetails = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <>
      <div className="py-5 pb-0">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              to="/"
              className="link transition-all"
            >
              Home
            </Link>

            <Link
              underline="hover"
              color="inherit"
              to="/"
              className="link transition-all"
            >
              Fashion
            </Link>

            <Link
              underline="hover"
              color="inherit"
              className="link transition-all"
            >
              Cropped Satin Bomber Jacket
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white py-5">
        <div className="container flex gap-8 items-center ">
          <div className="productZoomContainer w-[40%] ">
            <ProductZoom />
          </div>
          <div className="productContent actions w-[60%] pr-10 pl-10">
           <ProductDetailsComponent/>
          </div>
        </div>

        <div className="container pt-10">
          <div className="flex items-center gap-8 mb-5">
            <span
              className={`link text-[17px] cursor-pointer font-medium} ${
                activeTab === 0 && "text-[#ff5252]"
              }
             `}
              onClick={() => setActiveTab(0)}
            >
              Description
            </span>

            <span
              className={`link text-[17px] cursor-pointer font-medium} ${
                activeTab === 1 && "text-[#ff5252]"
              }
             `}
              onClick={() => setActiveTab(1)}
            >
              Product Details
            </span>

            <span
              className={`link text-[17px] cursor-pointer font-medium} ${
                activeTab === 2 && "text-[#ff5252]"
              }
             `}
              onClick={() => setActiveTab(2)}
            >
              Reviews (5)
            </span>
          </div>

          {activeTab === 0 && (
            <div className="shadow-md w-full px-8 py-8 rounded-md">
              <p>
                The best is yet to come ! Give your wardrobe the upgrade it
                needs with the latest in fashion. The new season has arrived and
                the best is yet to come ! Give your wardrobe the upgrade it
                needs with the latest in fashion.
              </p>
              <h4>Lightweight Design</h4>
              <p>
                The lightweight, breathable fabric keeps you cool and
                comfortable whether you’re lounging on the beach or strolling
                around town. Designed with a relaxed collar and button-front
                closure, this shirt offers a laid-back vibe that pairs perfectly
                with jeans, shorts, or chinos.
              </p>
              <h4>Free Shipping & Return</h4>
              <p>
                We offer free shipping on all orders over $50. We also offer
                free returns on all orders.
              </p>
              <h4>Money Back Guarantee</h4>
              <p>
                We offer a 30-day money back guarantee on all orders. If you’re
                not 100% satisfied with your purchase, simply return it within
                30 days for a full refund.
              </p>
              <h4>Online Support</h4>
              <p>
                Our customer support team is available 24/7 to help you with any
                questions or concerns you may have.
              </p>
            </div>
          )}

          {activeTab === 1 && (
            <div className="shadow-md w-full px-8 py-8 rounded-md">
              <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
                <table class="w-full text-sm text-left rtl:text-right text-body">
                  <thead class="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                    <tr>
                      <th scope="col" class="px-6 py-3 font-medium">
                        Product name
                      </th>
                      <th scope="col" class="px-6 py-3 font-medium">
                        Color
                      </th>
                      <th scope="col" class="px-6 py-3 font-medium">
                        Category
                      </th>
                      <th scope="col" class="px-6 py-3 font-medium">
                        Price
                      </th>
                      <th scope="col" class="px-6 py-3 font-medium">
                        Stock
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-neutral-primary border-b border-default">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td class="px-6 py-4 font-semibold ">Silver</td>
                      <td class="px-6 py-4 font-semibold ">Laptop</td>
                      <td class="px-6 py-4 font-semibold">$2999</td>
                      <td class="px-6 py-4 font-semibold">231</td>
                    </tr>
                    <tr class="bg-neutral-primary border-b border-default">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                      >
                        Microsoft Surface Pro
                      </th>
                      <td class="px-6 py-4">White</td>
                      <td class="px-6 py-4">Laptop PC</td>
                      <td class="px-6 py-4">$1999</td>
                      <td class="px-6 py-4">423</td>
                    </tr>
                    <tr class="bg-neutral-primary">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                      >
                        Magic Mouse 2
                      </th>
                      <td class="px-6 py-4">Black</td>
                      <td class="px-6 py-4">Accessories</td>
                      <td class="px-6 py-4">$99</td>
                      <td class="px-6 py-4">121</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="shadow-md w-[80%] px-8 py-8 rounded-md">
              <div className="w-full productReviewsContainer">
                <h2 className="text-[18px]">Customer questions & answers</h2>
                <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5">
                  <div className="review w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-20 h-20 overflow-hidden rounded-full">
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt="user"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Diwakar Kumar</h4>
                        <h5 className="text-[13px] mb-0">2025-12-10</h5>
                        <p className="text-[16px] mb-0 mt-0">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Eveniet odio perspiciatis sequi numquam fuga
                          architecto ad porro nostrum rem quasi.
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                  <div className="review w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-20 h-20 overflow-hidden rounded-full">
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt="user"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Diwakar Kumar</h4>
                        <h5 className="text-[13px] mb-0">2025-12-10</h5>
                        <p className="text-[16px] mb-0 mt-0">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Eveniet odio perspiciatis sequi numquam fuga
                          architecto ad porro nostrum rem quasi.
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>{" "}
                  <div className="review w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-20 h-20 overflow-hidden rounded-full">
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt="user"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Diwakar Kumar</h4>
                        <h5 className="text-[13px] mb-0">2025-12-10</h5>
                        <p className="text-[16px] mb-0 mt-0">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Eveniet odio perspiciatis sequi numquam fuga
                          architecto ad porro nostrum rem quasi.
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                  <div className="review pt-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-20 h-20 overflow-hidden rounded-full">
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt="user"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Diwakar Kumar</h4>
                        <h5 className="text-[13px] mb-0">2025-12-10</h5>
                        <p className="text-[16px] mb-0 mt-0">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Eveniet odio perspiciatis sequi numquam fuga
                          architecto ad porro nostrum rem quasi.
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                </div>

                <br />

                <div className="reviewForm bg-[#fafafa] p-4 rounded-md">
                  <h2 className="text-[18px]">Add a review</h2>

                  <form className="w-full mt-5">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Write a review..."
                      multiline
                      rows={5}
                      className="w-full mb-5"
                    />
                    <br /> <br />
                    <Rating name="size-small" defaultValue={4} />
                    <div className="flex items-center mt-5">
                      <Button className="btn-org">Submit Review</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="container pt-8 ">
          <h2 className="text-[20px] font-semibold pb-0 ">Related Products</h2>
          <ProductSlider items={6} />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
