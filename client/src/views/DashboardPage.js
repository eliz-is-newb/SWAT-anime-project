import { useEffect, useState } from "react";
import UserCoreBar from "../components/UserCoreBar";
import CoreFooter from "../components/CoreFooter";
import Dashboard from "../components/Dashboard";

function DashboardPage(){


    return (
        <>
            <UserCoreBar />
            <Dashboard />
            <CoreFooter />
        </>
    );
}

export default DashboardPage;