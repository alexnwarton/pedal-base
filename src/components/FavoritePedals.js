// import { useEffect, useState } from "react";
// import FavoritesList from "./FavoritesList";
// const FavoritePedals = (pedal) => {

// 	const [favPedal, setFavPedal] = useState("");
	
// 	useEffect(() => {
// 		const getLocalStorage = (pedal) => {
// 			const favPedal = window.localStorage.getItem("pedal");
// 			console.log(favPedal);
// 			return favPedal;
// 		}
// 		setFavPedal(getLocalStorage(pedal));
		
// 	}, [])

	

// 	return (
// 		<div>
// 			{favPedal ? <FavoritesList favPedal={favPedal}/> : "loading"}
// 		</div>


// 	)
// }

// export default FavoritePedals;