import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimeInfo from './components/Library/AnimeInfo';
import Dashboard from './components/Dashboard';
import AnimeStreamPlayer from './components/Library/AnimeStreamPlayer';
import Login from './components/Library/Login';
import Register from './components/Library/Register';
import UserLoggedInLanding from './views/UserLoggedInLanding';
import './index.css';

// Routes
/* Landing Pages */
import Landing from './views/Landing';
import Library from './views/Library';
import UserCoreBar from './components/UserCoreBar';
/* Auth Pages */
// import Login from './views/Login';
// import Register from './views/Register';
/* Dashboard Pages */
// import Dashboard from './views/Dashboard';

// user login/signup sessions stuff 
const [user, setUser] = useState(null);

useEffect(() => {
  // auto-login
  fetch("http://localhost:3000/me").then((r) => {
    if (r.ok) {
      r.json().then((user) => setUser(user));
    }
  });
}, []);

if (!user) return <Login onLogin={setUser} />;
\

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Landing Pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/library" element={<Library />}/>
        <Route path='/info/:id' element={<AnimeInfo />}/>
        <Route path='/streamplayer/:id' element={<AnimeStreamPlayer />}/>
        {/* Auth Pages */}
        <Route path="/login" element={<Login /> } />
        <Route path="/register" element={<Register />} /> 
        <Route path="/loggedin" element={<UserLoggedInLanding />} />
        {/* Dashboard Pages */}
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="/home/:id"      elemennt={<UserCoreBar  user={user} setUser={setUser}  />}/> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);