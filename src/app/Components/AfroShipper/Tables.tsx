import React from 'react'

function Tables() {
  return (
    <>
    
    

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Location
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    IP Address
                </th>
                <th scope="col" className="px-6 py-3">
                    Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Activity Status
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Austraila
                </th>
                <td className="px-6 py-4">
                    Chrome Windows
                </td>
                <td className="px-6 py-4 text-sm">
                207.40.22.358
                </td>
                <td className="px-6 py-4 text-sm">
                    3 days ago
                </td>
                <td className="px-6 py-4">
                    <button type="button" className="text-[#067647] bg-[#ABEFC6] font-semibold rounded-full text-[12px] px-2 py-2 text-center me-2 mb-2 ">Active</button>
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900  even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Austraila
                </th>
                <td className="px-6 py-4">
                    Safari IOS
                </td>
                <td className="px-6 py-4 text-sm">
                207.40.22.358
                </td>
                <td className="px-6 py-4 text-sm">
                3 days ago
                </td>
                <td className="px-6 py-4">
                <button type="button" className="text-[#067647] bg-[#ABEFC6] font-semibold rounded-full text-[12px] px-2 py-2 text-center me-2 mb-2 ">Active</button>
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Austraila
                </th>
                <td className="px-6 py-4">
                Chrome Windows
                </td>
                <td className="px-6 py-4 text-sm">
                207.40.22.358
                </td>
                <td className="px-6 py-4 text-sm">
                    Last Week
                </td>
                <td className="px-6 py-4">
                <button type="button" className="text-[#B54708] bg-[#FEDF89] font-semibold rounded-full text-s px-2 py-2 text-center me-2 mb-2 ">Expired</button>
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Austraila
                </th>
                <td className="px-6 py-4">
                    Safari IOS
                </td>
                <td className="px-6 py-4 text-sm">
                207.40.22.358
                </td>
                <td className="px-6 py-4 text-sm">
                3 days ago
                </td>
                <td className="px-6 py-4">
                <button type="button" className="text-[#B42318] bg-[#FECDCA] font-semibold rounded-full text-s px-2 py-2 text-center me-2 mb-2 ">Signed Out</button>
                </td>
            </tr>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Austraila
                </th>
                <td className="px-6 py-4">
                Chrome Windows
                </td>
                <td className="px-6 py-4 text-sm">
                207.40.22.358
                </td>
                <td className="px-6 py-4 text-sm">
                3 days ago
                </td>
                <td className="px-6 py-4">
                <button type="button" className="text-[#B42318] bg-[#FECDCA] font-semibold rounded-full text-s px-2 py-2 text-center me-2 mb-2 ">Signed Out</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

    
    </>
  )
}

export default Tables