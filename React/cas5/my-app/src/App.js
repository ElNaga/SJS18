
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
    </div>
  );
}

export default App;
