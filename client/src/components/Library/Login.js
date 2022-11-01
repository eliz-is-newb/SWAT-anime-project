import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {

  // fetch for user data & auth 
//  const [username, setUsername] = useState("");
//  const [password, setPassword] = useState(""): 
//  const [errors, setErrors] = useState([]);
//  const [isLoading, setIsLoading] = useState(false); 

//     function handleFormUpdate(e) {
// 		setFormData(oldFormData => {
// 		return {...oldFormData, 
// 		[e.target.name]: e.target.value} 
// 		})
// 	}
	
//     function handleSubmit(e) {
// 		e.preventDefault();
//     setIsLoading(true);
//     fetch('http://localhost:3000/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     })
//       .then((response) => { setIsLoading(false); 
//         if (response.ok) {
//           response.json().then((user) => onLogin(user));
//         }
//       });
//     }
      
    // functionality for user route to session#create
    const navigate = useNavigate();

 
    




  return(
 <>

<div class="bg-white h-screen overflow-hidden flex items-center justify-center">
  <div class="bg-black lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
    <div class="bg-blue-900 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
      </svg>
    </div>
    <form class="p-12 md:p-24">
      <div class="flex items-center text-lg mb-6 md:mb-8">
        <svg class="absolute ml-3" width="24" viewBox="0 0 24 24">
          <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/>
        </svg>
        <input type="text" id="username"  class="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Username" />
      </div>
      <div class="flex items-center text-lg mb-6 md:mb-8">
        <svg class="absolute ml-3" viewBox="0 0 24 24" width="24">
          <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z"/>
        </svg>
        <input type="password" id="password" 
           class="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Password" />
      </div>
      <button class="bg-lime-500 font-medium p-2 md:p-4 text-white uppercase w-full"  type="submit">Login</button>
    
    </form>
  </div>
 </div>




 {/* <div class="bg-lime-700 ">
        <div class="flex justify-center container mx-auto my-auto w-screen h-screen items-center flex-col">
            <div class="text-slate-100 items-center">
                <svg class="w-10 h-10 mx-auto pb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <div class="text-center pb-3">Welcome back!</div>
            </div>

            <form onSubmit={handleSubmit}  class="w-full md:w-3/4  lg:w-1/2 flex flex-col items-center bg-slate-50 rounded-md pt-12">
    
                <div class="w-3/4 mb-6">
                    <input type="username" onChange={handleFormUpdate} name="username" id="email" class="w-full py-4 px-8 bg-white placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300" placeholder="Username"/>
                </div>
           
                <div class="w-3/4 mb-6">
                    <input type="password" name="password"onChange={handleFormUpdate} id="password" class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500  border-solid border-2 border-slate-300" placeholder="Password"/>
                </div>
                
                <div class="w-3/4 mb-12">
                    <button type="submit" class="py-4 bg-black w-full rounded text-blue-50 font-bold hover:bg-violet-700"> LOGIN</button>
                </div>
            </form>
            <div class="flex justify-center container mx-auto mt-6 text-slate-100 text-sm">
                <div class="flex flex-col sm:flex-row  justify-between md:w-1/2 items-center">
                    <div class="flex" >Forgot your password</div>
                    <div class="flex " >Don't have an account? Get Started</div>
                </div>
            </div>
        </div>
        
        
    </div>
  */}
 
 </>
  )
}

export default Login;