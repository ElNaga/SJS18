import { useState } from "react"

 
export const Examples = () => {

    const [car, setCar] = useState({
        model: "Hyundai",
        year: 2022,
        km: 100000
    })

    const [daysOff, setDaysOff] = useState([
        'Saturday',
        'Sunday'
    ])

    const printObject = (object) => {
        return <pre>{JSON.stringify(object, null, 2)}</pre>
    }

    const changeKm = (km) => {
        setCar({
            ...car,
            km : 9999
            })
    }

    const [newDay, setNewDay] = useState("")
    

    const addNewDayOff = () => {
        setDaysOff([...daysOff,newDay]);
        setNewDay('')
    }
    return (
        <div>
            {printObject(car)}
            
            <button
            onClick={() => changeKm(9999)}>
                change km to 9.999
            </button>
            <hr />
            <h4>Example 2</h4>
            
            <input type="text" value={newDay} onChange={( (event) => setNewDay(event.target.value) )} id="" />

            <button 
            onClick={addNewDayOff}
            >Add Day Off</button>

            {daysOff.map( (day,i) => <li key={i}>{day}</li>)}
        </div>
    )
}