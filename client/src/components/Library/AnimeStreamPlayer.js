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
        <div className="mb-10">
         <h1  className=" bg-white text-black mt-10 ml-10 -mb-12 mx-10 px-10"> 
          <span className="bg-white text-2xl text-black font-bold px-2 py-3 rounded">You're watching:</span>  <span className="bg-black text-white px-5 font-bold text-xl py-3 rounded">{videoData1?.anime?.anime_title} </span></h1>
            {episodes.map((item)=>{
                return (
                    
            <div className="mt-30 bg-white flex -ml-40">

            
         
            <div id="item1" className="carousel-item ">
            
            <iframe className="focus: w-full"
            allowfullscreen="allowfullscreen" src={item.link}
            style={{position:"relative", width:"900px", left:"270px", marginTop:"80px",marginRight:"-10px", height:"510px", border:"5px solid black", borderRadius:"4px"}}
            > </iframe> 
            </div> 
        
            <div className="-ml-72" style={{position:"relative",zIndex:"-0", marginTop:"605px", marginLeft:"160px"}}>
            <a href="#item" className="text-xl font-bold bg-black px-2 rounded py-2 text-white"> &nbsp;Episode {item.ep_num}&nbsp; </a> 
            </div>
            </div>
 )})}

        </div>
    );
}

export default AnimeStreamPlayer;