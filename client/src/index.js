import React, { useEffect, useState } from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimeInfo from './components/Library/AnimeInfo';
import Dashboard from './components/Dashboard';
import AnimeStreamPlayer from './components/Library/AnimeStreamPlayer';
import Login from './components/Library/Login';
import Register from './components/Library/Register';
import UserLoggedInLanding from './views/UserLoggedInLanding';
import AnimeDescription from './views/AnimeDescription';
import './index.css';



// Routes
/* Landing Pages */
import Landing from './views/Landing';
import Library from './views/Library';
import UserCoreBar from './components/UserCoreBar';
import StreamBoard from './views/StreamBoard';
/* Auth Pages */
// import Login from './views/Login';
// import Register from './views/Register';
/* Dashboard Pages */
// import Dashboard from './views/Dashboard';

// user login/signup sessions stuff 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
      <Routes>
        {/* Landing Pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/library" element={<Library />}/>
        <Route path='/info/:id' element={<AnimeDescription />}/>
        <Route path='/streamplayer/:id' element={<StreamBoard />}/>
        {/* Auth Pages */}
        <Route path="/login" element={<Login /> } />
        <Route path="/register" element={<Register />} /> 
        <Route path="/loggedin" element={<UserLoggedInLanding />} />
        {/* Dashboard Pages */}
        <Route path="/dashboard" element={<Dashboard  />} />
        <Route path="/home/:id"      elemennt={<UserCoreBar  />}/> 
      </Routes>
    </BrowserRouter>

);