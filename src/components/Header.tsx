import { useState } from "react";

const Header = () =>{
    const [isShow, setIsShow] = useState(false);
    return(
        <div className="h-14 w-full bg-[#9B294E] flex justify-between px-8 items-center text-white">
            {/*left  */}
            <div className="flex flex-row gap-10 items-center">
                <div className="flex flex-row gap-2 items-center">
                    <img width={30} src="/assets/logo/logo.png" alt="logo" />
                    <span>USORT</span>
                </div>
                <p className="text-xl font-semibold text-[#ffff00]">Tan Tao University</p>
                <div className="relative items-center">
                    <button onClick={()=>setIsShow((prv)=>!prv)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-black gap-2 rounded-sm w-64 h-11 bg-[white] justify-between focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                        <div className="flex flex-row gap-2 items-center">
                            <img className="bg-green-600 p-1"  width={30} src="/assets/icon/graduate.svg" alt="graduate" />
                            <span>Quản lý giáo dục </span>
                        </div>
                        <img width={10} src="/assets/icon/arrow-down.svg" alt="arrow" />
                    </button>
                    {
                        isShow&&(
                            <div id="dropdown" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-64 absolute top-11 left-0">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                </li>
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>
            {/* right */}
            <div className="flex flex-row gap-5 items-center">
                <img width={25} src="/assets/icon/avatar.svg" alt="avatar" />
                <span className="underline font-semibold text-[#f0e254]">  Học kỳ | 2023-2024 </span>
                <button>Đăng kí/Đăng nhập</button>
                <img width={25} src="/assets/icon/question.svg" alt="question" />
                <img width={25} src="/assets/icon/bell.svg" alt="question" />
                <img width={25} src="/assets/icon/dashboard.svg" alt="dashboard" />
            </div>
        </div>
    )
}

export default Header;