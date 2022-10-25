import React, {useState} from "react";
import'../medium.ttf';
import'../bold.ttf';
import'../regular.ttf';

const AnimeCardsPopular = ({popData}) => {


  

return (



<>

<div className="shadow"
style={{
 
    backgroundImage: `url(${popData.animeImg})`,
    borderRadius: "7px",
    padding:"2rem",
    width:"200px",
    height:"300px",
    backgroundColor: "rgba(255, 255, 255, 0.501)",
    margin: "1.3rem",
    // border: "red 2px solid"
    }}
>
<p style={{ fontSize:"23px", position:"relative", top:"-33px", left:"-33px", backgroundColor:"black", color:"white", borderRadius: "7px 0px 7px 0px", paddingLeft:"9px", width:"100px", paddingBottom:"5px"}}>
★ {popData.score}
  
</p>

<p style={{ fontSize:"18px", position:"relative", top:"130px", left:"-34px", backgroundColor:"black", color:"white", borderRadius: "0px 0px 7px 7px", paddingLeft:"9px", width:"202px", paddingBottom:"5px", paddingTop:"5px", minHeight:"100px", paddingRight:"5px"}}>
{popData.animeTitle}
</p>


</div>







</>


)}
export default AnimeCardsPopular 