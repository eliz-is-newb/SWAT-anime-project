import LibraryCoreBar from "../components/LibraryCoreBar";
import CoreFooter from "../components/CoreFooter";

import AnimeInfo from "../components/Library/AnimeInfo";


function AnimeDescription(){
    return (
        <>
            <LibraryCoreBar />
            <AnimeInfo /> 
            <CoreFooter />
        </>
    );
}

export default AnimeDescription;