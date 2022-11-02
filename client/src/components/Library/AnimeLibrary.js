import {Carousel, Button } from "react-daisyui"

function AnimeLibrary({popData}) {
  return (

<>






    {/* Grid for Popular */}
    <div className="flex flex-col gap-1.5">
      {/* Image */}
      <a href={`/streamplayer/${popData.mal_id}`} className="bg-white">
        <img src={popData.animeImg} className="hover:translate-x-2 hover:-translate-y-2 delay-50 duration-100" />
      </a>

      {/* Anime Title */}
      <a href={`/info/${popData.mal_id}`} className="hover:text-purple-800 text-black font-semibold"> {popData.animeTitle} </a>

      {/* Score */}
      <a  className=" text-sm text-gray-700 -mt-1"> ★ {popData.score} </a>

      {/* Category Tags */}
      <div className="flex flex-row flex-wrap gap-2">
        {/* Map This */}
        <a href={`/streamplayer/${popData.mal_id}`} className="hover:bg-lime-500 text-black text-xs font-semibold bg-gray-300  px-2 py-1 rounded"> Play </a>
      </div>      

   </div>

   </>
  

  )
}
export default AnimeLibrary;