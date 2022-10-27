import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import {Carousel, Button } from "react-daisyui"


function AnimeStreamPlayer({videoData}){

    const [videoData1, setVideoData1] = useState({}) 
    const [episodes,setEpisodes] = useState([])
    
    const params = useParams()

    useEffect(() => {
		const getData = async() => {
		let req = await fetch("http://localhost:3000/watch/"+params.id) 
		let res = await req.json()
		setVideoData1(res)
        setEpisodes(res.episode)

		} 
		getData() 
	}, []) 

    // console.log(videoData1)
    console.log("EPI",episodes)
    // console.log(videoData)
    return (
        <>
         <h1  className="text-5xl bg-lime-500 text-black font-bold mt-4 mb-10 mx-10 px-10"> 
           Watching: {videoData1?.anime?.anime_title} </h1>
            {episodes.map((item)=>{
                return (
                    
            <div className="mt-30 bg-lime-500 flex">

            
         
            <div id="item1" className="carousel-item w-full">
            
            <iframe allow="fullscreen" width="900" height="600" style={{}} src={item.link}> </iframe> 
            </div> 
        
            <div className="flex justify-center w-full -ml-72 py-2 gap-2">
            <a href="#item1" className="font-bold text-4xl text-black "> Episode: {item.ep_num}</a> 
            </div>
            </div>
 )})}

        </>
    );
}

export default AnimeStreamPlayer;