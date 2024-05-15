"use client";
import React, { useState } from "react";
import { Dialog, DialogBody } from "@/MTailwindExports";
import CreateEvent from "@/app/Components/Event/CreateEvent";
// import SideBar from "./SideBar";
import Image from "next/image";

export default function EventSection() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      {/* <div className="flex"> */}
        {/* <SideBar /> */}

        <div className="flex flex-col layout-padding mt-5 w-full">
          <h1 className="text-2xl font-semibold font-customFontHeading">Event Types</h1>

          <div className="flex justify-between !md:flex-col">
            <div className=" mt-5">
              <p>
                Create event to share for people to book on your Calendar{" "}
                <span className="font-bold">View Cal.com/alex</span>
              </p>
            </div>

            <div className=" ">
              <button
                className="bg-black text-white font-medium py-1 px-4 flex items-center rounded"
                onClick={handleOpen}
              >
                <span className="text-lg">+</span>
                <span className="text-sm  leading-7 font-medium">New</span>
              </button>
            </div>
          </div>

          <div className="flex justify-between mt-10 border border-2 rounded-sm p-3">
            <div className="div py-3">
              <p className="font-semibold text-lg">
                Design Workshop{" "}
                <span className="font-normal text-sm">/alex/design</span>
              </p>
              <p>A longer chat to run through designs</p>

              <div className="flex  bg-gray-500 w-[80px] ">
                <Image
                  src="/assets/Clock.svg"
                  width={20}
                  height={20}
                  alt=""
                  className=""
                />
                <span className="ml-1">30 min</span>
              </div>
            </div>

            <div className="div flex">
              <Image
                src="/assets/Toggle.svg"
                width={40}
                height={40}
                alt=""
                className=""
              />
              <Image
                src="/assets/Moore.svg"
                width={100}
                height={100}
                alt=""
                className="ml-3"
              />
            </div>
          </div>

          <div className="flex justify-between  border border-2 rounded-sm p-3">
            <div className="div">
              <p className="font-semibold text-lg">
                30 minute meeting{" "}
                <span className="text-sm font-normal">/alex/design</span>
              </p>
              <p>A longer chat to run through designs</p>
              <div className="flex  bg-gray-500 w-[80px] ">
                <Image
                  src="/assets/Clock.svg"
                  width={20}
                  height={20}
                  alt=""
                  className=""
                />
                <span className="ml-1">30 min</span>
              </div>
            </div>

            <div className="div flex">
              <Image
                src="/assets/Toggle.svg"
                width={40}
                height={40}
                alt=""
                className=""
              />
              <Image
                src="/assets/Moore.svg"
                width={100}
                height={100}
                alt=""
                className="ml-3"
              />
            </div>
          </div>
        </div>
      {/* </div> */}

      <Dialog
        open={open}
        handler={handleOpen}
        size="xs"
        className="flex items-center justify-center"
        placeholder={"diag"}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="absolute inset-0  z-5" onClick={handleOpen}></div>
        <DialogBody
          placeholder={""}
          className="h-max-height bg-white rounded-xl py-5 lg:px-6 px-8"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <CreateEvent  onClose={handleOpen} />
        </DialogBody>
      </Dialog>
    </>
  );
}
