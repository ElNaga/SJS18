import { LifecycleClassComponent } from "./components/LifecycleClassComponent";
import { useState } from "react";


const App = () => {

  console.log('rendering App')

  const [show, setShow] = useState(true)

  return (
    <div>
      {show && <LifecycleClassComponent/>}
      <button
        onClick={() => setShow((s) => !s)}
      >Show/Hide</button>
    </div>
  );

}

export default App