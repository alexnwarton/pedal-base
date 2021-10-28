import { Link } from "react-router-dom";
import Distortion from "./Distortion.js";

const StarterPage = () => {
	return (

		<div className="starterPage">
			<h1 className="startHeader">About Pedal Base</h1>
			<h3>What is Pedal Base?</h3>
			<p>Pedal Base is a collection of popular effects pedals. Users can search for pedals to find descriptions of functionality and sound. They can also add their own pedals to the collection.</p>
			<h3>What is an "effects pedal"?</h3>
			<p>An effects pedal is an electronic device that takes an audio signal and processes it to create different sounds. Think the crunchy tone of classic rock & roll, or the dreamy lo-fi twang of a shoegaze song.</p>
			<h3>How can you keep track of all the pedals out there?</h3>
			<p>There are many different types of effects pedals in the market today. While Pedal Base has some of the most popular ones, there are always creators large and small adding new pedals to the soundscape. That's where you come in! Pedal Base is an interactive site that allows you to add your favorite pedal to the database.
			<br />
			<br />
			<Link to="/add-pedal" className="starterLink"> Get started Here</Link></p>

			<div className="commonEffects">
				<ul>Common Effects
					<li><Link to="/about/distortion">Distortion</Link></li>
					
					<li><Link to="/about/overdrive">Overdrive</Link></li>
					
					<li><Link to="/about/fuzz">Fuzz</Link></li>
				
					<li><Link to="/about/chorus">Chorus</Link></li>
					
					<li><Link to="/about/phaser">Phaser</Link></li>
					
					<li><Link to="/about/delay">Delay</Link></li>
					
					<li><Link to="/about/reverb">Reverb</Link></li>
					
				</ul>
			</div>
		</div>
	)
}

export default StarterPage;