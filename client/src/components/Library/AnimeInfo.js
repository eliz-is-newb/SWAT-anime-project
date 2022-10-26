import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";


function AnimeInfo(){
    const [newData, setNewData] = useState({}) 
    const params = useParams()

    useEffect(() => {
		const getData = async() => {
		let req = await fetch("http://localhost:3000/watch/"+params.id) 
		let res = await req.json()
		setNewData(res)
		} 
		getData() 
	}, []) 

    console.log(newData)

    return (
        <>
            
            <div className="mt-30  bg-lime-500 flex justify-center">
           
            <h1  className="text-5xl text-black font-bold mt-4 mb-2 mx-10 px-10"> <img style={{minWidth:"300px", minHeight:"290px", marginLeft:"-40px"}} className="mb-5 -mr-10 px-10" src= {newData?.anime?.anime_image}/>{newData?.anime?.anime_title} </h1>
            <h2 className="text-5xl text-black font-bold mt-4 mb-20 px-10"> Synopsis: <br/> {newData?.anime?.synopsis} </h2>
            <h3 className="text-5xl text-black font-bold mt-4 mb-2 px-10"> Total Episodes: {newData?.anime?.episode_count} </h3>
            </div>


        </>
    );
}

export default AnimeInfo;