
import 'bulma/css/bulma.min.css';
import React, {useState, useEffect} from 'react';
import './index.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

import StreamingPage from './boards/StreamingPage';
import AnimeCardsPopular from './components/AnimeCardsPopular';


function App() {


// Fetch for Popular Anime (Front Page)
  const [popData, setPopData] = useState([]) 
  const getData = async() => {
    let req = await fetch("http://localhost:3000/see/popular") 
    let res = await req.json()
    console.log('re',res)
    setPopData(res)
    } 
  useEffect(() => getData() , []) 





  return (
    <div>
 
      
      <Router> 
          <Routes>
            <Route exact key={1} path="/" element={<Home popData={popData} />}/>
            <Route exact key={2} path="/streaming" element={<StreamingPage />}/>
          </Routes>
       </Router>

      

    </div>
  );
}

export default App;
