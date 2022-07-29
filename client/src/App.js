import "./App.css";
import { Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import Dishes from "./screens/Dishes";
import Dish from "./screens/Dish";
import Allergens from "./screens/Allergens";
import Allergen from "./screens/Allergen";
import CreateDish from "./screens/CreateDishes";

function App() {
  return (
    <div className='App'>
      <nav className="nav">
        <Link to='/'>Home</Link>
        <Link to='/dishes'>Dishes</Link>
        <Link to='/new'>Create A Dish</Link>
      </nav>

      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/dishes'>
        <Dishes />
      </Route>
      <Route exact path='/new'>
        <CreateDish />
      </Route>
      <Route exact path='/dishes/:id'>
        <Dish />
      </Route>
      <Route exact path='/allergens'>
        <Allergens />
      </Route>
      <Route path='/allergens/:id'>
        <Allergen />
      </Route>
    </div>
  );
}

export default App;
