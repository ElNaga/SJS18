import './App.css'
import { useState } from "react";
// import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Landing } from "./components/Landing/Landing";
import { Logo } from "./components/Logo/Logo";
import { Herocontent } from './components/Herocontent/Herocontent';
import { Coffee } from './components/menuComponents/Coffee';
import { Data2 } from '../src/components/Data/Data2'
import { Data } from '../src/components/Data/Data'

function App() {

  const [click,setClick] = useState(1)
  const [show, setShow] = useState('Menu')

  return (
    <div className="App">
      {/* <Routes> */}
        {/* <Route path="/coffee" element={}/> */}
        {/* <Route path="/auth/add-item" /> */}
        {/* <Route/> */}
      {/* </Routes> */}
      {/* <button onClick={ () => {
        if(click===1) {
          setClick(2)
        }else {setClick(1)}
      }}>Change</button> */}
      {/* {click === 1 && <Landing/>} */}
      {/* {click === 2 && <Navbar/>} */}
      <Logo/>
      {show === 'Menu' && <Landing setShow={setShow}/>}
      {show === 'Кафе' && <Coffee setShow={setShow} Data={Data2}/>}

    </div>
  );
}

export default App;
