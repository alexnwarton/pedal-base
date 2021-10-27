import { Link } from "react-router-dom";

const PedalList = ({ pedals }) => {

	return (

		<div>
		<h1 className="listHeader">All Pedals</h1>
			{pedals ? pedals.map((pedal) => (
				<div className="listResults" key={pedal.id}>
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