import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimeInfo from './components/Library/AnimeInfo';
import AnimeStreamPlayer from './components/Library/AnimeStreamPlayer';

import './index.css';

// Routes
/* Landing Pages */
import Landing from './views/Landing';
import Library from './views/Library';
/* Auth Pages */
// import Login from './views/Login';
// import Register from './views/Register';
/* Dashboard Pages */
// import Dashboard from './views/Dashboard';

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
        {/* <Route path="login" element={<Login /> } />
        <Route path="register" element={<Register />} /> */}

        {/* Dashboard Pages */}
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);