import './myRecipe.css'
import plus from '../../assets/icon_plus_white.svg'
import bucketIco from '../../assets/icon_trashcan.svg'
import response from "../../mockFolder/mockRecipes.json"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

export const MyRecipe = () => {


    const [myRecipes, setMyRecipes] = useState([]);
    const [authorId, setAuthorId] = useState(undefined);

    useEffect( () => {
        (async () => {
            try {    
                if (!authorId) {        
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
                let bla = user.uid
                console.log('blllaaa siiiis',bla);
                setAuthorId(bla)
                console.log('author ID iiissssss',authorId)
                return user;
            }
            } catch (err) {
                 console.log(err);
            }
        })();
    },[] );

    useEffect( () => {
        (async () => {
            try {
                if (!authorId) {
                    console.log(authorId,'this is id');
                    return
                } else {
                    const response = await fetch(`/api/v1/recipes/author/${authorId}`,
                    {
                        method: 'get',
                        headers: {
                            "Authorization": 'Bearer ' + localStorage.getItem("token")
                        }
                    });
                let rez = await response.json();
                setMyRecipes(rez);
                console.log(rez, "myrecipes хомеј");
                return rez
                }
            } catch (err) {
                return console.log(err);
            }
        })();
    },[authorId]);

    const navigate = useNavigate();
    const addRecipePage = () => {
        navigate("/add-recipe")
    }

    return (
        <div className='myRecipe--overWrapper'>
            <div className='myRecipe--wrapper'>
                <div className='myRecipes--title'>
                    <h2>My Recipes</h2>
                    <span className='myRecipes--theLine'></span>
                    <div onClick={addRecipePage} className='myRecipe--backArrow'>
                        <img src={plus} alt="" />
                    </div>
                </div>
                <div className='myRecipe--Labels'>
                    <div className='myRecipe--leftLabelsWrapper'>
                        <div>
                            <label className='myRecipes--label1' htmlFor="">Recipe Name</label>
                        </div>
                        <div>
                            <label className='myRecipes--label1' htmlFor="">Category</label>
                        </div>
                        <div>
                            <label className='myRecipes--label1' htmlFor="">Created On</label>
                        </div>
                    </div>
                    <div>
                        <label className='myRecipes--label3' htmlFor="">Delete</label>
                    </div>
                </div>
                {myRecipes.map((element, index) => (
                    <div key={index} className='myRecipes--recipeList myRecipe--Labels'>

                        {/* // <option key={index} value={element.value} >
                        //     {element}
                        // </option>))} */}
                        <div className='myRecipes--recipeListWrapper myRecipe--leftLabelsWrapper '>
                            <div className='myRecipes--CardRecipeName'>
                                <p >{element.title}</p>
                            </div>
                            <div className='myRecipes--CardCategory'>
                                <p >{element.category}</p>
                            </div>
                            <div className='myRecipes--CardCreated'>
                                <p >{element.dateCreated}</p>
                            </div>
                        </div>
                        <div className='trashcanImage'>
                            <img src={bucketIco} alt="" />
                        </div>
                    </div>))}
            </div>
        </div>
    )
}
