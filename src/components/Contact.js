import React, { Component } from 'react';
import '../styles/App.css';
import Header2 from './Header2.js';
import{
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

class Contact extends Component {
	constructor(props){
		super(props);
		this.onMouseOver = this.onMouseOver.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
		this.state = {
			text: ''
		};
	}

	onMouseOver(){
		this.setState({
			text: 'ross'
		});
		console.log(this.state.text);
	}
	onMouseLeave(){
		this.setState({
			text: ''
		});
	}

	render(){
		return(
			<div className="contact-page">
				<Header2 />
				<div className="contact-main-body">
					<div className="contact-box-3">
						<a href="mailto:kiserr10@gmail.com"><img className="email-logo hvr-grow" src={require('../images/003-gmail-envelope.png')} /></a>
						<a href="https://www.linkedin.com/in/rosskiser/"><img className="linkedIn-logo hvr-grow" src={require('../images/005-linkedin-logo-1.png')} /></a>
						<a href="https://github.com/kiserr10"><img className="github-logo hvr-grow" src={require('../images/github-logo.png')} /></a>
						<a href="https://www.facebook.com/kiserr"><img className="facebook-logo hvr-grow" src={require('../images/002-facebook-black-social-button-circle.png')} /></a>
						<a href="https://www.instagram.com/kiserr/"><img className="insta-logo hvr-grow" src={require('../images/004-instagram-logo.png')} /></a>
						<a href="https://www.beatport.com/artist/ross-kiser/607262"><img className="beatport-logo hvr-grow" src={require('../images/beatport_2-256.png')} /></a>
						<a href="https://soundcloud.com/rosskiserofficial"><img className="soundcloud-logo hvr-grow" src={require('../images/soundcloud-logo.png')} /></a>
					</div>
					<div className="filler">
					</div>
				</div>
				<div className="contact-box-4">
					<img className="contact-texture-image" src={require('../images/creation.png')} height="600px" />
				</div>
			</div>
		);
	}
}


export default Contact;
