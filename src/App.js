import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import IntroductionPage from './IntroductionPage/IntroductionPage';
import JoinRoomPage from './JoinRoomPage/JoinRoomPage';
import RoomPage from './RoomPage/RoomPage';


function App() {
  return <Router>
    <Routes>
      <Route path='/join-room' element={<JoinRoomPage />} />
      <Route path='/room' element={<RoomPage/>} />
      <Route path='' element={<IntroductionPage/>} />
    </Routes>
  </Router>
}

export default App;
