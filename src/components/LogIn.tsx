import { useState } from "react";

const LogIn = () =>{
    const [isShow, setIsShow] = useState(false);
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
                        required 
                    />
                    <span className="inline-flex items-center px-3 text-sm bg-gray-200 border border-gray-300 rounded-s-0 border-s-0 rounded-e-md dark:bg-gray-600 dark:border-gray-600">
                        <img width={30} src="/assets/icon/lock.svg" alt="lock" className="w-4 h-4" />
                    </span>
                </div>
                <div className="flex py-1">
                    <span className="text-blue-700 font-semibold">THÔNG TIN ĐƠN VỊ</span>
                </div>
                <div className="flex py-1">
                    <input type="text" id="educational-stage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Trung học cơ sở" required />
                </div> 
                <div className="flex py-1">
                    <input type="text" id="place" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Chọn phòng" required />
                </div> 
                <div className="flex py-1">
                    <input type="text" id="school" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Trung học cở sở Tân Tạo" required />
                </div>
                <div className="flex flex-row justify-between items-start py-2">
                    {/* Left */}
                    <div className="flex flex-row items-center">
                        <div className="flex py-1">
                            <input type="text" id="verify" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nhập mã xác thực" required />
                        </div>
                    </div>
                    {/* Right */}
                    <div className="flex flex-row">
                        <span>
                            Mã xác thực????
                        </span>
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