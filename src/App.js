import axios from "axios";
import Fuse from "fuse.js";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
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
    const [query, setQuery] = useState("");

  //console.log(pedals);

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

  const pushPedals = [];
  results.map((result) => {
    pushPedals.push(result.item);
    return pushPedals;
  })

  console.log(pushPedals);

  const searchPedals = (ev) => {
    setQuery(ev);
  }
  

    useEffect(() => {
      const fetchPedals = async () => {
        const resp = await axios.get(apiUrl);
        setPedals(resp.data.records); 
      }
      fetchPedals();
    }, []);

    return (
    <div className="App">
      <Navbar bg="light" >
       <Nav defaultActiveKey="/">
        <Link to="/">Home</Link>
        
       
        <Link to="/about">About</Link>
        
        
        <Link to="/add-pedal">Add Pedal</Link>
       
       
        <Link to="/random">Random</Link>
        </Nav>
      </Navbar>

      <Route path="/" exact>
        <h1>Pedal Base</h1>
        <input type="text" placeholder="Search Pedals" value={query} onChange={(ev) => searchPedals(ev.target.value)}/>
         <Link to="/pedal-list/search-results">
          Search
         </Link>

        <Link to="pedal-list">Full Pedal List</Link>        
      </Route>

      <Route path="/pedal-list/search-results">
          <SearchList pedals={pushPedals}/>
      </Route>

      <Route path="/about" exact>
          <StarterPage />

      </Route> 

      <Route path="/add-pedal" exact>
          <PedalForm />

      </Route> 

      <Route path="/random" exact>
          <RandomPedal pedals={pedals} setPedals={setPedals}/>

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