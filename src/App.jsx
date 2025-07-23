import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import NavBar from './component/ui/navbar';
import BookDetail from './pages/BookDetail';
import BookDetail2 from "./pages/BookDetail2";
import BookDetail3 from "./pages/BookDetail3";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/book/adventure1" element={<BookDetail />} />
        <Route path="/book/adventure2" element={<BookDetail2 />} />
        <Route path="/book/adventure3" element={<BookDetail3 />} />
      </Routes>
    </>
  );
}

export default App;
