import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import DestinationDetail from "./pages/DestinationDetail";


const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations/:id" element={<DestinationDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
