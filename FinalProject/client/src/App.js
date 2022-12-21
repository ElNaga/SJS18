import { CreateAccount } from "./components/CreateAccount/CreateAccount";
import { EditRecipe } from "./components/EditRecipe/EditRecipe";
import { Footer } from "./components/Footer/Footer";
import { Login } from "./components/Login/Login";
import { MyProfile } from "./components/MyProfile/MyProfile";
import { MyRecipe } from "./components/MyRecipe/MyRecipe";
import { Navbar } from "./components/Navbar/Navbar";
import { RecipeCard } from "./components/RecipeCard/RecipeCard";
import { Home } from "./components/Home/Home";
import { Category } from "./components/Category/Category";

// Router
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <div className="content_wrap">
            <Navbar/>
             
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/create-account" element={<CreateAccount/>}/>
            </Routes>

            <Footer/>
        </div>
    </div>
  );
}

export default App;
