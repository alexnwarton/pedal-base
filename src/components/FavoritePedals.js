import { useEffect } from "react";
const FavoritePedals = ({ pedal }) => {
	
	useEffect(() => {
		console.log('Hi');
		
	}, [])

	const setLocalStorage = (pedal) => {
		window.localStorage.setItem("pedal", JSON.stringify({pedal}));
	}

	const getLocalStorage = (pedal) => {
		const tester = window.localStorage.getItem("pedal");
		return tester;
	}

	return (
		<div>
			<button onClick={setLocalStorage(pedal)}>Favorite</button>
			{/*<button onClick={console.log(getLocalStorage(pedal)) }>See Favs</button>*/}
		</div>


	)
}

export default FavoritePedals;