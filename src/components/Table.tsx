import { useState } from "react";


const Table = () =>{
    const [isShow,setIsShow]= useState<boolean>(false);
    return(
        <div>
            <div className="flex justify-between px-8 py-2 items-center shadow-md">
                <div className="flex flex-row items-center px-1 gap-1 ">
                    <img width={30} src="/assets/icon/square.svg" alt="square" />
                    <span className="font-semibold">4.1 Hồ sơ học sinh</span>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <div className="rounded-lg bg-green-600 p-2">
                        <button>
                            <span>Nhập hồ sơ học sinh</span>
                        </button>
                    </div>
                    <div className="rounded-lg bg-green-600 p-2">
                        <button>
                            <span>Xuất excel</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-3 items-center justify-between px-5">
                <div className="flex flex-row gap-3 items-center">
                    <div className="flex flex-row gap-5 py-3 items-center">
                        <span>Khối: </span>
                        <div className="group relative">
                            <button className="text-black gap-5 text-sm justify-between flex w-44 px-3 py-2 rounded-md border border-gray-300 h-8 flex-row items-center" type="button">
                                <span>Khối 6 </span>
                                <img width={10} src="/assets/icon/arrow-down.svg" alt="arrow" />
                            </button>
                            <div id="dropdown" className="z-10 bg-white invisible group-hover:visible  rounded-lg shadow w-40 absolute top-8 left-0">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    <li className="block px-4 py-2 hover:bg-gray-100">
                                        <span>Khối 6</span>
                                    </li>    
                                    <li className="block px-4 py-2 hover:bg-gray-100">
                                        <span>Khối 7</span>
                                    </li>
                                    <li className="block px-4 py-2 hover:bg-gray-100">
                                        <span>Khối 8</span>
                                    </li>
                                    <li className="block px-4 py-2 hover:bg-gray-100">
                                        <span>Khối 9</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-5 px-5 py-3 items-center">
                        <span>Lớp: </span>
                        <div className="group relative">
                            <button className="text-black gap-5 text-sm justify-between flex w-44 px-3 py-2 rounded-md border border-gray-300 h-8 flex-row items-center" type="button">
                                <span>Lớp </span>
                                <img width={10} src="/assets/icon/arrow-down.svg" alt="arrow" />
                            </button>
                            <div id="dropdown" className="z-10 bg-white invisible group-hover:visible  rounded-lg shadow w-40 absolute top-8 left-0">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    <li className="block px-4 py-2 hover:bg-gray-100">
                                        <span>6A1</span>
                                    </li>
                                    <li className="block px-4 py-2 hover:bg-gray-100">
                                        <span>6A2</span>
                                    </li>
                                    <li className="block px-4 py-2 hover:bg-gray-100">
                                        <span>6A3</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-white bg-[#2a9df4]">
                    <tr>
                        <th scope="col" className="w-10 px-6 py-3">
                            #
                        </th>
                        <th scope="col" className="w-10 p-4">
                            <div className="flex items-center"> 
                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" className="w-10 px-6 py-3">
                            Sửa
                        </th>
                        <th scope="col" className="w-20 px-6 py-3">
                            Hồ sơ
                        </th>
                        <th scope="col" className="w-32 px-6 py-3">
                            Thứ tự
                        </th>
                        <th scope="col" className="w-52 px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="w-96 px-6 py-3">
                            Họ và tên
                        </th>
                        <th scope="col" className="w-60 px-6 py-3">
                            Ngày tháng năm sinh
                        </th>
                        <th scope="col" className="w-36 px-6 py-3">
                            Giới tính
                        </th>
                        <th scope="col" className="w-36 px-6 py-3">
                            Dân tộc
                        </th>
                        <th scope="col" className="w-36 px-6 py-3">
                            Trạng thái
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-e  border-gray-300 items-center  hover:bg-gray-50 ">
                        <td className="px-6 py-4">
                            1
                        </td>
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <td className="w-4 px-6 py-4">
                            <div className="flex items-center">
                                <img width={20} src="/assets/icon/pencil.svg" alt="pencil" />
                            </div>
                        </td>
                        <td className="w-20 px-2 py-4 flex items-center justify-center">
                            <img width={30} src="/assets/icon/search.svg" alt="search" />
                        </td>
                        <td className="px-6 py-4">
                            <span>1</span>
                        </td>
                        <td className="px-6 py-4">
                            <span>123456</span>
                        </td>
                        <td className="px-6 py-4">
                            <span>Hồ Phước Lành</span>
                        </td>
                        <td className="px-6 py-4">
                            <span>1/1/1999</span>
                        </td>
                        <td className="px-6 py-4">
                            <span>Nữ</span>
                        </td>
                        <td className="px-6 py-4">
                            <span>Kinh</span>
                        </td>
                        <td className="px-6 py-4">
                            <span>Đang học</span>
                        </td>
                    </tr>
                    <tr className="bg-white border border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4">
                            2
                        </td>
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <td className="w-4 px-6 py-4">
                            <div className="flex items-center">
                                <img width={20} src="/assets/icon/pencil.svg" alt="pencil" />
                            </div>
                        </td>
                        <td className="w-20 px-2 py-4 flex items-center justify-center">
                            <img width={30} src="/assets/icon/search.svg" alt="search" />
                        </td>
                        <td className="px-6 py-4">
                            2
                        </td>
                        <td className="px-6 py-4">
                            <span>123456</span>
                        </td>
                        <td className="px-6 py-4">
                            <span>Hồ Phước Lành</span>
                        </td>
                        <td className="px-6 py-4">
                            <span>1/1/1999</span>
                        </td>
                        <td className="px-6 py-4">
                            <span>Nữ</span>
                        </td>
                        <td className="px-6 py-4">
                            <span>Kinh</span>
                        </td>
                        <td className="px-6 py-4">
                            <span>Đang học</span>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4">
                            3
                        </td>
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <td className="w-4 px-6 py-4">
                            <div className="flex items-center">
                                <img width={20} src="/assets/icon/pencil.svg" alt="pencil" />
                            </div>
                        </td>
                        <td className="w-20 px-2 py-4 flex items-center justify-center">
                            <img width={30} src="/assets/icon/search.svg" alt="search" />
                        </td>
                        <td className="px-6 py-4">
                            3
                        </td>
                        <td className="px-6 py-4">
                            <span>123456</span>
                        </td>
                        <td className="px-6 py-4">
                            <span>Hồ Phước Lành</span>
                        </td>
                        <td className="px-6 py-4">
                            <span>1/1/1999</span>
                        </td>
                        <td className="px-6 py-4">
                            <span>Nữ</span>
                        </td>
                        <td className="px-6 py-4">
                            <span>Kinh</span>
                        </td>
                        <td className="px-6 py-4">
                            <span>Đang học</span>
                        </td>
                    </tr> 
                </tbody>
            </table>
        </div>
    )
} 

export default Table;