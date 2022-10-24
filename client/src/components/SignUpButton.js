import React, {useState} from "react";

const SignUpButton = () => {

// ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┤ᴥ•ʔっ useState and function for drop-down trigger ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┤

    const [showForm, setShowForm] = useState(true)

    function handleDropDown3() { 
        var dropdown3 = document.querySelector('#signup')
        dropdown3.classList.toggle('is-active')
        setShowForm(prev =>!prev)
    }
// ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┬┴┬┴┬┴┬┴┬┴┬┤



return (


<>
<div 
    style={{marginTop:"395px", position:"absolute", left:"935px", top: "55px"}}>

  
<div class="navbar-item has-dropdown is-trigger is-hoverable" id="signup" onClick={handleDropDown3}
    style={{paddingTop: "20px", paddingRight:"30px", backgroundColor: "transparent"}}
    >

<a><img className="shadow"
style={{ maxHeight:"49px"}}
src="./sub.png" />
    </a>  
        


{/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┤ᴥ•ʔっ Form for Sign Up (below) ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┤ */}

        <div class="navbar-dropdown is-right shadow"
        
                style={{
                position:"absolute",
                top:"-360px",
                left:"-890px",
                padding:"2rem",
                paddingInline:"2rem",
                marginTop:"30px", 
                marginRight:"-18px",
                height: "350px",
                width:"450px",
                backgroundColor:"black", 
                fontFamily:"bold-font", 
                color:"white", 
                borderTop:"none",
                border:"white solid 3px",
                borderRadius:"9px 9px 7px 7px"}}>


                                    {/* ʚ♥ɞ Start of Form ʚ♥ɞ */}
                                    
                                    <p style={{fontFamily: "bold-font", fontSize:"20px", marginBottom:"10px", }}></p>
                                    {/* ʚ♥ɞ Username Input */}
                                    <div class="field">
                                    
                                    <input class="input " type="username" placeholder="Create username"/>
                                    <p class="control ">
                                    
                                    </p>
                                    </div>


                                    {/* ʚ♥ɞ Email Input */}
                                    <div class="field">
                                    
                                    <input class="input " type="email" placeholder="Enter Email"/>
                                    <p class="control ">
                                    
                                    </p>
                                    </div>


                                    {/* ʚ♥ɞ Password Input */}
                                    <div class="field">
                                    <p class="control">
                                    <input class="input " type="password" placeholder="Choose Password"/>
                                    </p>
                                    </div>

                                     {/* ʚ♥ɞ Re-enter Password Input */}
                                     <div class="field">
                                    <p class="control">
                                    <input class="input " type="password" placeholder="Re-enter Password"/>
                                    </p>
                                    </div>

                                     {/* ʚ♥ɞ Form Submit Button */}
                                    <div class="field">
                                    <p class="control">
                                    <button style={{fontFamily: "bold-font", fontSize:'18px', marginTop:"5px", backgroundColor:"rgba(183, 3, 30, 1)", borderRadius:"7px"}} class="button  is-dark">
                                    Sign Up! 
                                    </button>
                                    </p>
                                    </div>
          
      </div>
{/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┤ */}

    </div> 
    </div>
</>



)}
export default SignUpButton