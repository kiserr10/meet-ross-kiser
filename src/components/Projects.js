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
			<div className="main-body-projects">
				<div className="projects-box-1 animated fadeInUp">
					<h1>Tech Projects:</h1>
				</div>
				<div className="projects-box-2">
					<div className="about-nav-1">
						<li className="about-home-link"><Link to='/'>Home</Link></li>
						<li className="about-projects-link"><Link to='/projects'>Tech Projects</Link></li>
						<li className="about-music-link"><Link to='/music'>Music</Link></li>
						<li className="about-contact-link"><Link to='/contact'>Contact</Link></li>
					</div>
					<div className="about-nav-2">
						<img className="main-about-logo animated flipInY" src={require('../images/rk-logo-fix.png')}/>
					</div>
				</div>
				<div className="projects-box-3"></div>
				<div className="projects-box-4"></div>
				<div className="projects-box-5"></div>
				<div className="projects-box-6"></div>
				<div className="projects-box-7"></div>
				<div className="projects-box-8"></div>
				<div className="projects-box-9"></div>
				<div className="projects-box-10"></div>
			</div>
		);
	}
}


export default Projects;
