import { useState } from "react";


const AddStudent = () =>{
    const [isShow,setIsShow]= useState<boolean>(false);
    const [selectedPlace, setSelectedPlace] = useState<string>(""); // State to store the selected school

    const handleSelect = (place: string) => {
        setSelectedPlace(place); // Update the input with the selected place
        setIsShow(false); // Close the dropdown
    };
    return(
        <div className = "space-y-10">
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
            <div className="flex items-center px-20 gap-36">
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
                    <div className="flex items-center gap-20 py-3">
                        <span> Khối học </span>
                        <div className="flex bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg flex flex-row relative gap-36" style={{ width: '500px' }}>
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
                                            <span>Truong THPT TAN HUNG</span>
                                        </li>
                                        <li
                                            className="hover:bg-gray-200 cursor-pointer p-2 rounded-lg"
                                            onClick={() => handleSelect("Truong THPT TAN HUNG")}
                                        >
                                            <span>Truong THPT TAN HUNG</span>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-20">
                        <span> Khối học </span>
                        <div className="flex bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg flex flex-row relative gap-36" style={{ width: '500px' }}>
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
                                            <span>Truong THPT TAN HUNG</span>
                                        </li>
                                        <li
                                            className="hover:bg-gray-200 cursor-pointer p-2 rounded-lg"
                                            onClick={() => handleSelect("Truong THPT TAN HUNG")}
                                        >
                                            <span>Truong THPT TAN HUNG</span>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default AddStudent;