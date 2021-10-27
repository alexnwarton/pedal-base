import axios from "axios";
import { useState } from "react";
import { Redirect } from "react-router-dom";

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = `https://api.airtable.com/v0/appCDpBxh0nbdoKIN/Pedals?api_key=${apiKey}`;

const PedalForm = () => {
	
	const [name, setName] = useState("");
	const [manufacturer, setManufacturer] = useState("");
	const [type, setType] = useState("");
	const [image, setImage] = useState("");
	const [description, setDescription] = useState("");
	const [link, setLink] = useState("");
	const [toggleFetch, setToggleFetch] = useState(false);
	const [redirectList, setRedirectList] = useState(false);

	const addPedal = async (ev) => {
		ev.preventDefault();

		const newPedal = {
			records: [
				{
					fields: {
						name,
						manufacturer,
						type,
						image,
						description,
						link,
					}
				}
			]
		}
		await axios.post(apiUrl, newPedal);
		setToggleFetch(!toggleFetch);
		setRedirectList(true);
	}

	if(redirectList) {
		return <Redirect to="/"/>
	}

	return (
		<form onSubmit={addPedal}>
			<h1>Pedal Name:</h1>
			<input type="text" placeholder="Pedal Name" onChange={(ev) => setName(ev.target.value)}/>
			<br />
			<br />
			<h1>Pedal Manufacturer:</h1>
			<input type="text" placeholder="Pedal Manufacturer" onChange={(ev) => setManufacturer(ev.target.value)}/>
			<br />
			<br />
			<h1>Pedal Type:</h1>
			<input type="text" placeholder="Pedal Type" onChange={(ev) => setType(ev.target.value)}/>
			<br />
			<br />
			<h1>Pedal Image:</h1>
			<input type="url" placeholder="Pedal Image" onChange={(ev) => setImage(ev.target.value)}/>
			<br />
			<br />
			<h1>Pedal Description:</h1>
			<input type="text" placeholder="Pedal Description" onChange={(ev) => setDescription(ev.target.value)}/>
			<br />
			<br />
			<h1>Pedal Link:</h1>
			<input type="url" placeholder="Pedal Link" onChange={(ev) => setLink(ev.target.value)}/>
			<br />
			<br />
			<input className="formSubmit" type="submit" value="Add Pedal"/>

		</form>

	)
}

export default PedalForm;