import { Hero, Button } from "react-daisyui"

function LandingHero() {
  return(
    <Hero className="text-white" id="home">
     <Hero.Content className="text-center">
        <div>
            <img src="/assets/img/logo5.png" className="w-3/12 mx-auto" />
            <h1 className="text-5xl text-white font-bold mt-5 mb-2">Watch your anime here!</h1>
            <p> Watch Anime for free in HD quality with English subbed or dubbed. </p>
           
            <p className="py-6 text-white	-mt-2 mb-2 rose-700">
               9 out of 10 mothers agree that our anime <br/> selection is better than Hentai. <br/>
               <Button className="text-white -mb-2 mt-4" variant="outline" href="library">View our library </Button>
                <br/> <br></br> <a className="underline decoration-lime-700">Judge for yourself.</a> 
                
                
               
                
            </p>
        </div>
      </Hero.Content>
    </Hero>
  )
}

export default LandingHero;