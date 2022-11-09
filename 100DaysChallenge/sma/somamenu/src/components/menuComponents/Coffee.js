import { useState } from "react"


export const Coffee = ({ setShow, Data }) => {


    const [items, setItems] = useState(Data);



    return (
        <div >
            <ul >
                <li onClick={() => {  setShow("Menu") }} className="backBtn">
                    Назад
                </li>
                {Object.keys(items).map((item, index) => (
                    <li className="menu_li menu_2" key={index}>

<div className="wrapperHeadPrice">

                        <div className="itemName">
                            {item}
                        </div>
                        <div className="itemPrice">
                            {items[item].price} </div>
</div>



                    </li>
                ))}
            </ul>
        </div>
    )
}