import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MeetingRoom from "./pages/MeetingRoom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ConversationWithAvatar from "./pages/ConversationWithAvatar.JSX";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/meeting" element={<MeetingRoom />} />
          <Route path="/conversation" element={<ConversationWithAvatar/>} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
