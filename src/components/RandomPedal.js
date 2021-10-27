import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";


const RandomPedal = ({ pedals }) => {
	const [pedalName, setPedalName] = useState("");
	const [pedalManufacturer, setPedalManufacturer] = useState("");
	const [pedalType, setPedalType] = useState("");
	const [pedalImage, setPedalImage] = useState("");
	const [pedalDescription, setPedalDescription] = useState("");
	const [pedalLink, setPedalLink] = useState("");

	useEffect(() => {
		const getRandomPedal = (pedals) => {
		let randomNum = Math.floor(Math.random() * pedals.length - 1);
		let selectedPedal = pedals[randomNum];
		return selectedPedal;
	}
		if(pedals.length > 0 ){
			let selectedRandom = getRandomPedal(pedals);
			setPedalName(selectedRandom.fields.name);
			setPedalManufacturer(selectedRandom.fields.manufacturer);
			setPedalType(selectedRandom.fields.type);
			setPedalImage(selectedRandom.fields.image);
			setPedalDescription(selectedRandom.fields.description);
			setPedalLink(selectedRandom.fields.link);
		}
	}, [pedals])

	
	const getAnotherPedal = (pedals) => {
		const getRandomPedal = (pedals) => {
			let randomNum = Math.floor(Math.random() * pedals.length - 1);
			let selectedPedal = pedals[randomNum];
			return selectedPedal;
		}
		if(pedals.length > 0 ){
			let selectedRandom = getRandomPedal(pedals);
			setPedalName(selectedRandom.fields.name);
			setPedalManufacturer(selectedRandom.fields.manufacturer);
			setPedalType(selectedRandom.fields.type);
			setPedalImage(selectedRandom.fields.image);
			setPedalDescription(selectedRandom.fields.description);
			setPedalLink(selectedRandom.fields.link);
		}
	}
	

	
	return (
		<Card> {pedals ? 

			<Card.Body>
				<Card.Title>{pedalManufacturer} {pedalName}</Card.Title>
				<Card.Subtitle>{pedalType}</Card.Subtitle>
				<Card.Text>{pedalDescription}</Card.Text>
				<Card.Img variant="right" style={{ width: "16rem" }} src={pedalImage} alt={`${pedalManufacturer} ${pedalName}`}/>
				<Card.Link href={pedalLink}>See More</Card.Link>
				<button onClick={() => getAnotherPedal(pedals)}>Get another pedal</button>	
			</Card.Body> : "loading"}
				
		
		</Card>


	)
}

export default RandomPedal;