import React, {useState} from "react";
import'../medium.ttf';
import'../bold.ttf';
import'../regular.ttf';

const AnimeCardsNew = () => {

return (



<>

    <div 
    className="shadow"
    style={{

        
            borderRadius: "7px",
            padding:"2rem",
            width:"210px",
            height:"310px",
            backgroundColor: "rgba(255, 255, 255, 0.501)",
            margin: "1.2rem",
            }}>





    </div>
    <div>
        <p 
        style={{
        fontFamily: "bold-font",
        fontSize:"25px", 
        position:"absolute", top:"40px", 
        left:"230px", 
        backgroundColor:"black", 
        color:"white",
        borderRadius: "0px 9px 9px 0px",
        paddingLeft:"9px",
        width:"340px", 
        paddingBottom:"5px", 
        minHeight:"240px", 
        paddingTop:"8px"
        }}> Title 
            <p  style={{ fontSize:"16px"}} > Episode: 3/12</p>
            <p  style={{ fontSize:"18px"}} > synopsis</p>

        </p>
     </div>

</>


)}
export default AnimeCardsNew 