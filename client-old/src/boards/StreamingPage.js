import React, {useState} from "react";
import'../medium.ttf';
import'../bold.ttf';
import'../regular.ttf';
import VideoPlayer from "./VideoPlayer";
import DashboardNav from "./DashboardNav";

const StreamingPage = () => {

    const fakeArray = [1,2,3,4,5,7]
return (

<>
<div id="page-background-wrapper"
style={{
    overflow: "clip",
    height: "120vh",
    backgroundColor: "black",
    backgroundSize: "cover", 

 }}>
<DashboardNav />

<div id="page-elements-wrapper"
style={{display: "flex", justifyContent: "center", position: "absolute",

 paddingTop:"48px",
 paddingLeft:"10px"  

 }}>

<div id="board-wrapper-3"
style={{
    
    height: "50px",
     paddingTop:"6px", borderRadius:"4px", left:"770px",

 }}>
    

    

<div id="board-title">
            
            


            </div>




</div>

            {/* <div  style={{
                width: "90vw",
                display:"flex",
                flexWrap: "wrap",
                alignItems: "center",
                marginTop:"2rem"
            }}>
                    {fakeArray.map(el=>(
                    <VideoPlayer />
                    ))}

            </div> */}
                       
<div id="board-comments">

<div id="board-likes"></div>

</div>

</div>


</div>



</>




)}
export default StreamingPage