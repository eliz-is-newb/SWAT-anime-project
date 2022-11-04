import axios from "axios";

const API_URL = "http://localhost:3000/";

// ʚ♥ɞ ---> register() 
const register = (username, email, password, password_confirmation) => {
    return axios.post(API_URL + "register", {
        username, 
        email, 
        password,
        password_confirmation,
    });
}; 

// ʚ♥ɞ --->  login() 
const login = (email, password) => {
    return axios 
    .post(API_URL + "authenticate", {
        email, 
        password, 
    })
    .then((response) => {
        if (response.data.accessToken) { 
            localStorage.setItem("user", JSON.stringify(response.data));
         }
         return response.data; 
    })
}

// ʚ♥ɞ --->  logout() 
const logout = () => {
    localStorage.removeItem("user");
}; 

// ʚ♥ɞ --->  getCurrentUser() 
const getCurrentUser = () => { 
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = { 
    register, 
    login, 
    logout, 
    getCurrentUser, 
};

export default AuthService;



