import RandomPedal from "./RandomPedal.js";
import Pedal from "./Pedal.js";
import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";

const PedalList = ({ pedals }) => {

	return (

		<div>
			{pedals ? pedals.map((pedal) => (
				<div>
					<Link key={pedal.id} to={`/pedal/${pedal.id}`}>
						{pedal.fields.manufacturer}  {pedal.fields.name}
						<br />
					</Link>		
        		</div>	
			)) : "loading"}
		</div>
	)
}

export default PedalList;