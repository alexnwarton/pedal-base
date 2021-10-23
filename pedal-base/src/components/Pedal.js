import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Pedal = ({ pedal, test }) => {
	const [pedalName, setPedalName] = useState("");
	console.log(pedal);
	console.log(test);
	let pedalId = useParams();
	 console.log(pedalId);
	 console.log(pedalName);

	return (
		<Card>
			<Card.Title>pedals</Card.Title>
		</Card>
	)
}

export default Pedal;