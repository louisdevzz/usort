import LogInHeader from "@/components/LogInHeader";
import LogInFooter from "@/components/LogInFooter";
import LogIn from "@/components/LogIn";
import { useState } from "react";

const LogInPage = () => {
    const [isShow,setIsShow]= useState<boolean>(false);
    return(
        <div className="flex flex-col relative h-screen">
            <LogInHeader/>
            <div className="flex justify-items-center m-40">
                <img src="/assets/image/database.png" alt="database" />
            </div>
            <LogIn/>
            <div className="-mt-20">
                <LogInFooter/>
            </div>
        </div>
    )
}

export default LogInPage;