import axios from "axios";
import Fuse from "fuse.js";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchList from "./components/SearchList.js"
import StarterPage from "./components/StarterPage.js";
import PedalForm from "./components/PedalForm.js";
import RandomPedal from "./components/RandomPedal.js";
import PedalList from "./components/PedalList.js";
import Pedal from "./components/Pedal.js";
import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = `https://api.airtable.com/v0/appCDpBxh0nbdoKIN/Pedals?api_key=${apiKey}`;

function App() {

  const [pedals, setPedals] = useState([]);
  const [query, setQuery] = useState(""); 

  // Implementing fuse.js search function
  const fuse = new Fuse(pedals, {
    keys: [
    "id", 
    "fields.name",
    "fields.manufacturer",
    "fields.type"
    ],
    includeScore: true,
  })

  const results = fuse.search(query);

  const foundPedals = [];
    results.map((result) => {
      if(result.score <= 0.1){
        foundPedals.push(result.item);   
      }
      return foundPedals;
    })

  const searchPedals = (ev) => {
    setQuery(ev);
  }
  
  // Fetching pedals from Airtable
  useEffect(() => {
    const fetchPedals = async () => {
      const resp = await axios.get(apiUrl);
      setPedals(resp.data.records); 
    }
    fetchPedals();
  }, [pedals]);

  return (
    <div className="App">
      <Navbar bg="transparent">
       <Nav defaultActiveKey="/">
        <Link to="/" className="navLink">Home</Link>
        <Link to="/about" className="navLink">About</Link>
        <Link to="/add-pedal" className="navLink">Add Pedal</Link>
        <Link to="/random" className="navLink">Random</Link>
       </Nav>
      </Navbar>

      <Route path="/" exact>
        <div className="homeBody">
          <h1 className="homePage">Pedal Base</h1>
          <img className="logo" src="https://i.imgur.com/nLVUKXN.png" alt="Pedal Base icon"/>
          <input type="text" placeholder="Search Pedals" value={query} onChange={(ev) => searchPedals(ev.target.value)}/>
          <Link to="/pedal-list/search-results"> Search</Link>
          <Link to="pedal-list">Full Pedal List</Link>
        </div>        
      </Route>

      <Route path="/pedal-list/search-results">
        <SearchList pedals={foundPedals} key={foundPedals.id}/>
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
        <PedalList pedals={pedals} key={pedals.id}/>
      </Route> 

      <Route path="/pedal/:id" exact>
        <Pedal />
      </Route> 
    </div>
  )
}

export default App;
