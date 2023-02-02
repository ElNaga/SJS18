import { CreateAccount } from "./components/CreateAccount/CreateAccount";
import { EditRecipe } from "./components/EditRecipe/EditRecipe";
import { AddRecipe } from "./components/AddRecipe/AddRecipe";
import { Footer } from "./components/Footer/Footer";
import { Login } from "./components/Login/Login";
import { MyProfile } from "./components/MyProfile/MyProfile";
import { MyRecipe } from "./components/MyRecipe/MyRecipe";
import { Navbar } from "./components/Navbar/Navbar";
import { RecipeCard } from "./components/RecipeCard/RecipeCard";
import { Home } from "./components/Home/Home";
import { Category } from "./components/Category/Category";

import {useSelector, useDispatch} from 'react-redux'
import {setLogin} from './slices/loggedInSlice'

// Router
import { Routes, Route } from 'react-router-dom'

import './App.css'
import { useEffect } from "react";
import { OneRecipeCard } from "./components/OneRecipeCard/OneRecipeCard";

function App() {

  let loggedIn = useSelector(state => state.loggedIn.loggedIn);
  const dispatch = useDispatch();
  useEffect( () => {

    let existingToken = localStorage.getItem("token");
    if (existingToken) {
      dispatch(setLogin(true))
      console.log("Am i here?", loggedIn)
    }
  },[] )
  


  return (
    <div className="App">
      <div className="content_wrap">
        <Navbar login={loggedIn} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/myrecipes" element={<MyRecipe />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/recipe/:id" element={
            <>
              <Home />
              <OneRecipeCard />
            </>
          } />
          <Route path="/edit-recipe/:recipeId" element={<EditRecipe />} />
          <Route path="/:category" element={<Category />} />

          {/* <Route path="/editrecipe/:id" element={<EditRecipe />}>
            <Route index element={<Users users={users} />} />
            <Route path=":id" element={<User />} />
          </Route> */}

        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
