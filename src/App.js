// src/App.js

import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import HomePage from "./js/HomePage";
import Rent from "./js/Rent";
import Buy from "./js/Buy";
import Footer from "./js/Footer";
import Login from "./js/Login";
import Navbar from "./js/Navbar";
import About from "./js/About";
import Contact from "./js/Contact";
import "./App.css";
import "./css/HomePage.css";
import "./css/Login.css";
import "./css/Rent.css";
import "./css/Buy.css";
import "./css/Footer.css";
import "./css/Navbar.css";
import "./css/About.css";
import "./css/Contact.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <div class="background">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/rent" element={<Rent />} />
              <Route path="/buy" element={<Buy />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

// import "./App.css";
// import './css/Header.css';
// import Header from './js/Header';
// import { BrowserRouter } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import Main_Page from './js/Main_Page.js';

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Main_Page/>}/>
//       </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
