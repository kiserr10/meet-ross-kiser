import React, { Component } from 'react';
import '../styles/App.css';
import{
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

class Projects extends Component {
	render(){
		return(
			<div className="main-body-projects container">
				<div className="projects-box-1 animated fadeInUp">
					<h1>Tech Projects:</h1>
				</div>
				<div className="projects-box-2">
					<div className="about-nav-1">
						<li className="about-home-link"><Link to='/'>Home</Link></li>
						<li className="about-projects-link"><Link to='/about'>About Me</Link></li>
						<li className="about-music-link"><Link to='/music'>Music</Link></li>
						<li className="about-contact-link"><Link to='/contact'>Contact Me</Link></li>
					</div>
					<div className="about-nav-2">
						<img className="main-about-logo animated flipInY" src={require('../images/rk-logo-fix.png')} />
					</div>
				</div>

				<div className="projects-box-9">
					<div className="ftm-screen-clip-container">
						<a href="https://farmtomarket.solutions"><img className="ftm-screenshot hvr-grow" src={require('../images/ftm-screenshot.png')} /></a>
					</div>
				</div>

				<div className="projects-box-10">
					<h1 className="ftm-header">Farm To Market</h1>
					<p className="project-bio-text">
						An intuitive and interactive platform for users, farmers, and markets to connect and exchange information
					</p>
					<p className="project-bio-text">GitHub Link:  https://github.com/kiserr10/ftm-capstone-CLIENT</p>
					<p className="project-bio-text">Tech Used:  React, Chart.js, Express, postgreSQL, Knex.js</p>
					<hr />
				</div>



				<div className="projects-box-3">
					<div className="knetic-screenshot-container">
						<a href="https://knetic-768b4.firebaseapp.com"><img className="knetic-screenshot hvr-grow" src={require('../images/knetic-screen-image.png')} /></a>
					</div>
				</div>
				<div className="projects-box-4">
					<h1 className="knetic-header">KNETIC</h1>
					<p className="project-bio-text">
					A desktop app, and interactive synthesizer where users can create their own sound patches or choose from a list of preset sounds.  Users can also produce sounds by using either the computer keyboard, the digital interface, or by plugging in a midi keyboard.
					</p>
					<p className="project-bio-text">GitHub Link: https://github.com/KNETIC-KRPF</p>
					<p className="project-bio-text">Tech Used:  React, MongoDB, Monk, Web Audio API, Web MIDI API, Tuna.js, Electron</p>
					<hr />
				</div>
				<div className="projects-box-5">
					<div className="foris-screenshot-container">
						<a href="https://foris-adventures.firebaseapp.com"><img className="foris-screenshot hvr-grow" src={require('../images/foris-screen-clip.png')} /></a>
					</div>
				</div>
				<div className="projects-box-6">
					<h1 className="foris-header">Foris</h1>
					<p className="project-bio-text">
						An app for finding outdoor activity events near you!  Users can join or create events and connect with other users or attendees going on the trip
					</p>
					<p className="project-bio-text">GitHub Link:  https://github.com/mega-Foris</p>
					<p className="project-bio-text">Tech Used:  Express, postgreSQL, Knex.js, jQuery, SASS, Handlebars</p>
					<hr />
				</div>
				<div className="projects-box-7">
					<div className="cutting-board-screen-clip-container">
						<a href="https://cutting-board-app.firebaseapp.com"><img className="cutting-board-screenshot hvr-grow" src={require('../images/cutting-board-screen-clip.png')} /></a>
					</div>
				</div>
				<div className="projects-box-8">
					<h1 className="cutting-board-header">Cutting Board</h1>
					<p className="project-bio-text">
						An app where users can browse recipes by meal title or ingredient list and get that specific recipes ingredients and cooking procedures
					</p>
					<p className="project-bio-text">GitHub Link:  https://github.com/kiserr10/cutting-board-q1project</p>
					<p className="project-bio-text">Tech Used:  HTML, CSS3, jQuery, Javascript</p>
					<hr />
				</div>
			</div>
		);
	}
}


export default Projects;
