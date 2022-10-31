import { Hero, Button } from "react-daisyui"

function LandingHero() {
  return(
    <Hero className="text-black" id="home">
     <Hero.Content className="text-center">
        <div>
            <img src="/assets/img/logo6.png" className="w-3/12 mx-auto mt-10" />
            <h1 className="text-5xl text-black font-bold mt-5 mb-2">Watch your anime elsewhere, obviously!</h1>
            <p> Watch Anime here for free in HD quality with English subbed or dubbed. </p>
           
            <p className="py-6 text-black	-mt-2 mb-2 rose-700">
               9 out of 10 mothers agree that our anime <br/> selection is worse than Hentai. <br/>

               <Button className="text-black -mb-2 mt-4" variant="outline" href="library">View our library </Button>
                
                
                
               
                
            </p>
        </div>
      </Hero.Content>
    </Hero>
  )
}

export default LandingHero;