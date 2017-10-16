import React, { Component } from 'react';
import '../styles/App.css';
import Header3 from './Header3.js';
import{
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

class Music extends Component {
	render(){
		return(
			<div>
				<Header3 />
				<div className="music-main-body">
					<h1>UNDER CONSTRUCTION</h1>
					<h3>Thank You For Your Patience!</h3>
				</div>
			</div>
		);
	}
}


export default Music;
