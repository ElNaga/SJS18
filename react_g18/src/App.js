//import { LifecycleClassComponent } from "./components/LifecycleClassComponent";
import { useState } from "react";
import { LifecycleFuncComponent } from "./components/LifecycleFuncComponent";
import { Login } from "./components/Loging";



const App = () => {

  console.log('rendering App')

  const [show, setShow] = useState(true)

  return (
    <div>
    
{/* 
      {show && <LifecycleFuncComponent />}

      <button
        style={{padding: "10px"}}
        onClick={() => setShow((status) => !status)}
      >Show/Hide</button> */}

      <Login />
    </div>
  );

}

export default App