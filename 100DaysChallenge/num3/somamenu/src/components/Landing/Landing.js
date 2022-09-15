
import { Data } from '../Data/Data'
import BackgroundSlider from 'react-background-slider'

import Logo from '../soma_icon.jpg'
import {useState} from 'react'
import './Landing.css'
import pic1 from './cocktail.jpeg'
//import video1 from '../../../public/Videos/WhiskyBar.mp4'

export const Landing = () => {

    const [newInfo, setNewInfo]  = useState(Data.map( (item) => item.category ).filter( (value, index, self) => {
        return self.indexOf(value) === index }))

    return (
        <div className='wrapper'>
            <div className='wrapper2'>
                <div className="logo_cnt">
                    <img src={Logo} alt='icon'/>
                </div>
                <div className='background_video'>
                    <img src={pic1} alt="picture" />
                </div>
                <ul >
                    {newInfo.map( (item,index) => (
                        <li className='menu_1' key={index}> 
                            <a style={{textDecoration: 'none',
                                   color: 'black'
                        }} href="/">{item}</a>
                        </li>

                    ))}
                </ul>
            </div>

        </div>
    )
}