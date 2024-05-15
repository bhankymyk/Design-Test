import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="layout-padding">
      <div className="bg-black border rounded-2xl mb-10">
        <div className="grid grid-cols-5 px-6 mb-5 footer">
          <div className="div mt-10 hidden sm:block">
            <h1 className="font-bold text-3xl text-gray-200 font-customFontHeading">Cal.com</h1>
            <div className="div mt-10">
              <p className="text-[15px] text-gray-200 font-customFont">
                © {new Date().getFullYear()} Cal.com, Inc. All <br /> rights
                reserved. Need Help? <br /> support@cal.com
              </p>
            </div>
            <div className="flex space-x-2 mt-5">
              <Image src="/assets/Star.svg" alt="" width={100} height={100} />
              <Image src="/assets/Slack.svg" alt="" width={20} height={20} />
              <Image src="/assets/Twitter.svg" alt="" width={20} height={20} />
              <Image src="/assets/Git.svg" alt="" width={20} height={20} />
            </div>
          </div>

          <div className="div mt-10">
            <ul className="space-y-4">
              <li className="text-[18px] text-gray-200 font-customFont">SOLUTIONS</li>
              <li className="text-[15px] text-gray-200 font-customFont">Self-Hosted</li>
              <li className="text-[15px] text-gray-200 font-customFont">Saas Hosting</li>
              <li className="text-[15px] text-gray-200 font-customFont">Infrastructure</li>
              <li className="text-[15px] text-gray-200 font-customFont">Web3</li>
            </ul>
          </div>

          <div className="div mt-10">
            <ul className="space-y-4">
              <li className="text-[18px] text-gray-200 font-customFont">DOCUMENTATION</li>
              <li className="text-[15px] text-gray-200 font-customFont">Products</li>
              <li className="text-[15px] text-gray-200 font-customFont">Developers</li>
              <li className="text-[15px] text-gray-200 font-customFont">Public API</li>
              <li className="text-[15px] text-gray-200 font-customFont">Docker</li>
            </ul>
          </div>

          <div className="div mt-10">
            <ul className="space-y-4">
              <li className="text-[18px] text-gray-200 font-customFont">RESOURCES</li>
              <li className="text-[15px] text-gray-200 font-customFont">About</li>
              <li className="text-[15px] text-gray-200 font-customFont">Blog</li>
              <li className="text-[15px] text-gray-200 font-customFont">Merch Store</li>
              <li className="text-[15px] text-gray-200 font-customFont">Open Store</li>
            </ul>
          </div>

          <div className="div mt-10">
            <ul className="space-y-4">
              <li className="text-[18px] text-gray-200 font-customFont">LEGAL</li>
              <li className="text-[15px] text-gray-200 font-customFont">Privacy</li>
              <li className="text-[15px] text-gray-200 font-customFont">Terms</li>
              <li className="text-[15px] text-gray-200 font-customFont">Licence</li>
              <li className="text-[15px] text-gray-200 font-customFont">Security</li>
            </ul>
          </div>

          <div className="div mt-10 lg:hidden">
            <h1 className="font-bold text-3xl text-gray-200 font-customFontHeading">Cal.com</h1>
            <div className="div mt-10">
              <p className="text-[15px] text-gray-200 font-customFont">
                © {new Date().getFullYear()} Cal.com, Inc. All <br /> rights
                reserved. Need Help? <br /> support@cal.com
              </p>
            </div>
            <div className="flex space-x-2 mt-5">
              <Image src="/assets/Star.svg" alt="" width={100} height={100} />
              <Image src="/assets/Slack.svg" alt="" width={20} height={20} />
              <Image src="/assets/Twitter.svg" alt="" width={20} height={20} />
              <Image src="/assets/Git.svg" alt="" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
