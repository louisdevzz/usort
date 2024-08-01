import { useState } from "react";

const LogIn = () =>{
    const [isShow, setIsShow] = useState(false);
    return(
        <div>
            <div>
                <span>ĐĂNG NHẬP HỆ THỐNG</span>
            </div>
            <div>
                <span>Quản lý cấp trường</span>
            </div>
            <div>
                <span>TÀI KHOẢN CỦA BẠN</span>
            </div>
        </div>
    )
}

export default LogIn;