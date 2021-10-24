import axios from "axios";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useEffect, useState  } from "react";

const apiKey = process.env.REACT_APP_API_KEY;

const Pedal = () => {
	const [pedal, setPedal] = useState([]);
	const [pedalName, setPedalName] = useState("");
	const [pedalManufacturer, setPedalManufacturer] = useState("");
	const [pedalType, setPedalType] = useState("");
	const [pedalImage, setPedalImage] = useState("");
	const [pedalDescription, setPedalDescription] = useState("");
	const [pedalLink, setPedalLink] = useState("");
	let pedalId = useParams();

	const apiUrl = `https://api.airtable.com/v0/appCDpBxh0nbdoKIN/Pedals/${pedalId.id}/?api_key=${apiKey}`;

	
	useEffect(() => {
		const fetchPedals = async () => {
			const resp = await axios.get(apiUrl);
			setPedal(resp.data.fields);			
		}
		fetchPedals();
		
	}, []);

	useEffect(() => {
		const populatePedal = (pedal) => {
			setPedalName(pedal.name);
			setPedalManufacturer(pedal.manufacturer);
			setPedalType(pedal.type);
			setPedalImage(pedal.image);
			setPedalDescription(pedal.description);
			setPedalLink(pedal.link);

			return pedalName;
		}

		populatePedal(pedal);
		

	}, [pedal])
	
	


	return (
		<Card> {pedal ? 

			<Card.Body>
				<Card.Title>{pedalManufacturer} {pedalName}</Card.Title>
				<Card.Subtitle>{pedalType}</Card.Subtitle>
				<Card.Img src={pedalImage} alt={`${pedalManufacturer} ${pedalName}`}/>
				<Card.Text>{pedalDescription}</Card.Text>
				<Card.Link href={pedalLink}>See More</Card.Link>	
			</Card.Body> : "loading"}
			
		
		</Card>
	)
}

export default Pedal;