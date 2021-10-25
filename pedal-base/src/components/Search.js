// import SearchList from "./SearchList.js";
// import { useState } from "react";
// import { Link, Route } from "react-router-dom";

// const Search = ({ pedals }) => {
// 	//  const [query, setQuery] = useState("");

// 	// //console.log(pedals);

// 	// const fuse = new Fuse(pedals, {
// 	// 	keys: [
// 	// 	"id", 
// 	// 	"fields.name",
// 	// 	"fields.manufacturer",
// 	// 	"fields.type"
// 	// 	],
// 	// 	includeScore: true,
// 	// })

// 	// const results = fuse.search(query);

// 	// const pushPedals = [];
// 	// results.map((result) => {
// 	// 	pushPedals.push(result.item);
// 	// })

// 	// console.log(pushPedals);

// 	// const searchPedals = (ev) => {
// 	// 	setQuery(ev);
// 	// }
	

// 	return (
// 		<div className="search">
// 			<input type="text" placeholder="Search Pedals" value={query} onChange={(ev) => searchPedals(ev.target.value)}/>
       		

//        		{/*<input type="submit" value="Search" onClick={() => 
       			
// 		       			<SearchList />
// 		       }
//        			/>*/}
       		
// 	       		<Link to="/pedal-list/search-results" pedals = {pushPedals}>
// 	       		< Route path="/pedal-list/search-results" exact>
//             	<SearchList pedals={pedals}/>
//         	</Route>
// 	       			Search
// 	       		</Link>
	      


// 		</div>
// 	)
// }

// export default Search;