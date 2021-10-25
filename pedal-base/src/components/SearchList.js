import Pedal from "./Pedal.js";
import { Link, Route } from "react-router-dom";

const PedalList = ({ pedals }) => {
	console.log(pedals);
	return (

		<div>
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