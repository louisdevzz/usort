"use client"
import { useState } from "react";

const LogIn = () =>{
    const captchaDefaut = Math.random().toString(36).substring(8);
    const [isShow, setIsShow] = useState(false);
    const [captcha, setCaptCha] = useState(captchaDefaut);
    const [selectedPlace, setSelectedPlace] = useState<string>(""); // State to store the selected school

    const handleSelect = (place: string) => {
        setSelectedPlace(place); // Update the input with the selected place
        setIsShow(false); // Close the dropdown
    };

    const refreshCaptcha = () =>{
        setCaptCha(Math.random().toString(36).substring(8));
    }

    return(
        <div className="w-full">
            <div className="flex flex-row items-center">
                <div className="flex items-center justify-center w-14 h-14 bg-[#9B294E] rounded-full">
                    <img width={50} src="/assets/icon/account.svg" alt="account" />
                </div>
                <div className="flex flex-col p-4">
                    <span className="text-xl font-semibold" >ĐĂNG NHẬP HỆ THỐNG</span>
                    <span className="text-blue-700 font-semibold">Quản lý cấp Trường</span>
                </div>
            </div>
            <div>
                <span className="text-blue-700 font-semibold">TÀI KHOẢN CỦA BẠN</span>
            </div>
            <form className="w-9/12">
                <div className="flex py-1">
                    <input
                        type="text"
                        id="phonenumber"
                        className="rounded-none rounded-s-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-1 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="0123456789"
                    />
                    <span className="inline-flex items-center px-3 text-sm bg-gray-200 border border-gray-300 rounded-s-0 border-s-0 rounded-e-md dark:bg-gray-600 dark:border-gray-600">
                        <img width={30} src="/assets/icon/phone.svg" alt="phone" className="w-4 h-4" />
                    </span>
                </div>
                <div className="flex py-1">
                    <input 
                        type="password" 
                        id="password" 
                        className="rounded-none rounded-s-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="•••••••••" 
                    />
                    <span className="inline-flex items-center px-3 text-sm bg-gray-200 border border-gray-300 rounded-s-0 border-s-0 rounded-e-md dark:bg-gray-600 dark:border-gray-600">
                        <img width={30} src="/assets/icon/lock.svg" alt="lock" className="w-4 h-4" />
                    </span>
                </div>
                <div className="flex py-1">
                    <span className="text-blue-700 font-semibold">THÔNG TIN ĐƠN VỊ</span>
                </div>
                <div className="flex py-1">
                    <input type="text" id="educational-stage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Trung học cơ sở" />
                </div> 
                <div className="flex bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg flex flex-row w-full relative">
                    <input
                        type="text"
                        id="place"
                        value={selectedPlace}
                        className="bg-transparent border-none block w-full p-2.5 focus:border-none outline-none"
                        placeholder="Chọn phòng"
                        readOnly
                        onClick={() => setIsShow(!isShow)}
                    />
                    <div onClick={() => setIsShow(!isShow)} className="border-l cursor-pointer border-gray-300 flex items-center justify-center px-3">
                        <img width={13} src="/assets/icon/arrow-down.svg" alt="arrow" />
                    </div>
                    {isShow && (
                        <div className="absolute top-10 left-0 w-full max-h-[200px] bg-white rounded-lg border border-gray-300 p-3 overflow-y-auto">
                            <ul>
                                <li
                                    className="hover:bg-gray-200 cursor-pointer p-2 rounded-lg"
                                    onClick={() => handleSelect("Truong THPT TAN HUNG")}
                                >
                                    <span>Trường THPT Tân Hưng</span>
                                </li>
                                <li
                                    className="hover:bg-gray-200 cursor-pointer p-2 rounded-lg"
                                    onClick={() => handleSelect("Truong THPT TAN HUNG")}
                                >
                                    <span>Trường THPT Năng khiếu ĐH Tân Tạo</span>
                                </li>
                            </ul>
                        </div>
                    )}
                </div> 
                <div className="flex py-1">
                    <input type="text" id="school" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Trung học cở sở Tân Tạo" />
                </div>
                <div className="flex flex-row justify-between items-start py-2">
                    {/* Left */}
                    <div className="flex flex-row items-center">
                        <div className="flex py-1">
                            <input type="text" id="verify" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nhập mã xác thực"  />
                        </div>
                    </div>
                    {/* Right */}
                    <div className="flex flex-row">
                        <input type="text" value={captcha} disabled className="bg-black w-20 text-center p-2 select-none text-white" />
                    </div>
                </div>
                <div className="flex flex-row justify-between items-start py-2">
                    {/* Left */}
                    <div className="flex flex-row items-center">
                        <div className="flex items-center h-5">
                            <input 
                                id="remember" 
                                type="checkbox" 
                                value="" 
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" 
                            />
                        </div>
                        <label 
                            htmlFor="remember" 
                            className="ml-2 text-sm font-medium text-blue-700 dark:text-gray-300"
                        >
                            Lưu thông tin đăng nhập
                        </label>
                    </div>
                    
                    {/* Right */}
                    <div className="flex flex-row">
                        <span className="text-sm font-medium text-blue-700 dark:text-gray-300 cursor-pointer">
                            Quên mật khẩu?
                        </span>
                    </div>
                </div>
                <button type="submit" className="text-white bg-[#9B294E] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Đăng nhập</button>
            </form>
        </div>
    )
}

export default LogIn;