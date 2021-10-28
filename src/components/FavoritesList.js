// import { Link } from "react-router-dom";
// import { useEffect } from "react";

// const FavoritesList = ({ pedals, favPedal }) => {

// 	const favorites = [];
// 	const favoriteMatch = (pedals, favPedal) => {
// 			pedals.filter((pedal) => {
// 				if(pedal === favPedal){
// 					favorites.push(pedal);
// 					console.log(favorites);
// 				return favorites;
// 				}

// 			})
// 		}
// 	useEffect(() => {
// 		console.log(favoriteMatch(pedals, favPedal));

// 	}, [])

	


// 	return (

// 		<div className="pedalList">
// 			<h1 className="listHeader">Favorite Pedals</h1>
// 			{favorites ? favorites.map((pedal) => (
// 				<div className="listResults" key={pedal.id}>
// 					<Link key={pedal.id} to={`/pedal/${pedal.id}`}>
// 						{pedal.fields.manufacturer}  {pedal.fields.name}
// 						<br />
// 					</Link>		
//         		</div>	
// 			)) : ""}
// 		</div>
// 	)
// }

// export default FavoritesList;