import { Hero, Button } from "react-daisyui"

function LandingHero() {
  return(
    <Hero className="text-white" id="home">
     <Hero.Content className="text-center">
        <div>
            <img src="/assets/img/logo-hero.png" className="w-3/12 mx-auto" />
            <h1 className="text-5xl font-bold">Watch your anime here!</h1>
            <p className="py-6">
                Watch Anime for free in HD quality with English subbed or dubbed. 
                <br></br>
                This is way better then <a class="underline decoration-indigo-500">Hentai</a>.
            </p>
        </div>
      </Hero.Content>
    </Hero>
  )
}

export default LandingHero;