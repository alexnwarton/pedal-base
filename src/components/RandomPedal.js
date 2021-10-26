import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";


const RandomPedal = ({ pedals, setPedals }) => {
	const [pedalName, setPedalName] = useState("");
	const [pedalManufacturer, setPedalManufacturer] = useState("");
	const [pedalType, setPedalType] = useState("");
	const [pedalImage, setPedalImage] = useState("");
	const [pedalDescription, setPedalDescription] = useState("");
	const [pedalLink, setPedalLink] = useState("");
	 

	const getRandomPedal = (pedals) => {
		let randomNum = Math.floor(Math.random() * pedals.length - 1);
		let selectedPedal = pedals[randomNum];
		return selectedPedal;
	}

	// const memoisedPedals = useMemo(() => {
 //      setPedals(pedals);
 //      getRandomPedal(pedals);
 //    }, [pedals])


	useEffect(() => {
		let selectedRandom = getRandomPedal(pedals);
		setPedalName(selectedRandom.fields.name);
		setPedalManufacturer(selectedRandom.fields.manufacturer);
		setPedalType(selectedRandom.fields.type);
		setPedalImage(selectedRandom.fields.image);
		setPedalDescription(selectedRandom.fields.description);
		setPedalLink(selectedRandom.fields.link);
	}, [pedals])

	return (
		<Card> {pedals ? 

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

export default RandomPedal;