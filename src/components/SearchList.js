import { Link } from "react-router-dom";

const SearchList = ({ pedals }) => {

	return (

		<div>
			<h1 className="searchHeader">Search Results</h1>
			{pedals ? pedals.map((pedal) => (
				<div className="searchResults" key={pedal.id}>
					<Link key={pedal.id} to={`/pedal/${pedal.id}`}>
						{pedal.fields.manufacturer}  {pedal.fields.name}
						<br />
					</Link>		
        		</div>	
			)) : ""}
		</div>
	)
}

export default SearchList;