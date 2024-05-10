"use client";
import { useState } from "react";
import Image from "next/image";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  

  const Menus = [
    { title: "Home", src: "Home" },
    { title: "User Management", src: "user-02", Dropdown: ["Users", "Employees", "Drivers", "Influencers"] },
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
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSubmenuClick = (event: React.MouseEvent) => {
    // Prevent event propagation to parent elements
    event.stopPropagation();


    
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
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
          
          </h1>
        </div>
        <ul className="pt-6">
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
           {/* here dropdown*/}
           {Menu.Dropdown && (
            <div className="relative">

    <div onClick={toggleDropdown}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        {/*  my seond Chevron icon */}

        {isDropdownOpen ? (
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 0 0-1.707-.707l-6 6a1 1 0 0 0 1.414 1.414L10 5.414l5.293 5.293a1 1 0 1 0 1.414-1.414l-6-6A1 1 0 0 0 10 3z"
                      clipRule="evenodd"
                      />
                    ) : (
                      <path
                      fillRule="evenodd"
                      d="M10 17a1 1 0 0 1-1-1V7.414l-5.293 5.293a1 1 0 1 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0l6 6a1 1 0 1 1-1.414 1.414L11 7.414V16a1 1 0 0 1-1 1z"
                      clipRule="evenodd"
                      />
                    )}
      </svg>
      </div>
    </div>
  )}
  {Menu.Dropdown && isDropdownOpen && (
    <ul className="absolute  left-3 bg-blue-500 shadow-lg py-2 mt-1" onClick={handleSubmenuClick}>
      {Menu.Dropdown.map((item, subIndex) => (
        <li
          key={subIndex}
          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
        >
          {item}
        </li>
      ))}
    </ul>
  )} 

{/* toggle ends here */}



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
