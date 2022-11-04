import { Hero, Button } from "react-daisyui"

function LandingHero() {
  return(
    <Hero className="text-black" id="home">
     <Hero.Content className="text-center">
        <div>
            <img src="/assets/img/logo7.png" className="w-6/12 mx-auto mt-10 -mb-10" />
            <h1 className="text-5xl text-black font-bold mt-5 mb-2">Go torrent your medical dramas  <br/> somewhere else, boomer!</h1>
            <p className="text-xl"> Newest & most trending shows here for free in HD quality </p>
           
            <p className="py-6 text-black	-mt-4 mb-2 rose-700">
               9 out of 10 mothers agree that our anime <br/> selection is worse than Hentai. <br/>

               <Button className="text-black -mb-2 mt-4" variant="outline" href="library">View our library </Button>
                
                
                
               
                
            </p>
        </div>
      </Hero.Content>
    </Hero>
  )
}

export default LandingHero;