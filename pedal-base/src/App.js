import "./App.css";
import StarterPage from "./components/StarterPage.js";
import PedalList from "./components/PedalList.js";
import { Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

         <Link to="/addpedal">Add Pedal</Link>
        <Link to="/random">Random</Link>
      </nav>

      <Route path="/" exact>
        <h1>Pedal Base</h1>
        <input type="text" placeholder="Search Pedals"/>
        <input type="submit" value="Search"/>
        <Link to="pedallist">Full Pedal List</Link>        
      </Route>

      <Route path="/about" exact>
          <StarterPage />

        </Route> 
        <Route path="/pedallist" exact>
          <PedalList />

        </Route> 
    </div>
  );
}

export default App;
