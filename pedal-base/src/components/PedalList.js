import axios from "axios";
import Pedal from "./Pedal.js";
import { useEffect, useState } from "react";
import { Link, Route, useParams } from "react-router-dom";

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = `https://api.airtable.com/v0/appCDpBxh0nbdoKIN/Table%201?api_key=${apiKey}`;

const PedalList = () => {

	const [pedals, setPedals] = useState("");
	 const [pedalName, setPedalName] = useState("");
	// const [pedalManufacturer, setPedalManufacturer] = useState("");
	// const [pedalType, setPedalType] = useState("");
	// const [pedalImage, setPedalImage] = useState("");
	// const [pedalDescription, setPedalDescription] = useState("");
	// const [pedalLink, setPedalLink] = useState("");
	let pedalId = useParams();
	const [test, setTest] = useState([]);

	useEffect(() => {
		const fetchPedals = async () => {
			const resp = await axios.get(apiUrl);
			setPedals(resp.data.records);
		}


		fetchPedals();
	}, [])
	
	
	const clickPedal = (ev) => {
		let pedalId = ev;
		//console.log(pedalId);
		pedals.filter((pedal) => {
			if(`/pedal/${pedal.id}` === pedalId){
				
					setPedalName(pedal.fields.name);
				// 	console.log(pedalName);
			
				
				

				// setPedalManufacturer(pedal.fields.manufacturer);
				// setPedalType(pedal.fields.type);
				// setPedalImage(pedal.fields.image);
				// setPedalDescription(pedal.fields.description);
				// setPedalLink(pedal.fields.link);
				
				// //console.log(pedalName);

			setPedals(pedal);
			console.log(pedal.fields.name);
			console.log(pedalName);
			return pedalName;
			 }
		})
			
		
	}
//clickPedal(ev.currentTarget.getAttribute("href")
	


	return (

		<div>
			{pedals ? pedals.map((pedal) => (
				<div>
					<Link key={pedal.id} to={`/pedal/${pedal.id}`} onClick={(ev) => clickPedal(ev.currentTarget.getAttribute("href"))}>
						{pedal.fields.manufacturer}  {pedal.fields.name}
						<br />
						<Route path="/pedal/:id" exact>
							{`/pedal/${pedal.id}` === pedalId ? setTest(pedal.fields.name) : "error"}
							<Pedal key={pedal.id}
			          			pedal={pedalName}
			          			test={test}
			          			
		          			/>

        				</Route> 
					</Link>
					
					
        		</div>
				
			)) : "loading"}

			

		</div>
	)
}

export default PedalList;