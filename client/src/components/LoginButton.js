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

<div style={{ marginTop:"400px", width: "405px", position:"absolute", left:"840px", top: "58px"}}>
<div class="navbar-item has-dropdown is-trigger is-hoverable" id="login" onClick={handleDropDown2}
    style={{paddingTop: "20px", paddingRight:"40px", backgroundColor: "transparent", }}
    >

<a><img className="shadow"
style={{ maxHeight:"38px", dropShadow: "(16px 16px 10px black)" }}
src="./lib.png" />
    </a>  

{/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┤ᴥ•ʔっ♥ Form for Login (below) ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┤ */}
          
        <div class="navbar-dropdown is-right shadow"
            
                style={{
                position:"absolute",
                top:"-378px",
                left:"-790px",
                padding:"2rem",
                paddingInline:"2rem",
                marginTop:"20px", 
                marginRight:"33px",
                height: "230px",
                width:"250px",
                backgroundColor:"black", 
                fontFamily:"bold-font", 
                color:"white", 
                border:"black solid 3px",
                
             
                borderRadius:"9px 9px 7px 7px"}}>


                                    {/* ʚ♥ɞ Start of Form ʚ♥ɞ */}
                                    <p style={{fontFamily: "bold-font", fontSize:"20px", marginBottom:"10px"}}></p>

                                    {/* ʚ♥ɞ Email Input */}
                                    <div class="field">
                                    
                                    <input class="input " type="email" placeholder="Email"/>
                                    <p class="control ">
                                    
                                    </p>
                                    </div>


                                    {/* ʚ♥ɞ Password Input */}
                                    <div class="field">
                                    <p class="control">
                                    <input class="input" type="password" placeholder="Password"/>
                                    </p>
                                    </div>

                                     {/* ʚ♥ɞ Form Submit Button */}
                                    <div class="field">
                                    <p class="control">
                                    <button style={{fontFamily:"bold-font", fontSize:"18px", marginTop:"7px", borderRadius:"7px", backgroundColor: "rgba(183, 3, 30, 1)"}} class="button is-medium is-dark">
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