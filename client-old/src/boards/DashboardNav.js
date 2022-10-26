import React, {useState} from "react";
import'../medium.ttf';
import'../bold.ttf';
import'../regular.ttf';

const DashboardNav = () => {
    const [showForm, setShowForm] = useState(true)
    function handleDropDown5() { 
      var dropdown5 = document.querySelector('#dashboards')
      dropdown5.classList.toggle('is-active')
      setShowForm(prev =>!prev)
  }

return (

<>


{/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┤ᴥ•ʔっ♥ Dashboard Search Nav (below) ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┤ */}
<div class="control"
      style={{position:"absolute", top:"30px", left: "180px"}}
      >
      

        <input 
        style={{borderRadius: "4px", width:"350px",maxWidth:"120%", height:"35px", backgroundColor:"white", border:"black 1px solid", color:"black", position:"relative", top:"54px", left:"40px"}}
        class="input is-normal" type="search" placeholder="Search..."/>
         <span>
         <i
         style={{paddingBottom:"3px"}}
         >
         </i>
        </span>
        </div>
  {/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┤ᴥ•ʔっ♥ Dashboard Drop Down (below) ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┤ */}
        <div class="dropdown" id="dashboards">
  <div class="dropdown-trigger" onClick={handleDropDown5}>
    <a
   style={{position:"relative", top: "30px", left:"50px"}}
    > <img className="dropdown is-trigger" 
       
        style={{maxHeight:"125px"}}
        src="./smallchibi.png"/> </a>
  </div>
  <div 
  style={{position:"relative", top:"150px", left:"-90px", }}
  class="dropdown-menu" id="dropdown-menu4" role="menu">
    <div style={{width:"170px", height:"600px", backgroundColor:"transparent"}}class="dropdown-content">
          {/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┤ᴥ•ʔっ♥ Dashboard Drop Down items! (below) ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┤ */}
      <div class="dropdown-item">
       <img style={{maxHeight:"400px", }} src="./dashlogo.png"/>
      </div>
      <a class="dropdown-item" style={{pointerEvents:"stroke 2px pink solid"}}>
       <img style={{maxHeight:"35px"}} src="./homie.png"/>
       <span
       style={{fontFamily: "medium-font", fontSize:"20px", color:"white"}}
       > Home </span>
      </a>
      <a class="dropdown-item">
       <img style={{maxHeight:"39px"}} src="./mehe.png"/>
       <span
        style={{fontFamily: "medium-font", fontSize:"20px", color:"white"}}
       > Ur Profile </span>
      </a>
      <a class="dropdown-item">
       <img style={{maxHeight:"35px"}} src="./fav.png"/>
       <span
        style={{fontFamily: "medium-font", fontSize:"20px", color:"white"}}
       > Fav'd </span>
      </a>
      <a class="dropdown-item">
       <img style={{maxHeight:"40px"}} src="./fowo.png"/>
       <span
        style={{fontFamily: "medium-font", fontSize:"20px", color:"white"}}
       > Fans </span>
      </a>



    </div>
  </div>
</div>

</>




)}
export default DashboardNav