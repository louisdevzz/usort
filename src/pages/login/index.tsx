import LogInHeader from "@/components/LogInHeader";
import LogInFooter from "@/components/LogInFooter";
import LogIn from "@/components/LogIn";
import { useState } from "react";

const LogInPage = () => {
    const [isShow,setIsShow]= useState<boolean>(false);
    return(
        <div className="flex flex-col h-screen">
            <LogInHeader />
            <div className="flex flex-grow justify-around items-center w-full px-10">
                <div className="flex justify-end w-1/2">
                    <img src="/assets/image/database.png" alt="database" className="max-w-full h-auto" />
                </div>
                <div className="flex justify-start w-1/2">
                    <LogIn />
                </div>
            </div>
            <LogInFooter />
        </div>
    )
}

export default LogInPage;