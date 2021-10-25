import Fuse from "fuse.js";
import SearchList from "./SearchList.js";
import { useState } from "react";
import { Link, Route } from "react-router-dom";

const Search = ({ pedals }) => {
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
	console.log(results);
	const pushPedals = [];
	results.map((result) => {
		pushPedals.push(result.item);
		console.log(pushPedals);
		return pushPedals;
	})

	const searchPedals = (ev) => {
		setQuery(ev);
	}
	

	//onChange={(ev) => searchData(ev.target.value)}
	

	return (
		<div className="search">
			<input type="text" placeholder="Search Pedals" value={query} onChange={(ev) => searchPedals(ev.target.value)}/>
       		{/*<input type="submit" value="Search" onClick={() => 
       			<Link to="/pedallist">
       				<PedalList pedals={results}/>
       			</Link>}
       			/>*/}
       		
	       		<Link to="/pedal-list/search-results" onClick={() => <Route path="/pedal-list/search-results">
	       			<SearchList pedals={pushPedals}/>
	       			 	</Route>}>
	       			Search
	       		</Link>
	      


		</div>
	)
}

export default Search;