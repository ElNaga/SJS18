import {Dropdown} from "./Dropdown"
import {useState} from "react"
import { elements, people } from "../mockData/mock";


export const DisplayDropdowns = () => {

    const [element, setElements] = useState("")
    const [person, setPerson] = useState("")
  
    return (

        < div >
            <Dropdown elements={elements} onChangeDropdown={setElements} />
            <Dropdown elements={people} onChangeDropdown={setPerson} />

            <p>Selected social : {element}</p>
            <p>Selected person : {person}</p>
        </div >

    )
}