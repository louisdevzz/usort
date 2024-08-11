import AddStudentHeader from "@/components/AddStudentHeader";
import SubHeader from "@/components/SubHeader";
import AddStudent from "@/components/AddStudent";
import { useState } from "react";

const DashboardPage = () => {
    const [isShow,setIsShow]= useState<boolean>(false);
    return(
        <div className="flex flex-col relative h-screen">
            <AddStudentHeader/>
            <SubHeader/>
            <AddStudent/>
        </div>
    )
}

export default DashboardPage;