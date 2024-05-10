"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "@/app/Components/Blog/MenuIcon";



const NavList = [
  {
    name: "PRICING",
    link: "#",
  },
  {
    name: "APPS",
    link: "#",
  },
  {
    name: "DEVELOPERS",
    link: "#",
  },
  {
    name: "JOBS",
    link: "#",
  },
  {
    name: "BLOG",
    link: "#",
  },
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 layout-padding">
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-[15rem]">
        <Image
          src="/assets/Logo.svg"
          width={70}
          height={70}
          className=" mr-2"
          alt="Logo"
        />
        <Image
          src="/assets/Hiring.svg"
          width={70}
          height={70}
          className=" mr-2"
          alt="Logo"
        />
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <MenuIcon />
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="text-sm lg:flex border border-gray-500 border-2 black p-3 rounded-3xl bg-white navb">
          {NavList.map(({ name, link }) => (
            <li key={name}>
              <Link
                href={link}
                className={`block mt-4 lg:inline-block lg:mt-0 text-black font-bold mr-10 text-base  `}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex ml-[7rem] loginB">
          <div>
            <button 
            className="inline-flex items-center text-white text-base font-bold h-[51px] px-12  bg-black rounded-3xl border">
              <Link href='/afroShipper'>

              Login
              </Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
