import React from "react";
import Image from "next/image";
import Link from "next/link";
import Tables from "./Table";

export default function heroSection() {
  return (
    <>
      <div className="flex flex-col  layout-padding">
        <div className="flex lg:space-x-3 mt-10">
          <Image
            src="/assets/Breadcrumb.svg"
            width={20}
            height={20}
            alt="bg"
            className=""
          />
          <Image
            src="/assets/chevron-right.svg"
            width={16}
            height={16}
            alt="bg"
            className=""
          />
          <p className="font-semibold text-sm text-gray-600 leading-5">User Management</p>
          <Image
            src="/assets/chevron-right.svg"
            width={16}
            height={16}
            alt="bg"
            className=""
          />
          <p className="font-semibold text-sm text-gray-600 leading-5">Users </p>
          <Image
            src="/assets/chevron-right.svg"
            width={16}
            height={16}
            alt="bg"
            className=""
          />
          <p className="font-semibold text-sm text-gray-600 leading-5">Abdullah Nasir</p>
        </div>

        <div className="flex mt-10">
          <Image
            src="/assets/Avatar-TopSec.svg"
            width={50}
            height={50}
            alt="bg"
            className=""
          />
          <span>
            <h1 className="font-semibold text-[28px] ml-2 mt-3 text-gray-900 leading-9">Abdullah Nasir</h1>
          </span>
        </div>
        <div className="flex space-x-10 mt-10">
          <p className="font-semibold text-sm text-gray-600 leading-5">Overview</p>
          <p className="font-semibold text-sm text-gray-600 leading-5">Branch </p>
          <p className="font-semibold text-sm text-gray-600 leading-5">KYC document</p>
          <p className="font-semibold text-sm text-gray-900 leading-5">Activity Log</p>
        </div>

        <hr className="w-full mt-3" />

        <div className="flex justify-between mt-10 border border-2  border-b-0 pb-4 rounded-xl p-5">
          <div className="">
            <h3 className="font-semibold text-lg leading-7">Sessions Logs</h3>
          </div>
          <div className="">
            <button className="bg-[#0B0E54] text-white font-semibold py-1 px-4 rounded-lg text-sm leading-5">
                <Link href='/event'>
                
              Sign Out All Sesions
                </Link>
            </button>
          </div>
        </div>
                
        <div className="mt-">

          <Tables />

        </div>
      </div>
    </>
  );
}
