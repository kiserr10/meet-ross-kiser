import React, { Component } from 'react';
import '../styles/App.css';
import Header2 from './Header2.js';
import{
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

class Contact extends Component {
	render(){
		return(
			<div>
				<Header2 />
				<div className="contact-main-body">
					<div className="contact-box-3">
						<a href="mailto:kiserr10@gmail.com"><img className="email-logo" src={require('../images/003-gmail-envelope.png')} height="65px" /></a>
						<img className="linkedIn-logo" src={require('../images/005-linkedin-logo-1.png')} height="65px" />
						<img className="github-logo" src={require('../images/github-logo.png')} height="65px" />
						<img className="facebook-logo" src={require('../images/002-facebook-black-social-button-circle.png')} height="65px" />
						<img className="insta-logo" src={require('../images/004-instagram-logo.png')} height="65px" />
						<img className="beatport-logo" src={require('../images/beatport_2-256.png')} height="65px" />
						<img className="soundcloud-logo" src={require('../images/soundcloud-logo.png')} height="65px" />
					</div>
					<div className="contact-box-4">

					</div>
				</div>
			</div>
		);
	}
}


export default Contact;
