
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

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

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 25) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 25 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 46) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 46 characters.
      </div>
    );
  }
};

function Register() {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, email, password).then(
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

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };
    // functionality for user route to session#create
    const navigate = useNavigate();
  

    return(
      <div className="bg-lime-600 -mb-48 h-screen">

        <br/>
        <br/>
        <br/>
      <div className="p-14 w-96 mx-auto bg-black shadow-lg flex items-center space-x-4">
       
      

        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group mb-4">
              <h1 className="font-bold text-4xl mb-8 text-white">Sign Up</h1>
                <label htmlFor="username" className="font-bold text-white">Username</label>
                <br/>
                <Input

                  type="text"
                  className="form-control bg-slate-200 rounded h-10 px-10"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                  placeholder="Enter username here"
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="email" className="font-bold text-white" >Email</label>
                <Input
                  type="text"
                  className="form-control bg-slate-200 rounded h-10 px-10"
                  name="email"
                  value={email}
                  placeholder="Enter email here"
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="font-bold text-white" >Password</label>
                <Input
                  type="password"
                  className="form-control bg-slate-200 rounded h-10 px-10"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                  placeholder="Enter username here"
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block mt-10">Create New Account</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={ successful ? "alert alert-success" : "alert alert-danger" }
                role="alert"
              >
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

export default Register;