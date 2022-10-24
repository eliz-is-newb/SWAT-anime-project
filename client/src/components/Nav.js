import React, {useState} from "react";
import LoginButton from "./LoginButton"; 
import SignUpButton from "./SignUpButton";

const Nav = () => {

  const [showForm, setShowForm] = useState(true)
  function handleDropDown4() { 
    var dropdown4 = document.querySelector('#genres')
    dropdown4.classList.toggle('is-active')
    setShowForm(prev =>!prev)
}


return (


<>
 <div id="Nav-wrapper"
 > 
   <nav class="navbar"
   style={{ backgroundColor:"black", paddingBottom:"70px",paddingTop:"20px", maxHeight:"60px"}}
   role="navigation" aria-label="main navigation">
  <div class="navbar-brand"
  style={{paddingRight:"100px", width:"10px", maxHeight:"50px"}}
  >
    <a class="navbar-item" href="/">
      <p
      style={{paddingLeft:"30px",paddingTop:"0px", width:"300px", maxHeight:"300px", fontFamily:"bold-font", color:"white", fontSize:"25px",}}
      > </p>
    </a>

  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start"
    style={{paddingLeft: "0px", width:"400px", paddingTop: "13px", fontFamily:"bold-font", display:"flex", justifyContent:"center"}}
    >
      <a>

      <div class="control"
      style={{paddingLeft:"20px", marginLeft:"1250px", paddingRight:"20px"}}
      >
        <input 
        style={{borderRadius: "4px", width:"450px",maxWidth:"120%", height:"35px", backgroundColor:"white", border:"black 1px solid", color:"black"}}
        class="input is-normal" type="search" placeholder="Search..."/>
         <span>
         <i
         style={{paddingBottom:"3px"}}
         >
         

         </i>
        </span>
        </div>
      </a>

      

     

  
  </div>

  <LoginButton />
  <SignUpButton />

    <div className="navbar-item has-dropdown is-trigger" id="genres" onClick={handleDropDown4}
    style={{ backgroundColor: "transparent", position: "absolute", top:'30px', left:"1200px"}}
    >
        <a 
        style={{backgroundColor:"rgba(183, 3, 30, 1)", border:"1.5px transparent solid", }}
        className="navbar-item button">
        <img style={{maxHeight:"35px"}} src="./grns.png"/>
        </a>

        <div class="navbar-dropdown is-left shadow"
        style={{position: "absolute", right:"-500px", top:"95px", backgroundColor:"black", fontFamily:"bold-font", color:"black", borderRadius:"9px 9px 7px 7px", borderTop:"none", width: "500px", fontSize:"20px", border:"white solid 3px"}}
        >
          {/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┤ᴥ•ʔっ♥ Genre Buttons Starter Kit (below) ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┤ */}

          <a style={{color: "white", }} class="navbar-item">
            About
          </a>
          <a style={{color: "white"}} class="navbar-item">
            Jobs
          </a>
          <a style={{color: "white"}} class="navbar-item">
           Help
          </a>
          
      </div>
    </div>


  </div>
</nav>

</div>

</>



)}
export default Nav