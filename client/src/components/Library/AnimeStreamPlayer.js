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
         <h1  className="text-5xl bg-white text-black font-bold mt-4 ml-56 mb-10 mx-10 px-10"> 
           Watching: {videoData1?.anime?.anime_title} </h1>
            {episodes.map((item)=>{
                return (
                    
            <div className="mt-30 bg-white flex" style={{ marginRight:"-400px", }}>

            
         
            <div id="item1" className="carousel-item ">
            
            <iframe className="focus: w-full"
            allowfullscreen="allowfullscreen" src={item.link}
            style={{position:"relative", width:"900px", left:"270px", marginTop:"80px",marginRight:"-10px", height:"510px", border:"5px solid black", borderRadius:"4px"}}
            > </iframe> 
            </div> 
        
            <div className="-ml-72" style={{position:"relative",zIndex:"-0", marginTop:"605px", marginLeft:"160px"}}>
            <a href="#item" className="text-2xl font-bold bg-lime-500 text-black"> &nbsp;Episode {item.ep_num}&nbsp; </a> 
            </div>
            </div>
 )})}

        </>
    );
}

export default AnimeStreamPlayer;