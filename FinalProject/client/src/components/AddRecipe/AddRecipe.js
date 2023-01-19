
import React, { useEffect, useState, useRef } from 'react'
import './addRecipe.css'
import defaultImage from '../../assets/pizzaImg.jpg'
import backImage from '../../assets/icon_back_white.svg'

import { useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux'


export const AddRecipe = () => {

    const navigate = useNavigate();
    const goBackToList = () => {
        navigate("/myrecipes")
    }

    const [uid, setUid] = useState('');

    let initData = {
        author_id: '', // from token
        title: '', // from input
        category: '', // from input
        preparationTime: '', // from input
        numPeople: 0, // from input
        shortDesc: '', // from input
        recipe: '', // from input
        imgLink: defaultImage, // from UPLOAD IMAGE ------------------------------------------------- is it done?
        numberFavorited: 0 // let it be 0
    }

    const [recipeData, setRecipeData] = useState(initData);

    const dataChange = (e) => {
        setRecipeData({
            ...recipeData,
            [e.target.name]: e.target.value
        })
    }
    
    useEffect( () => {
        (async () => {
            try {            
                const response = await fetch ('/api/v1/auth/validate-token',
                {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": 'Bearer ' + localStorage.getItem("token")
                    }
                });
                let user = await response.json();
                console.log('this is user', user);
                // setUid(user.uid)
                setRecipeData({
                    ...recipeData,
                    author_id: user.uid
                })
                return user;
    
            } catch (err) {
                 console.log(err);
            }
        })();
    },[] )



    const writeToDB = (data) => {
        console.log(data);
    }

    const handleDataToDb = () => {
        writeToDB(recipeData);
    }

    //------------------------------//
    //   HERE IS THE PICTURE HANDLER //
    //------------------------------//

        const [picture, setPicture] = useState(null);
        const [error, setError] = useState('');

        const handleFileSelect = (event) => {
            setPicture(event.target.files[0]);
        };

        const fileInput = useRef(null);

        const handleButtonClick = () => {
            fileInput.current.click();
        };

        const handleUpload = async () => {
            // do something with the picture, like sending it to a server
            if(!picture){
                setError("No file selected");
                return;
            }
            try {
                const formData = new FormData();
                formData.append('slika', picture);
                const response = await fetch('/api/v1/storage', {
                    method: 'POST',
                    body: formData
                });
                if(!response.ok){
                    throw new Error(response.message);
                }
                const data = await response.json();
                if(data.success){
                    console.log("Upload successfull");
                    setRecipeData({
                        ...recipeData,
                        imgLink: data.fileLocation
                    })
                }else{
                    setError("Upload failed");
                }
            } catch (err) {
                setError(`Upload failed: ${err.message}`)
            }

            //add Link to recipeData 
        };


    return (
        <div className='add__overWrapper'>
            <div className='add__wrapper'>
                <div className='add__title'>
                    <h2>Add Recipe</h2>
                    <span className='add__theLine'></span>
                    <div onClick={goBackToList} className='add--backArrow'>
                        <img src={backImage} alt="" />
                    </div>
                </div>
                <div className='add--content'>
                    <div className='add--recipeImg'>
                        <label htmlFor="recipeImg">Recipe Image</label>
                        <img src={recipeData.imgLink} alt="recipeImg" />
                        <button onClick={handleButtonClick} className='add--recipeImgButton'>UPLOAD IMAGE</button>
                        <input type="file" ref={fileInput} style={{display: 'none'}} onChange={handleFileSelect} />
                    </div>
                    <div className='add--recipeInfo'>
                        <label htmlFor="recipeName">Recipe Title</label>
                        <input id='recipeName' type="text" name='title' value={recipeData.title} onChange={dataChange}/>
                        <div className='add--recipeThreeBrackets'>
                            <div className='add--container'>
                                <label htmlFor="add--recipeCategory">Category</label>
                                <select id='add--recipeCategory' type="text" name='category' value={recipeData.category} onChange={dataChange} />
                            </div>
                            <div className='add--container'>
                                <label htmlFor="add--prepTime" >Preparation Time</label>
                                <input id='add--prepTime' type="Number" name='preparationTime' value={recipeData.preparationTime} onChange={dataChange} />
                            </div>
                            <div className='add--container'>
                                <label htmlFor="add--NoPeople">No. People</label>
                                <input id='add--NoPeople' type="Number" name='numPeople' value={recipeData.numPeople} onChange={dataChange}/>
                            </div>
                        </div>
                        <label htmlFor="add--recipeDescription">Short Description</label>
                        <textarea rows={4} id='add--recipeDescription' 
                                placeholder='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage'
                                name='shortDesc' value={recipeData.shortDesc} onChange={dataChange}
                                />
                        <button onClick={handleDataToDb} className='add--saveButton'>SAVE</button>
                    </div>
                    <div className='add--recipeFullText'>
                        <label htmlFor="add--recipeFullText">Recipe</label>

                        <textarea type="text" id='add--recipeFullText' rows={15} name='recipe' value={recipeData.recipe} onChange={dataChange}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
