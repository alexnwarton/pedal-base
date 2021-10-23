import axios from "axios";
import Pedal from "./Pedal.js";
import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = `https://api.airtable.com/v0/appCDpBxh0nbdoKIN/Pedals?api_key=${apiKey}`;

const PedalList = () => {

	const [pedals, setPedals] = useState([]);

	useEffect(() => {
		const fetchPedals = async () => {
			const resp = await axios.get(apiUrl);
			setPedals(resp.data.records);	
		}
		fetchPedals();
	}, []);

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