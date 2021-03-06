import React from 'react';
import "./styles.css";
import NyTS from './NyTS';
import NyBS from './NyBS';

export default function App() {
  return (
    <div className="App">
      <div id="navbar">
      <nav>
        <a href="#home">Home</a>
        <a href="#articls">Articls</a>
        <a href="#books">Books</a>
        <a href="#contact">Contact </a>
      </nav>
    </div>
    <div id="wrapper">
<div id="home" className="page">
        <div className="jumbotron">
          <h2 className="thetitle">Welcome to The Ny Times</h2>
          {/* <h3>This site will provide you NYT</h3> */}
        </div>
      </div>
    </div>
      <div id="articls" className="page">
        <h2>Top Articls</h2>
       <NyTS/>
      </div>
       <div id="books" className="page">
        <h2>Books </h2>
       <NyBS/>
      </div>
   <footer id="footer">
           <div className="container">
               <div className=" col col-4 bottom">
                   <h3>API</h3>
                   <p>The project resource information from The NY Times</p>
               </div>
               <div className=" col col-4 bottom">
                <h3>Contact</h3>
                <p>mamencode@gmail.com</p>
<p>https://github.com/mamencode</p>
            </div>
            <div className=" col col-4 bottom">
                <h3>API</h3>
                   <p>The project resource information from The NY Times</p>
            </div>
            <div className=" col col-4 bottom">
                 <h3>Contact</h3>
                <p>mamencode@gmail.com</p>
<p>https://github.com/mamencode</p>
            </div>
           </div>
        </footer>
    </div>
  );
}
