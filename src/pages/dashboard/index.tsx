import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Table from "@/components/Table";
import { useState } from "react";

const DashboardPage = () => {
    const [isShow,setIsShow]= useState<boolean>(false);
    return(
        <div className="flex flex-col relative h-screen">
            <Header/>
            <SubHeader/>
            <Table/>
            {/* <div className="flex flex-row justify-center items-center">
                <button onClick={()=>setIsShow(true)} className="text-white font-semibold bg-black px-3 py-2">
                    On Modal
                </button>
                {
                    isShow && (
                        <div className="absolute top-0 left-0 z-20 w-full h-full bg-black bg-opacity-65 flex flex-row justify-center items-center">
                            <div className="h-[500px] w-[600px] p-3 bg-white rounded-lg">
                                <div className="flex flex-row justify-between items-center">
                                    <span className="text-xl font-bold">Them truong hoc</span>
                                    <button onClick={()=>setIsShow(false)}>
                                        <img width={35} src="/assets/icon/close.svg" alt="close" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div> */}
        </div>
    )
}

export default DashboardPage;