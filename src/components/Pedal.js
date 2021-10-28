import axios from "axios";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useEffect, useState  } from "react";
import FavoritePedals from "./FavoritePedals.js";

const apiKey = process.env.REACT_APP_API_KEY;

const Pedal = () => {
	const [pedal, setPedal] = useState([]);
	const [pedalName, setPedalName] = useState("");
	const [pedalManufacturer, setPedalManufacturer] = useState("");
	const [pedalType, setPedalType] = useState("");
	const [pedalImage, setPedalImage] = useState(""); 
	const [pedalDescription, setPedalDescription] = useState("");
	const [pedalLink, setPedalLink] = useState("");
	const [pedalModel, setPedalModel] = useState("");
	let pedalId = useParams();

	const apiUrl = `https://api.airtable.com/v0/appCDpBxh0nbdoKIN/Pedals/${pedalId.id}/?api_key=${apiKey}`;

	
	useEffect(() => {
		const fetchPedals = async () => {
			const resp = await axios.get(apiUrl);
			setPedal(resp.data.fields);			
		}
		fetchPedals();
		
	}, [apiUrl]);

	useEffect(() => {
		const populatePedal = (pedal) => {
			setPedalName(pedal.name);
			setPedalManufacturer(pedal.manufacturer);
			setPedalType(pedal.type);
			setPedalImage(pedal.image);
			setPedalDescription(pedal.description);
			setPedalLink(pedal.link);
			if(pedal.model) {
				setPedalModel(pedal.model);
			}

			return pedalName;
		}

		populatePedal(pedal);
		

	}, [pedal, pedalName])
	
	


	return (
		<Card> {pedal ? 

			<Card.Body>
				<Card.Title>{pedalManufacturer} {pedalModel} {pedalName}</Card.Title>
				<Card.Subtitle>Type: {pedalType}</Card.Subtitle>
				<Card.Text>{pedalDescription}</Card.Text>
				<br />
				<div className="cardImageContainer">
					<Card.Img variant="right" src={pedalImage} alt={`${pedalManufacturer} ${pedalName}`}/>
				</div>
				<br />
				<Card.Link href={pedalLink}>See More</Card.Link>	
			</Card.Body> : "loading"}
			
			<FavoritePedals pedal={pedal} />
		</Card>
	)
}

export default Pedal;