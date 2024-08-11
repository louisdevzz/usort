import { useState } from "react";


const AddStudent = () =>{
    const [isShow,setIsShow]= useState<boolean>(false);
    return(
        <div>
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
        </div>
    )
} 

export default AddStudent;