// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Page/homepage"; // Correct path for your Home component
import Mixlogoypage from "./Page/mixlogoypage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/mixlogoypage" element={<Mixlogoypage />} />

       
      </Routes>
    </Router>
  );
}

export default App;
