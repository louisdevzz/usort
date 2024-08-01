import { useState } from "react";

const LogInFooter = () =>{
    const [isShow, setIsShow] = useState(false);
    return(
        <div className="h-5 bg-white border-b border-gray-300 -mt-10">
            {/* right */}
            <div className="flex flex-col p-10 text-right text-[#9B294E]">
                <span>CƠ SỞ DỮU LIỆU NGÀNH GIÁO DỤC VÀ ĐÀO TẠO</span>
                <span>Hỗ trợ trực tuyến - Teamviewer - Ultraviewer - Email: sp@gmail.com</span>
            </div>
        </div>
    )
}

export default LogInFooter;