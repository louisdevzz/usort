import LogInHeader from "@/components/LogInHeader";
import LogInFooter from "@/components/LogInFooter";
import LogIn from "@/components/LogIn";
import { useState } from "react";

const LogInPage = () => {
    const [isShow,setIsShow]= useState<boolean>(false);
    return(
        <div className="flex flex-col h-screen">
            <LogInHeader />
            <div className="flex flex-grow justify-around items-center w-full px-40 gap-x-20">
                <div className="flex justify-end w-1/2">
                    <img src="/assets/image/database.png" alt="database" />
                </div>
                <div className="flex justify-start w-1/2">
                    <LogIn />
                </div>
             </div>   
            <div>
                <LogInFooter />
            </div>
        </div>
    )
}

export default LogInPage;