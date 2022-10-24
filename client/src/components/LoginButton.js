import React, {useState} from "react";

const LoginButton = () => {



    // ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┤ᴥ•ʔっ useState and function for drop-down trigger ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┤
    const [showForm, setShowForm] = useState(true)

    function handleDropDown2() { 
        var dropdown2 = document.querySelector('#login')
        dropdown2.classList.toggle('is-active')
        setShowForm(prev =>!prev)
    }
     // ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┬┴┬┴┬┴┬┴┬┴┬┤



return (


<>

<div style={{ marginTop:"400px", width: "400px", position:"absolute", left:"590px", top: "-5px"}}>
<div class="navbar-item has-dropdown is-trigger is-hoverable" id="login" onClick={handleDropDown2}
    style={{paddingTop: "20px", paddingRight:"40px", backgroundColor: "transparent", }}
    >

<a><img
style={{ maxHeight:"35px"}}
src="./lib.png" />
    </a>  

{/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┤ᴥ•ʔっ♥ Form for Login (below) ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┤ */}
          
        <div class="navbar-dropdown is-right"
            
                style={{
                padding:"2rem",
                paddingInline:"2rem",
                marginTop:"10px", 
                marginRight:"33px",
                height: "200px",
                width:"250px",
                backgroundColor:"black", 
                fontFamily:"bold-font", 
                color:"white", 
        
                borderTop:"none",
                borderRadius:"7px"}}>


                                    {/* ʚ♥ɞ Start of Form ʚ♥ɞ */}
                                    <p style={{fontFamily: "bold-font", fontSize:"20px", marginBottom:"10px", }}></p>

                                    {/* ʚ♥ɞ Email Input */}
                                    <div class="field">
                                    
                                    <input class="input is-small is-dark" type="email" placeholder="Email"/>
                                    <p class="control ">
                                    
                                    </p>
                                    </div>


                                    {/* ʚ♥ɞ Password Input */}
                                    <div class="field">
                                    <p class="control">
                                    <input class="input is-small is-dark" type="password" placeholder="Password"/>
                                    </p>
                                    </div>

                                     {/* ʚ♥ɞ Form Submit Button */}
                                    <div class="field">
                                    <p class="control">
                                    <button style={{fontFamily:"bold-font", fontSize:"12px", marginTop:"5px"}} class="button is-small is-dark">
                                    Login
                                    </button>
                                    </p>
                                    </div>
          
      </div>
{/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┤ */}

    </div> 
    </div>
</>



)}
export default LoginButton