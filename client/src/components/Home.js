import React, {useState} from "react";
import './Home.css';
import '../medium.ttf';
import '../bold.ttf';
import '../regular.ttf';
const Home = () => {

return (


<>
 <div id="Page-wrapper"
 style={{
   fontFamily: "medium-font",
    height: "120vh",
    backgroundImage: "url(./background.png)",
    backgroundSize: "cover", 
  
    

 }}
 > 

    <div id="Banner-wrapper"
    style={{ marginLeft:"25px", paddingTop:"40px", width: "900px", display: "flex", justifyContent: "center",}}
    >
        <img className="shadow"
        style={{position:"relative", top:"20px", left:"460px", width:"450px", 
        textShadow: "2px 8px 10px #000000"
    }}
        src="./banner.png" />
    </div>
    <div id="Boards-wrapper"
 style={{paddingTop:"30px", paddingLeft:"211px", display:"flex", justifyItems:"center", width:"1000px"}}
    >

     





    

    </div>

</div>

</>



)}
export default Home