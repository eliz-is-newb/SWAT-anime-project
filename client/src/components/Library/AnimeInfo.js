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
            
            <div className="mt-30  bg-white flex justify-center">
           
            <h1  className="text-5xl text-black font-bold mt-4 mb-2 mx-10 px-10"> <img style={{minWidth:"300px", minHeight:"290px", marginLeft:"-40px"}} className="mb-5 -mr-10 px-10" src= {newData?.anime?.anime_image}/>{newData?.anime?.anime_title} </h1>
            <h2 className="text-5xl text-black font-bold mt-11 mb-20 px-10"> Synopsis: </h2>
             <p className="text-xl text-black  mt-11 mb-20 mr-16 -ml-14 px-10"> {newData?.anime?.synopsis} </p>
            <h3 className="text-5xl text-black font-bold mt-10 mb-2 px-10"> Total Episodes: </h3> <p className="text-4xl text-black  mt-24 mb-20 -ml-14 px-10"> {newData?.anime?.episode_count}</p>
            </div>


        </>
    );
}

export default AnimeInfo;