import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = `https://api.airtable.com/v0/appCDpBxh0nbdoKIN/Table%201?api_key=${apiKey}`;

const PedalList = () => {

	const [pedals, setPedals] = useState("");

	useEffect(() => {
		const fetchPedals = async () => {
			const resp = await axios.get(apiUrl);
			 setPedals(resp.data.records);
			//console.log(pedals)
		}


		fetchPedals();
	}, [])
	


	return (

		<div>
			{pedals ? pedals.map((pedal) => (
				<Link key={pedals.id} to="/pedal/:id">{pedal.fields.manufacturer}  {pedal.fields.name} <br /></Link>
			)) : "loading"}

		</div>
	)
}

export default PedalList;