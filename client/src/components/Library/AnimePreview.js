import {Carousel, Button } from "react-daisyui"
import {useLocation } from "react-router-dom";

function AnimePreview({newData}) {


  return (

<>





 {/* Ternary for Anime Info Component */}

    {/* Grid for Popular */}
    <div className="flex flex-col gap-1">
      {/* Image */}
      <a  className="bg-black">
        <img src={newData.animeImg} className="hover:translate-x-2 hover:-translate-y-2 delay-50 duration-100" />
      </a>

      {/* Anime Title */}
      <a href={`/info/${newData.mal_id}`} className="hover:text-purple-500 text-gray-200 font-semibold"> {newData.episodeTitle} </a>

      {/* Score */}
      <a href="#" className="hover:text-purple-500 text-sm text-gray-400 -mt-1"> Episode: {newData.episodes} </a>

      {/* Category Tags */}
      <div className="flex flex-row flex-wrap gap-2 mt-1">
        {/* Map This */}
        <a href={`/streamplayer/${newData.mal_id}`} className="hover:bg-lime-500 text-black text-xs font-semibold bg-gray-500 px-2 py-1 rounded-full"> Play </a>
      </div>      

   </div>
   

   </>
  

  )
}
export default AnimePreview;