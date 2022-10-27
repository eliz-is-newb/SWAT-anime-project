import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import AnimeStreamPlayer from "./AnimeStreamPlayer"

function VideoMap () {
    const [videoData, setVideoData] = useState({}) 
    const [episodes,setEpisodes] = useState([])
    const params = useParams()

    useEffect(() => {
		const getData = async() => {
		let req = await fetch("http://localhost:3000/watch/"+params.id) 
		let res = await req.json()
		setVideoData(res)
        setEpisodes(res.episode)
		} 
		getData() 
	}, []) 

    console.log(videoData)

    return (
      <>
        {episodes.map((item)=>{
            <h1>HI</h1>
        })}
    {/* Map here */}

 {/* {videoData.flatMap(card, episode }) => (episode.map => {return <AnimeStreamPlayer key={card.id} videoData={card}/>  
    
               })} */}
{/* 

const output = responses.flatMap(({ videoData }) =>
  videoData.episode.map(({ card }) => ({ key={card.id} videoData={card}
    id: data.id,
    name: data.capacity,
    date: name,
  }))
); */}

     </> 
    );
}

export default VideoMap;