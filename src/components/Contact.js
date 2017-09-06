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
					<div className="contact-box-3"></div>
					<div className="contact-box-4"></div>
					<div className="contact-box-5"></div>
					<div className="contact-box-6"></div>
					<div className="contact-box-7"></div>
					<div className="contact-box-8"></div>
				</div>
			</div>
		);
	}
}


export default Contact;
