import { Link } from "react-router-dom";

const PedalList = ({ pedals }) => {

	return (

		<div>
			{pedals ? pedals.map((pedal) => (
				<div key={pedal.id}>
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