<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======

import {Dropdown} from "./components/Dropdown"
import {useState} from "react"
import { elements, people } from "./mockData/mock";
import { DisplayDropdowns } from "./components/DisplayDropdowns";
import { Examples } from "./components/Examples";
import { Homework } from "./components/Homework";


function App() {




  return (
    <div>
      {/* <DisplayDropdowns/> */}
      {/* <Examples /> */}
      <Homework /> 
>>>>>>> AI
    </div>
  );
}

export default App;
