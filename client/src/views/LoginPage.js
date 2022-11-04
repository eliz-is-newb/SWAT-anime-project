import { useEffect, useState } from "react";
import NeutralCoreBar from "../components/NeutralCoreBar";
import CoreFooter from "../components/CoreFooter";
import Login from "../components/Library/Login";

function LoginPage(){


    return (
        <>
            <NeutralCoreBar />
            <Login />
            <CoreFooter />
        </>
    );
}

export default LoginPage;