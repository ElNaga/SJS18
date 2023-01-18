
import React, { useState } from 'react'
import './addRecipe.css'
import image from '../../assets/pizzaImg.jpg'
import backImage from '../../assets/icon_back_white.svg'

import { useNavigate } from "react-router-dom";



export const AddRecipe = () => {
    
    const navigate = useNavigate();
    const goBackToList = () => {
        navigate("/myrecipes")
    }

    const [uid, setUid] = useState('')
    // author_id: { type: String, required: true },
    // title: { type: String, required: true },
    // category: { type: String, required: true },
    // preparationTime: { type: Number, required: true }, //minutes
    // numPeople: { type: Number, required: true },
    // shortDesc: { type: String, required: true },
    // recipe: { type: String, required: true },
    // dateCreated: {type: Date, default: Date.now},
    // imgLink: { type: String, required: true },
    // numberFavorited: { type: Number, required: true }
    const getAuthorId = () => {
        try {
            // /api/v1/auth/whoami
            
        } catch (err) {
            
        }
    }

    let initData = {
        author_id: '',
        title: '',
        category: '',
        preparationTime: '',
        numPeople: 0,
        shortDesc: '',
        recipe: '',
        imgLink: '',
        numberFavorited: 0
    }
    
    const [recipeData, setRecipeData] = useState(initData);

    const dataChange = (e) => {
        setRecipeData({
            ...recipeData,
            [e.target.name]: e.target.value
        })
    }

    const writeToDatabase = (data) => {

    }

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
                        <img src={image} alt="recipeImg" />
                        <button>UPLOAD IMAGE</button>
                    </div>
                    <div className='add--recipeInfo'>
                        <label htmlFor="recipeName">Recipe Title</label>
                        <input id='recipeName' type="text" name='title' value={recipeData.title} onChange={dataChange}/>

                        <div className='add--recipeThreeBrackets'>
                            <div className='add--container'>
                                <label htmlFor="add--recipeCategory">Category</label>
                                <select id='add--recipeCategory' type="text" />

                            </div>
                            <div className='add--container'>
                                <label htmlFor="add--prepTime">Preparation Time</label>

                                <input id='add--prepTime' type="Number" />
                            </div>
                            <div className='add--container'>
                                <label htmlFor="add--NoPeople">No. People</label>

                                <input id='add--NoPeople' type="Number" />
                            </div>
                        </div>
                        <label htmlFor="add--recipeDescription">Short Description</label>

                        <textarea rows={4} id='add--recipeDescription' 
                                placeholder='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage'/>
                        <button className='add--saveButton'>SAVE</button>
                    </div>
                    <div className='add--recipeFullText'>
                        <label htmlFor="add--recipeFullText">Recipe</label>

                        <textarea type="text" id='add--recipeFullText' rows={15}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
