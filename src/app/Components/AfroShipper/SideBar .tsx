"use client";
import { useState } from "react";
import Image from "next/image";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const Menus = [
    { title: "Organization", src: "organization", gap: true },
    { title: "Vehicles", src: "truck-01" },
    { title: "Shipment", src: "shopping-bag-03", sc: "chevron-down" },
    { title: "Wallet", src: "wallet-04" },
    { title: "Transaction", src: "Icon" },
    { title: "Shipping Quotes", src: "calculator" },
  ];

  const Menus2 = [
    { title: "Support Tickets", src: "ticket", gap: true },
    { title: "Invoices", src: "invoice" },
    { title: "Market Place", src: "shopping-bag-03" },
    { title: "Log", src: "list" },
    { title: "Settings", src: "settings-02" },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-50" : "w-20 "
        } bg-[#0B0E54]  lg:h-[130vh] h-[152vh] p-5  pt-8 relative duration-300`}
      >
        <img
          src="./assets/control.svg"
          className={`absolute cursor-pointer -right-3 top-9 w-7 bg-[#0B0E54]
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <Image
            src="./assets/Header.svg"
            alt="header"
            width={500}
            height={500}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
        </div>

        <div className="flex pt-6">
          <Image
            src="/assets/Home.svg"
            alt=""
            width={20}
            height={20}
            className="ml-2"
          />
          <p
            className={`${
              !open && "hidden"
            } origin-left duration-200 text-white  ml-4`}
          >
            Home
          </p>
        </div>

        <div className="ml-[-10px] mt-[5px]">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className={`${
              !open && ""
            } relative text-white  hover:bg-yellow-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            type="button"
            onClick={toggleDropdown}
          >
            <div className="flex">
              <Image
                src="/assets/user-02.svg"
                alt=""
                width={20}
                height={20}
                className="mr-3"
              />
              <h3 className={`${!open && "hidden"} `}>User Mangement</h3>
            </div>
            <svg
              className={`${
                !open && "hidden"
              }w-2.5 h-2.5 ms-3 text-yellow-800 ml-10} `}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdown"
            className={`absolute ${
              isDropdownOpen ? "" : "hidden"
            } bg-[#0B0E54] divide-y divide-gray-100 rounded-lg shadow w-44 `}
          >
            <ul
              className={`${!open && "hidden"} py-2 text-sm text-white `}
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-yellow-800 rounded-lg"
                >
                  User
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-yellow-800 rounded-lg"
                >
                  Employee
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-yellow-800 rounded-lg"
                >
                  Drivers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-yellow-800 rounded-lg"
                >
                  Influencer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <ul className="">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 
              ${Menu.gap ? "" : "mt-2"} ${index === 0 && "bg-light-white"} `}
            >
              <Image
                src={`./assets/${Menu.src}.svg`}
                alt=""
                width={20}
                height={20}
              />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
        <div className="div">
          <ul className="">
            <p className={`text-sm text-gray-500 mt-10 ${!open && "hidden"}`}>
              INTERNAL TOOLS
            </p>

            {Menus2.map((Menu, index) => (
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-1" : "mt-2"} ${index === 0 && "bg-light-white"} `}
              >
                <Image
                  src={`./assets/${Menu.src}.svg`}
                  alt=""
                  width={20}
                  height={20}
                />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <div className="div">
            <hr />
          </div>
          <div className="flex justify-between mt-5">
            <Image
              src="/assets/Avatar.svg"
              width={50}
              height={50}
              alt="bg"
              className="mt-3"
            />
            <span className={`mt-3 ml-3 ${!open && "hidden"}`}>
              <h1 className="font-semibold text-sm text-white">Olivia Rhye</h1>
              <h1 className="font-normal text-sm text-gray-200">
                Olivia@untitledui.com
              </h1>
            </span>
            <Image
              src="/assets/logout.svg"
              width={50}
              height={50}
              alt="bg"
              className={`mt-3 ml-3 ${!open && "hidden"}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
