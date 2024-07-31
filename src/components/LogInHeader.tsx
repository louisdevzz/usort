import { useState } from "react";

const LogInHeader = () =>{
    const [isShow, setIsShow] = useState(false);
    return(
        <div className="h-20 w-full bg-[#9B294E] flex justify-between px-8 items-center text-white">
            {/*left  */}
            <div className="flex flex-row gap-2 items-center">
                <div className="flex flex-col items-center">
                    <img width={52} src="/assets/logo/logo.png" alt="logo" />
                </div>
                <div className="flex flex-col p-2">
                    <span >SỞ GIÁO DỤC VÀ ĐẠO TẠO TỈNH LONG AN</span>
                    <span className="text-xl font-semibold text-[#ffff00]">CƠ SỞ DỮ LIỆU NGÀNH GIÁO DỤC VÀ ĐÀO TẠO</span>
                </div>
            </div>
            {/* right */}
            <div className="flex flex-col p-2">
                <span>HOTLINE: 0123456789</span>
                <span>EMAIL HỖ TRỢ: sp@gmail.com</span>
            </div>
        </div>
    )
}

export default LogInHeader;