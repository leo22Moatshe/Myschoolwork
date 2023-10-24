import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import FingerPrint from './FingerPrint'; // Import the page component
import LostCard from './LostCard';
import Cardless from './Cardless'; // Import the page component
import MainMenu from './Components/MainMenu';
import Option from './Components/Option';
import DeleteCard from './Components/DeleteCard';
import face from './face';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/FingerPrint" element={<FingerPrint/> } /> {/* Define a route */}
        <Route path="/LostCard" element={<LostCard />} /> {/* Define a route */}
        <Route path="/Cardless" element={<Cardless />} /> {/* Define a route */}
        <Route path="/MainMenu" element={<MainMenu />} />
        <Route path="/Option" element={<Option/>} />
        <Route path ="/DeleteCard" element={<DeleteCard/>} />
        <Route path = "/face" element= {<face/>} />
        
      </Routes>
    </Router>
  );
}


export default App;
