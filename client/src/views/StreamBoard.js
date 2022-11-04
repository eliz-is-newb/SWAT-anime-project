import LibraryCoreBar from "../components/LibraryCoreBar";
import CoreFooter from "../components/CoreFooter";

import AnimeStreamPlayer from "../components/Library/AnimeStreamPlayer";


function StreamBoard(){
    return (
        <>
            <LibraryCoreBar />
            <AnimeStreamPlayer /> 
            <CoreFooter />
        </>
    );
}

export default StreamBoard;