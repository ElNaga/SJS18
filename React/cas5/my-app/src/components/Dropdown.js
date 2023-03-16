

export const Dropdown = ({elements, onChangeDropdown}) => (
    <div>
        <label >Choose the App: </label>
        <select onChange={(event) => onChangeDropdown(event.target.value)}>
            {elements.map((element, index) => (
                <option key={index} value={element.value} >
                    {element.name}
                </option>
            ))}
        </select>
    </div>
)