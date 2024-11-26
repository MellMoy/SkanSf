import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from "./Homepage";
import LoginPage from "./LoginPage";
import Searchpage from './Searchpage';





function App() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/search" element={<Searchpage />} />
          </Routes>
        </div>
      </Router>
    );
  }
export default App;