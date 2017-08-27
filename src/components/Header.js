import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
	render(){
		return(
			<div className="header-bar">
				<h1 className="main-title">Ross Kiser</h1>
				<div className="main-links">
					<ul>
						<li className="about-link">About Me</li>
						<li className="projects-link">Projects</li>
						<li className="contact-link">Contact</li>
					</ul>
				</div>
			</div>
		);
	}
}


export default Header;
