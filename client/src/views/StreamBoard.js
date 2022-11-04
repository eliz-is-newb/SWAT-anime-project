import CoreBar from "../components/CoreBar";
import CoreFooter from "../components/CoreFooter";

import AnimeStreamPlayer from "../components/Library/AnimeStreamPlayer";


function StreamBoard(){
    return (
        <>
            <CoreBar />
            <AnimeStreamPlayer /> 
            <CoreFooter />
        </>
    );
}

export default StreamBoard;