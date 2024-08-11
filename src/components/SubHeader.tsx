import { useState } from "react";

const SubHeader = () =>{
    const [isShow, setIsShow] = useState(false);
    return(
        <div className="h-11 bg-white border-b border-gray-300 py-5 w-full flex gap-10 px-5 items-center">
            <div className="flex flex-row gap-3 items-center">
                <img width={20} src="/assets/icon/school.svg" alt="school" />
                <div className="relative items-center group">
                    <button className="text-black gap-5 text-sm rounded-sm flex flex-row items-center" type="button">
                        <span>1. Trường học </span>
                        <img width={10} src="/assets/icon/arrow-down.svg" alt="arrow" />
                    </button>
                    <div id="dropdown" className="z-10 bg-white invisible group-hover:visible rounded-lg shadow w-40 absolute top-5 left-0">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <button onClick={()=>setIsShow(true)} className="block px-4 py-2 hover:bg-gray-100">
                                    Thêm trường học
                                </button>
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
                </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
                <img width={20} src="/assets/icon/class.svg" alt="class" />
                <div className="relative items-center group">
                    <button className="text-black gap-5 text-sm rounded-sm flex flex-row items-center" type="button">
                        <span>2. Lớp học </span>
                        <img width={10} src="/assets/icon/arrow-down.svg" alt="arrow" />
                    </button>
                    <div id="dropdown" className="z-10 bg-white invisible group-hover:visible  rounded-lg shadow w-40 absolute top-5 left-0">
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
                </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
                <img width={20} src="/assets/icon/people.svg" alt="people" />
                <div className="relative items-center group">
                    <button className="text-black gap-5 text-sm rounded-sm flex flex-row items-center" type="button">
                        <span>3. Nhân sự </span>
                        <img width={10} src="/assets/icon/arrow-down.svg" alt="arrow" />
                    </button>
                    <div id="dropdown" className="z-10 bg-white invisible group-hover:visible rounded-lg shadow w-40 absolute top-5 left-0">
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
                </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
                <img width={20} src="/assets/icon/student.svg" alt="student" />
                <div className="relative items-center group">
                    <button className="text-black gap-5 text-sm rounded-sm flex flex-row items-center" type="button">
                        <span>4. Học sinh </span>
                        <img width={10} src="/assets/icon/arrow-down.svg" alt="arrow" />
                    </button>
                    <div id="dropdown" className="z-10 bg-white invisible group-hover:visible rounded-lg shadow w-80 absolute top-5 left-0">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <button className="block px-4 py-2 hover:bg-gray-100">
                                    4.1 Hồ sơ học sinh
                                </button>
                            </li>
                            <li>
                                <button onClick={()=>setIsShow(true)} className="block px-4 py-2 hover:bg-gray-100">
                                    4.2 Quản lý biến động học sinh
                                </button>
                            </li>
                            <li>
                                <button className="block px-4 py-2 hover:bg-gray-100">
                                    4.3 Kết quả học tập rèn luyện
                                </button>
                            </li>
                            <li>
                                <button className="block px-4 py-2 hover:bg-gray-100">
                                    4.4 Khen thưởng, kỷ luật
                                </button>
                            </li>
                            <li>
                                <button className="block px-4 py-2 hover:bg-gray-100">
                                    4.5 Quản lý hoàn thành chương trình Tiểu học
                                </button>
                            </li>
                            <li>
                                <button className="block px-4 py-2 hover:bg-gray-100">
                                    4.6 Công tác học sinh
                                </button>
                            </li>
                            <li>
                                <button className="block px-4 py-2 hover:bg-gray-100">
                                    4.7 Quản lý sức khỏe học sinh
                                </button>
                            </li>
                            <li>
                                <button className="block px-4 py-2 hover:bg-gray-100">
                                    4.8 Chương trình Sóng và máy tính cho em
                                </button>
                            </li>
                            <li>
                                <button className="block px-4 py-2 hover:bg-gray-100">
                                    4.9 Thông tin học sinh liên quan Covid-19
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
                <img width={20} src="/assets/icon/tool.svg" alt="tool" />
                <div className="relative items-center group">
                    <button className="text-black gap-5 text-sm rounded-sm flex flex-row items-center" type="button">
                        <span>5. Công cụ hỗ trợ </span>
                        <img width={10} src="/assets/icon/arrow-down.svg" alt="arrow" />
                    </button>
                    <div id="dropdown" className="z-10 bg-white invisible group-hover:visible rounded-lg shadow w-40 absolute top-5 left-0">
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
                </div>
            </div>
            {
                isShow && (
                    <div className="absolute top-0 left-0 z-20 w-full h-full bg-black bg-opacity-65 flex flex-row justify-center items-center">
                        <div className="h-[500px] w-[600px] p-3 bg-white rounded-lg">
                            <div className="flex flex-row justify-between items-center">
                                <span className="text-xl font-bold">Them truong hoc</span>
                                <button onClick={()=>setIsShow(false)}>
                                    <img width={35} src="/assets/icon/close.svg" alt="close" />
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default SubHeader;