import { useState } from "react";

const AddStudent = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // Manage which dropdown is active
    const [selectedPlace, setSelectedPlace] = useState<{ first: string, second: string }>({ first: "", second: "" }); // Separate state for each dropdown

    const handleSelect = (place: string, dropdownId: string) => {
        setSelectedPlace(prevState => ({
            ...prevState,
            [dropdownId]: place
        }));
        setActiveDropdown(null); // Close the dropdown after selection
    };

    const toggleDropdown = (dropdownId: string) => {
        setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId); // Toggle dropdown visibility
    };

    return (
        <div className="space-y-10">
            <div className="flex justify-between px-8 py-2 items-center shadow-md">
                <div className="flex flex-row items-center px-1 gap-1 ">
                    <img width={30} src="/assets/icon/square.svg" alt="square" />
                    <span className="font-semibold">4.1.1 Nhập hồ sơ học sinh</span>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <div className="rounded-lg bg-green-600 p-2 w-20 flex items-center justify-center">
                        <button>
                            <span>Ghi</span>
                        </button>
                    </div>
                    <div className="rounded-lg bg-green-600 p-2 w-36 flex items-center justify-center">
                        <button>
                            <span>Ghi và ghi thêm</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex items-left px-20 gap-36">
                <div className="flex flex-col items-center justify-center bg-gray-100 border border-gray-300 rounded-lg p-4 w-64 h-64 ">
                    <div className="flex items-center justify-center w-full h-full">
                        <label
                            htmlFor="upload-photo"
                            className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg cursor-pointer w-full h-full hover:border-gray-500"
                        >
                            <div className="flex flex-col items-center justify-center">
                                <img src="/assets/icon/camera.svg" alt="upload" className="w-12 h-12 mb-2" />
                                <span className="text-gray-600">Click to upload</span>
                            </div>
                            <input type="file" id="upload-photo" className="hidden" />
                        </label>
                    </div>
                </div>
                <div className="font-semibold text-left">
                    <div className="flex items-center justify-between gap-32 py-3">
                        <span className="text-right"> Khối học </span>
                        <div className="flex bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg flex flex-row relative" style={{ width: '500px' }}>
                            <input
                                type="text"
                                id="place"
                                value={selectedPlace.first}
                                className="bg-transparent border-none block w-full p-2.5 focus:border-none outline-none"
                                placeholder="Chọn khối"
                                readOnly
                                onClick={() => toggleDropdown('first')}
                            />
                            <div onClick={() => toggleDropdown('first')} className="border-l cursor-pointer border-gray-300 flex items-center justify-center px-3">
                                <img width={13} src="/assets/icon/arrow-down.svg" alt="arrow" />
                            </div>
                            {activeDropdown === 'first' && (
                                <div className="absolute z-20 top-10 left-0 w-full max-h-[200px] bg-white rounded-lg border border-gray-300 p-3 overflow-y-auto">
                                    <ul>
                                        <li
                                            className="hover:bg-gray-200 cursor-pointer p-2 rounded-lg"
                                            onClick={() => handleSelect("Khối 6", 'first')}
                                        >
                                            <span>Khối 6</span>
                                        </li>
                                        <li
                                            className="hover:bg-gray-200 cursor-pointer p-2 rounded-lg"
                                            onClick={() => handleSelect("Khối 7", 'first')}
                                        >
                                            <span>Khối 7</span>
                                        </li>
                                        <li
                                            className="hover:bg-gray-200 cursor-pointer p-2 rounded-lg"
                                            onClick={() => handleSelect("Khối 8", 'first')}
                                        >
                                            <span>Khối 8</span>
                                        </li>
                                        <li
                                            className="hover:bg-gray-200 cursor-pointer p-2 rounded-lg"
                                            onClick={() => handleSelect("Khối 9", 'first')}
                                        >
                                            <span>Khối 9</span>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-32 py-3">
                        <span className="text-right"> Lớp học </span>
                        <div className="flex bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg flex flex-row relative" style={{ width: '500px' }}>
                            <input
                                type="text"
                                id="place"
                                value={selectedPlace.second}
                                className="bg-transparent border-none block w-full p-2.5 focus:border-none outline-none"
                                placeholder="Chọn lớp"
                                readOnly
                                onClick={() => toggleDropdown('second')}
                            />
                            <div onClick={() => toggleDropdown('second')} className="border-l cursor-pointer border-gray-300 flex items-center justify-center px-3">
                                <img width={13} src="/assets/icon/arrow-down.svg" alt="arrow" />
                            </div>
                            {activeDropdown === 'second' && (
                                <div className="absolute z-20 top-10 left-0 w-full max-h-[200px] bg-white rounded-lg border border-gray-300 p-3 overflow-y-auto">
                                    <ul>
                                        <li
                                            className="hover:bg-gray-200 cursor-pointer p-2 rounded-lg"
                                            onClick={() => handleSelect("Lớp 6A", 'second')}
                                        >
                                            <span>Lớp 6A</span>
                                        </li>
                                        <li
                                            className="hover:bg-gray-200 cursor-pointer p-2 rounded-lg"
                                            onClick={() => handleSelect("Lớp 6B", 'second')}
                                        >
                                            <span>Lớp 6B</span>
                                        </li>
                                        <li
                                            className="hover:bg-gray-200 cursor-pointer p-2 rounded-lg"
                                            onClick={() => handleSelect("Lớp 7A", 'second')}
                                        >
                                            <span>Lớp 7A</span>
                                        </li>
                                        <li
                                            className="hover:bg-gray-200 cursor-pointer p-2 rounded-lg"
                                            onClick={() => handleSelect("Lớp 7B", 'second')}
                                        >
                                            <span>Lớp 7B</span>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-32 py-3">
                        <span className="text-right"> Họ và tên </span>
                        <input
                            type="text"
                            id="fullname"
                            className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-1 text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ width: '500px' }}
                            placeholder="Nguyễn Văn A"
                        />
                    </div>
                    <div className="flex items-center justify-between gap-32 py-3">
                        <span className="text-right"> Tên gọi khác </span>
                        <input
                            type="text"
                            id="nickname"
                            className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-1 text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ width: '500px' }}
                            placeholder="Văn A"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddStudent;
