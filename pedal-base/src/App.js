import axios from "axios";
import "./App.css";
import Search from "./components/Search.js";
import StarterPage from "./components/StarterPage.js";
import PedalForm from "./components/PedalForm.js";
import RandomPedal from "./components/RandomPedal.js";
import PedalList from "./components/PedalList.js";
import Pedal from "./components/Pedal.js";
import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import SearchList from "./components/SearchList.js"



const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = `https://api.airtable.com/v0/appCDpBxh0nbdoKIN/Pedals?api_key=${apiKey}`;

function App() {
    const [pedals, setPedals] = useState([]);

    useEffect(() => {
      const fetchPedals = async () => {
        const resp = await axios.get(apiUrl);
        setPedals(resp.data.records); 
      }
      fetchPedals();
    }, []);

    return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

         <Link to="/add-pedal">Add Pedal</Link>
        <Link to="/random">Random</Link>
      </nav>

      <Route path="/" exact>
        <h1>Pedal Base</h1>
        <Search pedals={pedals} />
        <Link to="pedal-list">Full Pedal List</Link>        
      </Route>

      < Route path="/pedal-list/search-results" exact>
            <SearchList />
        </Route> 

      <Route path="/about" exact>
          <StarterPage />

      </Route> 

      <Route path="/add-pedal" exact>
          <PedalForm />

      </Route> 

      <Route path="/random" exact>
          <RandomPedal pedals={pedals}/>

      </Route> 


        <Route path="/pedal-list" exact>
          <PedalList pedals={pedals} />

        </Route> 

        <Route path="/pedal/:id" exact>
          <Pedal />

        </Route> 
    </div>
  );
}

export default App;
