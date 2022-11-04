import React, { useState, useRef }  from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";



import AuthService from "../../services/auth.service";

const required = (value) => {
  if (!value) {
    return ( 
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};


function Login () {

  const form = useRef(); 
  const checkBtn = useRef(); 

  // fetch for user data & auth 
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState(""); 
 const [loading, setLoading] = useState(false)
 const [message, setMessage] = useState("");

 const onChangeEmail = (e) => { 
    const email = e.target.value; 
    setEmail(email)
 };

 const onChangePassword = (e) => { 
  const password = e.target.value; 
  setPassword(password);
 }; 

 const handleLogin = (e) => { 
  e.preventDefault(); 

  setMessage("");
  setLoading(true); 

  form.current.validateAll(); 
  
  if (checkBtn.current.context._errors.length === 0) { 
    AuthService.login(email, password).then( 
      () => { 
        navigate("/loggedin"); 
        window.location.reload(); 
      }, 
      (error) => { 
        const resMessage = 
          (error.response && 
             error.response.data && 
             error.response.data.message) || 
           error.message ||
           error.toString(); 

        setLoading(false); 
        setMessage(resMessage); 
      }
    );
  } else {
    setLoading(false);
  }
  
 };



    // functionality for user route to session#create
    const navigate = useNavigate();

 
    




  return(
    <div className="bg-lime-600 -mb-64 h-screen">

    <br/>
    <br/>
    <br/>
  <div className="p-14 w-96 mx-auto bg-black shadow-lg flex items-center space-x-4">
   
  

        <Form onSubmit={handleLogin} ref={form}>
          <div className="form-group mb-4">
          <h1 className="font-bold text-4xl mb-8 text-white">Login</h1>
            <label htmlFor="email" className="font-bold text-white"
            >Email</label>
           <br/>
            <Input
              type="text"
              className="form-control bg-slate-200 rounded h-10 px-10"
              name="email"
              value={email}
              onChange={onChangeEmail}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="font-bold text-white" 
            >Password</label>
            <Input
              type="password"
              className="form-control bg-slate-200 rounded h-10 px-10"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block mt-10" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Login; 