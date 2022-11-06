
import { Data } from '../Data/Data'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import Logoimg from '../soma_icon.jpg'
import {useState} from 'react'
import './Logo.css'
import pic1 from './cocktail.jpeg'
import pic2 from './sofa1.jpeg'
import pic3 from './soma-nadvor.png'
import { useEffect } from 'react';
//import video1 from '../../../public/Videos/WhiskyBar.mp4'

let mrn = Data



export const Logo = () => {

    let i =0;
    const [images, setImages] = useState(['',pic1,pic2,pic3])
    const [selected, setSelected] = useState([])


    const randomImage = () => {

        //setSelected(Math.round(Math.random()))
        console.log('this is log')
        console.log(Math.round(Math.random()* (3 - 0) + 0))
        setSelected(images[Math.round(Math.random()* (3 - 1) + 1)])
    }

    useEffect( () => {
        randomImage()
    },[] )
    
    

    const [newInfo, setNewInfo]  = useState(mrn.map( (item) => item.category ).filter( (value, index, self) => {
        return self.indexOf(value) === index }))


    const [showItemFromMenu, setShowItemFromMenu] = useState(false)

    const [categ, setCateg] = useState(0);
    // console.log(categ)

    const showItemsInCategory = () => {
        // get items from category from DB
    }
    
    return (
        <div className='wrapperLanding' >
            <div className='wrapper2'>
                <div className="logo_cnt">
                    <img src={Logoimg} alt='icon'/>
                </div>
                <div className='background_video'>
                    <img src={selected} alt="picture" />
                </div>
                
            </div>

        </div>
    )
}