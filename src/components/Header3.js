import React, { Component } from 'react';
import '../styles/App.css';
import{
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

class Header3 extends Component {
	render(){
		return(
			<div className="contact-header">
				<div className="about-box-1 animated fadeInUp">
					<h1>Music Production</h1>
				</div>
				<div className="contact-box-2">
					<div className="contact-nav">
						<li className="about-home-link"><Link to='/'>Home</Link></li>
						<li className="about-projects-link"><Link to='/about'>About Me</Link></li>
						<li className="about-music-link"><Link to='/projects'>Tech Projects</Link></li>
						<li className="about-contact-link"><Link to='/contact'>Contact</Link></li>
					</div>
					<div className="contact-main-logo">
						<img className="main-about-logo animated zoomIn" src={require('../images/rk-logo-fix.png')}/>
					</div>
				</div>
			</div>
		);
	}
}


export default Header3;
