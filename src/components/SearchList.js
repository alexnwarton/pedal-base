import { Link } from "react-router-dom";
//import { useEffect, useState } from "react";

const PedalList = ({ pedals }) => {
	// const [searchPedals, setSearchPedals] = useState(localStorage.getItem("pedals") === true)
	// useEffect(() => {
	// 	localStorage.setItem("pedals", pedals);
	// }, [searchPedals])
	
	return (

		<div>
			<h1>Pedals!</h1>
			{pedals ? pedals.map((pedal) => (
				<div>
					<Link key={pedal.id} to={`/pedal/${pedal.id}`}>
						{pedal.fields.manufacturer}  {pedal.fields.name}
						<br />
					</Link>		
        		</div>	
			)) : ""}
		</div>
	)
}

export default PedalList;