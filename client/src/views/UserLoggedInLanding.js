import UserCoreBar from "../components/UserCoreBar";
import LandingHero from "../components/Landing/Hero";
import CoreFooter from "../components/CoreFooter";
import AnimeCarousel from "../components/Landing/AnimeCarousel";


function UserLoggedInLanding(){
    return (
        <>
            <UserCoreBar />
            <LandingHero />
            <AnimeCarousel />
            <CoreFooter />
        </>
    );
}

export default UserLoggedInLanding;