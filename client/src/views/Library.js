import { useEffect, useState } from "react";
import CoreBar from "../components/CoreBar";
import CoreFooter from "../components/CoreFooter";
import Map from "../components/Library/Map";

function Library(){


    return (
        <>
            <CoreBar />
            
            <Map />
            
            <CoreFooter />
        </>
    );
}

export default Library;