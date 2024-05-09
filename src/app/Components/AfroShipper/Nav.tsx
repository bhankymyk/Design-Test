import React from 'react';
import TopSection from './TopSection';
import Image from 'next/image';

export default function Nav() {
  return (
    <>
        <div className="flex flex-col  w-[100%]">
        <div className="flex justify-between p-5">
                        <div className="">
                    <form className="max-w-md mx-auto">   
    <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search"  className="block lg:w-[574px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 " placeholder="Search.." required />
    </div>
</form>
                        </div>
                    <div className="flex">
                    <Image src='/assets/Actions.svg' width={40} height={80} alt='bg' className=''/>
                    <span>
                    <Image src='/assets/Avatar.svg' width={40} height={80} alt='bg' className='ml-2 mt-2'/>
                    </span>
                    
                    </div>
                </div>

        
            <TopSection/>
        

        </div>
        
    </>
  )
}
