import React, {useState} from "react";
import './Home.css';
import '../medium.ttf';
import '../bold.ttf';
import '../regular.ttf';
import AnimeCardsPopular from "./AnimeCardsPopular";
import AnimeCardsNew from "./AnimeCardsNew";
import Nav from './Nav';

const Home = ({popData}) => {


return (


<>
    <Nav/>
    <div id="Page-wrapper"
     style={{
        fontFamily: "medium-font",
        height: "140vh",
        width:"100%",
        backgroundImage: "url(./background.png)",
        backgroundSize: "cover", 
     }}> 

         <div 
            style={{
                marginLeft:"25px", 
                paddingTop:"40px", 
                width: "900px", 
                display: "flex", 
                justifyContent: "center",
                }}>
                <img className="shadow"
                style={{
                    position:"relative", 
                    top:"20px", 
                    left:"460px", 
                    width:"450px", 
                    textShadow: "2px 8px 10px #000000"
                }} src="./banner.png" />
        </div>
        <div 
            style={{
                paddingTop:"30px", 
                display:"flex"
                }}>

     
            <img className="shadow"
                style={{
                    position:"absolute", 
                    top:"685px", 
                    left:"150px", 
                    width:"260px", 
                    textShadow: "2px 8px 10px #000000"
                 }} src="./newu.png" />

        <div style={{position:"absolute", top:"760px", left: "110px"}}>
    
            <div style={{}}>
                <AnimeCardsNew /> 
            </div>

        </div>

        <div 
            style={{ 
                position:"absolute", 
                top:"730px", 
                left: "820px"
             }}>
                <img 
                    style={{
                        position:"absolute", 
                        top:"37px", 
                        left: "-190px", 
                        width:"70px"}} 
                        className="shadow" 
                        src="./rah.png"/>
                        <div  
                        style={{
                            width: "50vw",
                            display:"flex",
                            flexWrap: "wrap",
                            alignItems: "flex-start",
                            marginTop:"2rem"
                        }}>

                    {popData.map(card => { return <AnimeCardsPopular key={card.id} popData={card}/>
                    })}
                    
                   
                   

                        </div> 
         </div>




        
        <img className="shadow"
        style={{
            position:"absolute", 
            top:"683px", 
            left:"840px", 
            width:"145px", 
            textShadow: "2px 8px 10px #000000"
    }}
        src="./pop.png" />




    

         </div>

    </div>

</>



)}
export default Home