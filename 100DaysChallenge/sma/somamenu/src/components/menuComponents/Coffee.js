import { useState } from "react"


export const Coffee = ({ show, setShow, Data }) => {


    const [items, setItems] = useState(Data);



    return (
        <div >
            <ul>
                <li onClick={() => { setShow("Menu") }} className="backBtn">
                    Назад
                </li>
                {Object.keys(Data[show]).map((item, index) => (
                    <li className="menu_li menu_2" key={index}>

                        <div className="wrapperHeadPrice">

                            <div className="itemName">
                                {console.log(show)}
                                {/* {console.log(Data)} */}
                                {console.log(Data[`${show}`][`${item}`].price)}
                                {console.log(item["price"])}
                                {console.log(item)}
                                {item}
                            </div>
                            <div className="itemPrice">
                                {Data[`${show}`][`${item}`].price} ден.
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}