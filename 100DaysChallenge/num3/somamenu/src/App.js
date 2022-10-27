import './App.css'
import { useState } from "react";
// import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Landing } from "./components/Landing/Landing";

function App() {

  const [click,setClick] = useState(1)

  return (
    <div className="App">
      {/* <Routes> */}
        {/* <Route path="/coffee" element={}/> */}
        {/* <Route path="/auth/add-item" /> */}
        {/* <Route/> */}
      {/* </Routes> */}
      <button onClick={ () => {
        if(click===1) {
          setClick(2)
        }else {setClick(1)}
      }}>Change</button>
      {click === 1 && <Landing/>}
      {click === 2 && <Navbar/>}
    </div>
  );
}

export default App;
