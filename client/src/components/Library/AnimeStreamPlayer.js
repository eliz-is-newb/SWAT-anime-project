import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";


function AnimeStreamPlayer(){
    const [videoData, setVideoData] = useState({}) 
    const params = useParams()

    useEffect(() => {
		const getData = async() => {
		let req = await fetch("http://localhost:3000/watch/"+params.id) 
		let res = await req.json()
		setVideoData(res)
		} 
		getData() 
	}, []) 

    console.log(videoData)

    return (
        <>
            
            <div className="mt-30  bg-lime-500 flex justify-center">
           
            <h1  className="text-5xl text-black font-bold mt-4 mb-2 mx-10 px-10"> 
             {videoData?.anime?.anime_title} </h1>
             <span className="text-5xl text-black font-bold mt-4 mb-20 px-10"> Watching: {videoData?.episode?.ep_num} </span>
            <iframe src={videoData?.episode?.link}> </iframe>
            </div>


        </>
    );
}

export default AnimeStreamPlayer;