import CoreBar from "../components/CoreBar";
import LandingHero from "../components/Landing/Hero";
import CoreFooter from "../components/CoreFooter";
import AnimeCarousel from "../components/Landing/AnimeCarousel";

function Landing(){
    return (
        <>
            <CoreBar />
            <LandingHero />
            <AnimeCarousel />
            <CoreFooter />
        </>
    );
}

export default Landing;