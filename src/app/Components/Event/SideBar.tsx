"use client";
import { useState } from "react";
import Image from "next/image";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Event Types", src: "Event" },
    { title: "Bookings", src: "Clock" },
    { title: "Availability", src: "Availability", gap: true },
    { title: "Apps ", src: "Grid" },
    { title: "Workflow", src: "Zap" },
    { title: "Teams", src: "Teams" },
  ];

  const Menus2 = [
    { title: "View public page", src: "External-link", gap: true },
    { title: "Copy public page link", src: "copy" },
    { title: "settings", src: "settings" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-gray-100 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./assets/control.svg"
          className={`absolute cursor-pointer -right-3 top-9 w-7 bg-gray-100
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <Image
            src="./assets/Avatar-event.svg"
            alt=""
            width={25}
            height={25}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-black origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Alex Fisher
          </h1>

          <Image
            src="./assets/Search.svg"
            alt=""
            width={25}
            height={25}
            className={`cursor-pointer duration-500 ${!open && "hidden"}`}
          />
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-gray-500 text-black text-sm items-center gap-x-4 
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

        <div className="fixed  bottom-0">
          <ul className="">
            {Menus2.map((Menu, index) => (
              <li
                key={index}
                className={`flex rounded-md p-2 cursor-pointer hover:bg-gray-500 text-black text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-10" : "mt-2"} ${index === 0 && "bg-light-white"} `}
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
      </div>
    </div>
  );
};
export default SideBar;
