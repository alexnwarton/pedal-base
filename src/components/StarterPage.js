import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

const StarterPage = () => {

	return (
		<div>
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
			</div>

			<footer> 
		         <a className="githubLink" href="https://github.com/alexnwarton/pedal-base">
		           <img src="https://i.imgur.com/a91Qh9r.png" alt="github link"/>
		         </a>
		      </footer>

			<div className="commonEffects">
				<Accordion defaultActiveKey="1">
				  <Accordion.Item eventKey="0">
				    <Accordion.Header>Common Effects</Accordion.Header>
				    <Accordion.Body>
				    	<ul>
							<li><a href="https://en.wikipedia.org/wiki/Distortion_(music)">Distortion</a></li>
							<li><a href="https://en.wikipedia.org/wiki/Chorus_(audio_effect)">Chorus</a></li>
							<li><a href="https://en.wikipedia.org/wiki/Phaser_(effect)">Phaser</a></li>
							<li><a href="https://en.wikipedia.org/wiki/Delay_(audio_effect)">Delay</a></li>
							<li><a href="https://en.wikipedia.org/wiki/Reverb_effect">Reverb</a></li>
						</ul>
				    </Accordion.Body>
				  </Accordion.Item>
				</Accordion>
			</div>
		</div>
	)
}

export default StarterPage;