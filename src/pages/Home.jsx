import React from "react";
import { Link } from "react-router-dom";
import AppextBarChart from "../components/chart/AppextBarChart";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="w-full lg:col-span-2">
          {/* box-1 */}
          <div className="bg-white rounded-md custom-shadow">
            <div className="flex items-start justify-between bg-[#c5e6fc] rounded-t-md">
              <div className="w-2/3 md:w-1/2 p-5">
                <h2 className="text-md md:text-xl text-[#04CAFB] font-semibold">
                  Welcome Back !
                </h2>
                <p className="text-sm text-[#04CAFB] mb-3 md:mb-0">
                  MJRF Admin Dashboard
                </p>
              </div>
              <div className="w-1/3 md:w-1/2">
                <img
                  src="/img/profile-img.png"
                  alt=""
                  className="w-full object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start justify-between">
              <div className="w-full lg:w-1/3 p-5 relative">
                <div className="absolute -top-6 md:-top-12 left-5 w-14 h-14 md:w-20 md:h-20 rounded-full bg-white">
                  <img src="/img/avatar.png" alt="" className="w-full h-full" />
                </div>
                <div className="mt-5">
                  <h2 className="text-lg font-semibold">Maria Rahman</h2>
                  <p className="text-sm">CEO, MJRAWFUSION</p>
                </div>
              </div>
              <div className="w-full lg:w-2/3 px-5 pb-5 md:px-5 md:py-5">
                <div className="flex items-center">
                  <div className="w-1/2">
                    <h2 className="font-semibold">125</h2>
                    <p className="text-sm">Projects</p>
                  </div>
                  <div className="w-1/2">
                    <h2 className="font-semibold">$655</h2>
                    <p className="text-sm">Revenue</p>
                  </div>
                </div>
                <div>
                  <Link
                    to="/profile"
                    className="inline-block px-4 py-2 bg-[#04CAFB] text-white text-sm rounded-md mt-5"
                  >
                    View Profile <i className="fa-solid fa-arrow-right"></i>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* box-2 */}
          <div className="bg-white rounded-md custom-shadow mt-6">
            <div className="p-5">
              <h2 className="text-lg font-semibold">Monthly Earning</h2>
              <div>
                <p className="text-sm my-3">This month</p>
                <p className="text-xl font-semibold">$35,655</p>
                <p className="text-sm mt-1">
                  <span className="text-sm text-[#04CAFB]">
                    12% <i className="fa-solid fa-arrow-up text-sm"></i>
                  </span>{" "}
                  From previous period
                </p>
                <Link
                  to="/profile"
                  className="inline-block px-4 py-2 bg-[#04CAFB] text-white text-sm rounded-md mt-5"
                >
                  View Profile <i className="fa-solid fa-arrow-right"></i>{" "}
                </Link>
                <p className="text-sm mt-3">
                  We craft digital, graphic and dimensional thinking.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:col-span-3">
          {/* box-3 */}
          <div className="flex flex-col lg:flex-row items-center gap-5">
            <div className="custom-shadow flex items-center justify-between gap-3 bg-white px-4 py-6 w-full rounded-md">
              <div>
                <p className="text-sm mb-2">Orders</p>
                <h2 className="text-xl font-semibold">1,235</h2>
              </div>
              <div>
                <div className="bg-[#04CAFB] w-12 h-12 flex items-center justify-center p-2 rounded-full">
                  <i class="fa-solid fa-cart-shopping text-xl text-white"></i>
                </div>
              </div>
            </div>
            <div className="custom-shadow flex items-center justify-between gap-3 bg-white px-4 py-6 w-full rounded-md">
              <div>
                <p className="text-sm mb-2">Revenue</p>
                <h2 className="text-xl font-semibold">$35, 723</h2>
              </div>
              <div>
                <div className="bg-[#04CAFB] w-12 h-12 flex items-center justify-center p-2 rounded-full">
                  <i class="fa-solid fa-sack-dollar text-xl text-white"></i>
                </div>
              </div>
            </div>
            <div className="custom-shadow flex items-center justify-between gap-3 bg-white px-4 py-6 w-full rounded-md">
              <div>
                <p className="text-sm mb-2">Average Price</p>
                <h2 className="text-xl font-semibold">$16.2</h2>
              </div>
              <div>
                <div className="bg-[#04CAFB] w-12 h-12 flex items-center justify-center p-2 rounded-full">
                  <i class="fa-solid fa-filter-circle-dollar text-xl text-white"></i>
                </div>
              </div>
            </div>
          </div>
          {/* box-4 */}
          <div className="bg-white rounded-md custom-shadow mt-6 lg:h-[79%]">
            <AppextBarChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
