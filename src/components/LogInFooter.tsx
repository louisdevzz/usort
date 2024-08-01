import { useState } from "react";

const LogInFooter = () =>{
    const [isShow, setIsShow] = useState(false);
    return(
        <div className="h-16 bg-white border-t-2 border-gray-300">
            {/* right */}
            <div className="flex flex-col text-right text-[#9B294E] px-8 text-center p-1 ">
                <span>CƠ SỞ DỮ LIỆU NGÀNH GIÁO DỤC VÀ ĐÀO TẠO</span>
                <span>Hỗ trợ trực tuyến - Teamviewer - Ultraviewer - Email: sp@gmail.com</span>
            </div>
        </div>
    )
}

export default LogInFooter;