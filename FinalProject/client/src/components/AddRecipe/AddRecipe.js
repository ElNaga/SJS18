
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



    const writeToDB = async (data) => {
        console.log(data);
    }

    const handleDataToDb = () => {
        writeToDB(recipeData);
    }

    //------------------------------//
    //   HERE IS THE PICTURE HANDLER //
    //------------------------------//

        // const [picture, setPicture] = useState(null);
        // const [error, setError] = useState('');

        // const handleFileSelect = async (event) => {
        //     console.log(event.target.files[0]);
        //     setPicture(event.target.files[0]);
        //     let r = await handleUpload();
        //     console.log('am i here?', picture)
        // };

        // const fileInput = useRef(null);

        // const handleButtonClick = () => {
        //     fileInput.current.click();
        // };

        // useEffect( () => {
        //     ( async () => {
        //         try {
        //             console.log('useEffect ran. state picture is: ', picture);
        //             let r = await handleUpload();
        //             console.log('am i here?', picture)
        //         } catch (err) {
        //             console.log(err)
        //         }

        //   })();}, [picture]); 

        // const handleUpload = async () => {
        //     // do something with the picture, like sending it to a server
        //     if(!picture){
        //         setError("No file selected");
        //         console.log('no picture')
        //         return;
        //     }
        //     try {
        //         const formData = new FormData();
        //         console.log('this is picture',picture)
        //         formData.append('slika', picture);
        //         const response = await fetch('/api/v1/storage', {
        //             method: 'POST',
        //             body: formData,
        //             headers: {
        //                 'Content-Type': 'multipart/form-data',
        //                 "Authorization": 'Bearer ' + localStorage.getItem("token")
        //             }
        //         });
        //         if(!response.ok){
        //             throw new Error(response.message);
        //         }
        //         const data = await response.json();
        //         if(data.success){
        //             console.log("Upload successfull");
        //             setRecipeData({
        //                 ...recipeData,
        //                 imgLink: data.fileLocation
        //             })
        //         }else{
        //             setError("Upload failed");
        //             console.log(error);
        //         }
        //     } catch (err) {
        //         setError(`Upload failed: ${err.message}`)
        //     }

        //     //add Link to recipeData 
        // };

    const [selectedFile, setSelectedFile] = useState(null);


    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    let [initial, setInitial] = useState(true)

    useEffect( () => {
        (async () => {
            try {
                if (initial){
                    setInitial(false)
                    console.log('ne mrdam')
                } else {
                    console.log('this is render')
                    handleSubmission();
                }
            } catch (err) {
                console.log(err)
            }
        }
        )();}, [selectedFile]);


    const handleSubmission = async () => {

        try {
            const slika = new FormData();

            slika.append('slika', selectedFile, selectedFile.name);

            const response = await fetch(
                'http://localhost:10000/api/v1/storage',
                {
                    method: 'POST',
                    body: slika,
                    headers: {
                        "Authorization": 'Bearer ' + localStorage.getItem("token")
                    }
                }
            );
            let pictureName = await response.json();
            console.log('this is picture name', pictureName.fileLocation);
            setRecipeData({
                ...recipeData,
                imgLink: pictureName.fileLocation
            })
            return pictureName
        } catch (error) {
           throw error;
        }
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

                        <label htmlFor="upload-photo" className='add--recipeImgButton'>UPLOAD IMAGE</label>
                        <input id='upload-photo' type="file"  onChange={changeHandler}/>

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
