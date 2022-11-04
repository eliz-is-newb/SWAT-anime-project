import { useEffect, useState } from "react";
import NeutralCoreBar from "../components/NeutralCoreBar";
import CoreFooter from "../components/CoreFooter";
import Register from "../components/Library/Register";

function SignUpPage(){


    return (
        <>
            <NeutralCoreBar />
            <Register />
            <CoreFooter />
        </>
    );
}

export default SignUpPage;