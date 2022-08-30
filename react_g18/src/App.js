
// function App() {
//   return (
//     <div className="App">
//       <h1> Hello World! </h1>
//       <p>This is my first paragraph</p>
//     </div>
//   );
// }

import "./css/styles.css"
import Student from "./components/Students"
import { StudentClass } from "./components/StudentClass";
import Conditionals from "./components/Conditionals";

const secondaryParagraph = {
  backgroundColor: "teal",
  color: "black",
  padding: "10px",
}

// const primaryPara = {
//   backgroundColor: "yellow",
//   color: "blue",
//   padding: "10px",
// }

const name = "Stavre";
const lastname = "Stavridis";
const age = 21;

const student = {
  name,
  lastname,
  age,
  email : "asd@asd.com"
};

const fruits = ['apple','orange','banana']

const toShow = false

const App = () => (

  <div className="App">
    <p className="primaryPara"
    // style={primaryPara}
    >Hello cas 2</p>

    <div>{JSON.stringify(student)}</div>

    <div>{fruits}</div>

    <div>{toShow}</div>

    <p className="secondaryParagraph"
    // style={secondaryParagraph}
    
    >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo laborum assumenda eligendi sint perspiciatis praesentium culpa inventore. Officiis asperiores earum voluptate amet laudantium minima in deserunt magnam dolore, eum sit.</p>
  <Student student= {student}/>
  <StudentClass student = {student}/>
  <Conditionals fruits={fruits} toShow={toShow}/>
  </div>

);

export default App;
