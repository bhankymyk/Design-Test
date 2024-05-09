import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className='layout-padding'>
        <div className="bg-black border rounded-2xl mb-10">


        <div className="grid grid-cols-5 px-6 mb-5 footer">
            <div className="div mt-10 hidden sm:block">
                <h1 className='font-bold text-3xl text-gray-200'>Cal.com</h1>
            <div className="div mt-10">
                <p className='text-[15px] text-gray-200'>© {new Date().getFullYear()} Cal.com, Inc. All  <br /> rights reserved. Need  Help? <br /> support@cal.com</p>
            </div>
            <div className="flex space-x-2 mt-5">
                <Image src='/assets/Star.svg' alt='' width={100} height={100}/>
                <Image src='/assets/Slack.svg' alt='' width={20} height={20}/>
                <Image src='/assets/Twitter.svg' alt='' width={20} height={20}/>
                <Image src='/assets/Git.svg' alt='' width={20} height={20}/>
            </div>
            </div>
            
            <div className="div mt-10">
                <ul className='space-y-4'>
                    <li className='text-[18px] text-gray-200'>SOLUTIONS</li>
                    <li className='text-[15px] text-gray-200'>Self-Hosted</li>
                    <li className='text-[15px] text-gray-200'>Saas Hosting</li>
                    <li className='text-[15px] text-gray-200'>Infrastructure</li>
                    <li className='text-[15px] text-gray-200'>Web3</li>  
                </ul>

            </div>
            
            <div className="div mt-10">
            <ul className='space-y-4'>
                    <li className='text-[18px] text-gray-200'>DOCUMENTATION</li>
                    <li className='text-[15px] text-gray-200'>Products</li>
                    <li className='text-[15px] text-gray-200'>Developers</li>
                    <li className='text-[15px] text-gray-200'>Public API</li>
                    <li className='text-[15px] text-gray-200'>Docker</li>  
                </ul>
            </div>
            
            <div className="div mt-10">
            <ul className='space-y-4'>
                    <li className='text-[18px] text-gray-200'>RESOURCES</li>
                    <li className='text-[15px] text-gray-200'>About</li>
                    <li className='text-[15px] text-gray-200'>Blog</li>
                    <li className='text-[15px] text-gray-200'>Merch Store</li>
                    <li className='text-[15px] text-gray-200'>Open Store</li>  
                </ul>
            </div>
            
            <div className="div mt-10">
            <ul className='space-y-4'>
                    <li className='text-[18px] text-gray-200'>LEGAL</li>
                    <li className='text-[15px] text-gray-200'>Privacy</li>
                    <li className='text-[15px] text-gray-200'>Terms</li>
                    <li className='text-[15px] text-gray-200'>Licence</li>
                    <li className='text-[15px] text-gray-200'>Security</li>  
                </ul>
            </div>

            <div className="div mt-10 lg:hidden">
                <h1 className='font-bold text-3xl text-gray-200'>Cal.com</h1>
            <div className="div mt-10">
                <p className='text-[15px] text-gray-200'>© {new Date().getFullYear()} Cal.com, Inc. All  <br /> rights reserved. Need  Help? <br /> support@cal.com</p>
            </div>
            <div className="flex space-x-2 mt-5">
                <Image src='/assets/Star.svg' alt='' width={100} height={100}/>
                <Image src='/assets/Slack.svg' alt='' width={20} height={20}/>
                <Image src='/assets/Twitter.svg' alt='' width={20} height={20}/>
                <Image src='/assets/Git.svg' alt='' width={20} height={20}/>
            </div>
            </div>
            
        </div>
        </div>
    </div>
  )
}
