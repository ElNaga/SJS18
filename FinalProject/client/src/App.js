import { CreateAccount } from "./components/CreateAccount/CreateAccount";
import { EditRecipe } from "./components/EditRecipe/EditRecipe";
import { Footer } from "./components/Footer/Footer";
import { Login } from "./components/Login/Login";
import { MyProfile } from "./components/MyProfile/MyProfile";
import { Navbar } from "./components/Navbar/Navbar";
import { RecipeCard } from "./components/RecipeCard/RecipeCard";


function App() {
  return (
    <div className="App">
        <div className="content_wrap">
            <Navbar/>
            <RecipeCard/>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
