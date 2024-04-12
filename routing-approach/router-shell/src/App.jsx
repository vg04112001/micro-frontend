import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "layout/Header";
import Footer from "layout/Footer";
import Home from "layout/Home";
import About from "layout/About";
import CustomHome from "pages/CustomHome"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

const App = () => (
  <>
    <Router>
      <Header />
      <CustomHome/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <div>Name: router-shell</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div> */}
        <Route path="/about" element={<About />} />
      </Routes>
    <Footer />
    </Router>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
