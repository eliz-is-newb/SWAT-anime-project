import { Footer } from "react-daisyui";

function LandingFooter(){
    return (
        <Footer className="bg-black p-10 mt-16">
            <div>
                <img src="/assets/img/logo.png" alt="logo" className="w-20 h-20 "/>
                <p className="text-white">
                    SillyTsundereTV
                    <br />
                    Providing reliable tech since 1998
                </p>
            </div>
            {/* <div>
                <Footer.Title className="text-white">Getting Started</Footer.Title>
                <a href="/dashboard" className="link  text-white link-hover">Dashboard</a>
                <a href="/login" className="link text-white link-hover">Login</a>
                <a href="/register" className="link text-white link-hover">Register</a>
            </div>
            <div>
                <Footer.Title className="text-white">Company</Footer.Title>
                <a href="#about" className="link text-white link-hover">About</a>
                <a href="#our-mission" className="link text-white link-hover">Our Mission</a>
                <a href="#contact" className="link text-white link-hover">Contact</a>
            </div> */}
        </Footer>
    );
}

export default LandingFooter;