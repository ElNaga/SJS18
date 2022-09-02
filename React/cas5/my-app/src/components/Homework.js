// example 2 should be Dropdown, when adding a new Day to the FileList, it should n longer be shown in the dropdown

import { useState } from "react"

// from input to select
//koga kje stisnes na den od dropdown menito, treba da se dodade vo lista, a da se izbrishe od dropdown


export const Homework = () => {

    const [chooseList, setChooseList] = useState([
        'eden',
        'dva',
        'tri',
        'cetiri',
        'pet',
        'shest',
        'sedum',
        'osum',
        'devet',
        'deset'
    ]);

    const [chosenList, setChosenList] = useState([])


    const theFunctionForSwitchingValues = (value) => {
        //console.log('this is value in function ->', value)
        //setChosenList(value);

        //for (let i = 0; i < chosenList.length; i++) {
        //if (value != chosenList[i]) {
        setChosenList([value, ...chosenList])
        //}
        //}
        //console.log('this is chosenList -> ', chosenList)
        setChooseList(chooseList.filter(element => element != value))
    }


    return (
        <div>
            <select
                onChange={((event) => (theFunctionForSwitchingValues(event.target.value)
                ))} value=''>
                <option disabled={true} value="">
                    --Choose--
                </option>
                {chooseList.map((element, index) => (
                    <option key={index} value={element.value} >
                        {element}
                    </option>))}
            </select>
            {chosenList.map((day, i) => <li key={i}>{day}</li>)}
        </div>
    )
}


// const [chooseList, setChooseList] = useState(
//     {
//         key: 1,
//         value: 'eden'
//     },
//     {
//         key: 2,
//         value: 'dva'
//     },
//     {
//         key: 3,
//         value: 'tri'
//     },
//     {
//         key: 4,
//         value: 'cetiri'
//     },
//     {
//         key: 5,
//         value: 'pet'
//     },
//     {
//         key: 6,
//         value: 'sest'
//     },
//     {
//         key: 7,
//         value: 'sedum'
//     },
//     {
//         key: 8,
//         value: 'osum'
//     },
//     {
//         key: 9,
//         value: 'devet'
//     },
//     {
//         key: 10,
//         value: 'deset'
//     },
//     ) 