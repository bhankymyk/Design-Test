"use client"
import { useState } from "react";
import Image from "next/image";


const SideBarD = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Home", src: "Home" },
    { title: "User Management", src: "user-02" },
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
    
  ]

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-[#0B0E54]  p-5  pt-8 relative duration-300`}
      >
        <img
          src="./assets/control.svg"
          className={`absolute cursor-pointer -right-3 top-9 w-7 bg-[#0B0E54]
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <Image
            src="./assets/Header.svg" alt="header" width={500} height={500}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            {/* Alex Fishers */}
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 
              ${Menu.gap ? "" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <Image src={`./assets/${Menu.src}.svg`}  alt="" width={20} height={20}/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>

            <div className="div">

        <ul className="">
              <p  className={`text-sm text-gray-500 mt-10 ${
              !open && "hidden"
            }`}>INTERNAL TOOLS</p>

            
          {Menus2.map((Menu, index) => (
            <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-1" : "mt-2"} ${
              index === 0 && "bg-light-white"
            } `}
            >
              <Image src={`./assets/${Menu.src}.svg`} alt="" width={20} height={20} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
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

              <Image src='/assets/Avatar.svg' width={50} height={50} alt='bg' className='mt-3'/>
        <span  className={`mt-3 ml-3 ${
              !open && "hidden"
            }`}>

        <h1 className='font-semibold text-sm text-white'>Olivia Rhye</h1>
        <h1 className='font-normal text-sm text-gray-200'>Olivia@untitledui.com</h1>
        </span>
        <Image src='/assets/logout.svg' width={50} height={50} alt='bg' className={`mt-3 ml-3 ${!open && "hidden"}`}/>
              </div>

                </div>
      </div>

      
    </div>
  );
};
export default SideBarD;