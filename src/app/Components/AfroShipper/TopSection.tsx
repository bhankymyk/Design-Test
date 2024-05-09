import React from 'react';
import Image from 'next/image';
import Tables from './Tables';

export default function TopSection() {
  return (
    <>
    <div className="flex-col  layout-padding">
        <div className="flex space-x-3 mt-10">
        <Image src='/assets/Breadcrumb.svg' width={20} height={20} alt='bg' className=''/>
        <Image src='/assets/chevron-right.svg' width={16} height={16} alt='bg' className=''/>
            <p className='font-semibold text-sm'>User Management</p>
            <Image src='/assets/chevron-right.svg' width={16} height={16} alt='bg' className=''/>
            <p className='font-semibold text-sm'>Users </p>
            <Image src='/assets/chevron-right.svg' width={16} height={16} alt='bg' className=''/>
            <p className='font-semibold text-sm'>Abdullah Nasir</p>
        </div>

        <div className="flex mt-10">
        <Image src='/assets/Avatar-TopSec.svg' width={50} height={50} alt='bg' className=''/>
        <span>

        <h1 className='font-semibold text-2xl ml-2 mt-3'>Abdullah Nasir</h1>
        </span>

        </div>
        <div className="flex space-x-3 mt-10">
            <p className='font-semibold text-sm'>Overview</p>
            <p className='font-semibold text-sm'>Branch </p>
            <p className='font-semibold text-sm'>KYC document</p>
            <p className='font-semibold text-sm'>Activity Log</p>
        </div>

                <hr  className='w-full mt-3'/>


                <div className="flex justify-between mt-10 border border-2  border-b-0 pb-4 rounded-xl p-5">
                        <div className="">
                    <h3 className='font-semibold text-lg'>Sessions Logs</h3>
                        </div>
                    <div className="">
                    <button className='bg-[#0B0E54] text-white font-medium py-1 px-4 rounded-lg text-sm'>Sign Out All Sesions</button>
                    </div>
                </div>


                <div className="mt-">
                    <Tables/>
                </div>


    </div>

    
    </>
  )
}
