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

<a><img
style={{ maxHeight:"49px"}}
src="./sub.png" />
    </a>  
        


{/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┤ᴥ•ʔっ Form for Sign Up (below) ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┤ */}

        <div class="navbar-dropdown is-right"
        
                style={{
                padding:"2rem",
                paddingInline:"2rem",
                marginTop:"7px", 
                marginRight:"-18px",
                height: "290px",
                width:"250px",
                backgroundColor:"black", 
                fontFamily:"bold-font", 
                color:"white", 
                borderTop:"none",
                border:"6px black solid",
                borderRadius:"7px"}}>


                                    {/* ʚ♥ɞ Start of Form ʚ♥ɞ */}
                                    
                                    <p style={{fontFamily: "bold-font", fontSize:"20px", marginBottom:"10px", }}></p>
                                    {/* ʚ♥ɞ Username Input */}
                                    <div class="field">
                                    
                                    <input class="input is-small " type="username" placeholder="Create username"/>
                                    <p class="control ">
                                    
                                    </p>
                                    </div>


                                    {/* ʚ♥ɞ Email Input */}
                                    <div class="field">
                                    
                                    <input class="input is-small " type="email" placeholder="Enter Email"/>
                                    <p class="control ">
                                    
                                    </p>
                                    </div>


                                    {/* ʚ♥ɞ Password Input */}
                                    <div class="field">
                                    <p class="control">
                                    <input class="input is-small " type="password" placeholder="Choose Password"/>
                                    </p>
                                    </div>

                                     {/* ʚ♥ɞ Re-enter Password Input */}
                                     <div class="field">
                                    <p class="control">
                                    <input class="input is-small " type="password" placeholder="Re-enter Password"/>
                                    </p>
                                    </div>

                                     {/* ʚ♥ɞ Form Submit Button */}
                                    <div class="field">
                                    <p class="control">
                                    <button style={{fontFamily: "bold-font", fontSize:'14px', marginTop:"5px", backgroundColor:"rgba(183, 3, 30, 1)", borderRadius:"7px"}} class="button is-small is-dark">
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