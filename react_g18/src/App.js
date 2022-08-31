import {useState} from "react"

//import { movies } from "./mock/mockData"

// import { Homework } from "./components/Homework";

import {Input} from "./components/common/Input";

const App = () => {

  const [fieldType, setFieldType] = useState("password")


  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")
  const [comment , setComment] = useState("")

  const onMouseDownHandler = () => {
    setFieldType("text")
  }

  const onMouseUpHandler = () => {
    setFieldType("password")
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({
      username,password,comment
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <Homework movies={movies}/>  */}

      <Input
      type="text"
      name="username"
      placeholder="Enter Username"
      value={username}
      onChange = { (event) => { setUsername(event.target.value)}}
      />

      <Input
            placeholder="Please enter password"
            name="password" 
            type={fieldType} 
            mouseDown={onMouseDownHandler} 
            mouseUp={onMouseUpHandler} 
            value={password}
            onChange = { (event) => { setPassword(event.target.value)}}
            />

        <Input 
        type="text"
        name = "comment"
        placeholder="Enter comment"
        value={comment}
        onChange = { (event) => { setComment(event.target.value)}}
        />

        <button type="submit">Submit</button>
    </form>
  );
}

export default App