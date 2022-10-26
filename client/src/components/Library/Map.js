import { useEffect, useState } from "react";
import AnimePreview from "./AnimePreview";
import AnimeLibrary from "./AnimeLibrary";
import AnimeInfo from "./AnimeInfo"

function Map(){
  
  

    // Fetch for newest 
    const [newData, setNewData] = useState([]) 

    useEffect(() => {
		const getData = async() => {
		let req = await fetch("http://localhost:3000/see/new") 
		let res = await req.json()
		setNewData(res)
		} 
		getData() 
	}, []) 

    // Fetch for popular 
    const [popData, setPopData] = useState([]) 

    useEffect(() => {
		const getData = async() => {
		let req = await fetch("http://localhost:3000/see/popular") 
		let res = await req.json()
		setPopData(res)
		} 
		getData() 
	}, []) 

    

    

    return (
        <>

       {/* Anime info ternary here */}


            {/* Fetch for new  */}
            <div className="mt-20  bg-black flex justify-center">
            <h1 className="text-5xl text-white font-bold  mb-2 px-10">Latest Release <br/> (this week) </h1>
            <div className="grid grid-cols-6 gap-4 px-20">

             {/* Map here */}
             {newData.map(card => { return <AnimePreview key={card.id} newData={card}/>
               })}
             </div> 
            </div>

            {/* Fetch for popular  */}
            <div className="mt-20 mb-20 bg-white flex justify-center">
            <h1 className="text-5xl text-black font-bold mt-20 mb-2 px-10">Most Popular (this season) </h1>
            <div className="grid grid-cols-6 gap-4 mt-20 mb-20 px-20">
                
            {/* Map here */}
            {popData.map(card => { return <AnimeLibrary key={card.id} popData={card}/>
        })}
            {/* Pagination */}
             </div> 
            </div>


        </>
    );
}

export default Map;