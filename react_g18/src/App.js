import { LifecycleClassComponent } from "./components/LifecycleClassComponent";
import { useState } from "react";
import { LifecycleFuncComponent } from "./components/LifecycleFuncComponent";


const App = () => {

  console.log('rendering App')

  const [show, setShow] = useState(true)

  return (
    <div>
      {show && <LifecycleClassComponent/>}
    

      {show && <LifecycleFuncComponent />}

      <button
        style={{padding: "10px"}}
        onClick={() => setShow((status) => !status)}
      >Show/Hide</button>
    </div>
  );

}

export default App