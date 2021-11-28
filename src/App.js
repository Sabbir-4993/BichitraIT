import * as React from "react";

import {Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <div >
        <div className="main-wrapper">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/service" element={<Service />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    </div>
    );
}

export default App;
