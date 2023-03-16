import { useState } from "react";
import { Counter } from "./components/Counter";
import { Pure } from "./components/Pure";
import { PureUnpure } from "./components/PureUnpure";
import { Unpure } from "./components/Unpure";
import { Todos } from "./components/Todos";
import { Posts } from "./components/Posts";



function App() {

  
  return (
    <>
     <Posts/>
    <hr /><hr />
    {/* <Todos/> */}
   
    <hr /><hr />
    {/* // <PureUnpure/> */}
    {/* <Counter/> */}
    </>
  )
}

export default App;
