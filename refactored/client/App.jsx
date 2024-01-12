import React, { useState, useEffect } from 'react';
import { Route,Routes } from 'react-router-dom';
import axios from 'axios'; // axios.defaults.baseURL = REACT_BASE_URL;

import VideoCall from 'rtconnect';
import VideoComponent from 'rtconnect';
import SFUVideoConference from '../rtc-test-run/SFUVideoConference';
import {Dashboard, Sidebar, Navbar, Footer, CryptoContainer, InvestmentsContainer, NewsContainer, ConnectContainer, TrendingContainer} from './componentImports';
const REACT_BASE_URL= 'http://localhost:5000';

const App = () => {
  const [trending, setTrending] = useState([]);
  const [trendingUpdated, setTrendingUpdated] = useState(false)

  useEffect(() => {
    const getTrendingData = async () => {
      const trendingData = await axios.get('api/crypt/coins/trending');
      console.log(trendingData)
      setTrending(trendingData.data.coins);
    }
    getTrendingData();
  }, [])
  console.log("trending: ", trending)

  return (
    <>
      {/* **************************** NAVBAR **************************** */}
      <nav className="fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <Navbar />
      </nav>

      {/* **************************** SIDEBAR **************************** */}
      <aside id="sidebar" className="sm:invisible fixed top-0 left-0 z-20 flex flex-col flex-shrink-0  w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width" aria-label="Sidebar">
        <Sidebar />
      </aside>

      {/* **************************** BODY & ROUTES **************************** */}
      <body className="bg-gray-50 dark:bg-gray-800" cz-shortcut-listen="true">
        <Routes>
          <Route path="/" element={<Dashboard trending={trending}/>}/>
          <Route path="/all-coins" element={<CryptoContainer/>} />
          <Route path="/trending" element={<TrendingContainer/>} />
          <Route path="/investments" element={<InvestmentsContainer/>}/>
          <Route path="/news" element={<NewsContainer/>}/>
          <Route path="/connect" element={<ConnectContainer/>}/>
        </Routes>
      </body>

      {/* **************************** FOOTER **************************** */}
      <Footer/>




      {/* **************************** RTC TEST RUN **************************** */}
      {/* SFU VIDEO COMPONENT */}
      {/* <SFUVideoConference URL={'ws://localhost:5000'}/> */}
      {/* <VideoCall
        URL={'ws://localhost:5000'}
        mediaOptions={{ controls: true, style: { width: '640px',    height: '480px'}}}
      /> */}

    </>
  )
}

export default App;


/*
fetch('api/crypt/coins/trending').then(res => res.json())
        .then(res => {
          const data = res
          console.log("fetch api", data)
        })
*/