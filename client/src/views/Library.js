import { useEffect, useState } from "react";
import NeutralCoreBar from "../components/NeutralCoreBar";
import CoreFooter from "../components/CoreFooter";
import Map from "../components/Library/Map";

function Library(){


    return (
        <>
            <NeutralCoreBar />
            <Map />
            <CoreFooter />
        </>
    );
}

export default Library;