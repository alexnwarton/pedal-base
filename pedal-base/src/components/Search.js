import Fuse from "fuse.js";
//import PedalList from "PedalList.js";
import { useState } from "react";

const Search = ({ pedals }) => {
	// const [data, setData] = useState(pedals);

	console.log(pedals);

	const fuse = new Fuse(pedals, {
		keys: [
		"id", 
		"fields.name",
		"fields.manufacturer",
		"fields.type"
		]
	})

	const test_search = fuse.search("fuzz");

	console.log(test_search);


	

	//onChange={(ev) => searchData(ev.target.value)}
	

	return (
		<div className="search">
			<input type="text" placeholder="Search Pedals" />
       		<input type="submit" value="Search"/>



		</div>
	)
}

export default Search;