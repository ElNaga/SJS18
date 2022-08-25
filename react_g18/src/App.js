
// function App() {
//   return (
//     <div className="App">
//       <h1> Hello World! </h1>
//       <p>This is my first paragraph</p>
//     </div>
//   );
// }

import ClassComp from "./components/ClassComp";
import FuncComp from "./components/FuncComp";

const App = () => (
    <div className="App">
      <h1> Hello World! </h1>
      <p>This is my first paragraph</p>
      <FuncComp name="Daniel"/>
      <FuncComp name="Trajche"/>
      <FuncComp name="Stefani"/>
      <FuncComp name="Milan"/>
      <FuncComp name="Damjan"/>
      <ClassComp/>
    </div>
  );

export default App;
