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
				</div>
				<div className="music-background-splash">
					<img className="music-image" src={require('../images/music-gear.png')} height="700px"/>
				</div>
			</div>
		);
	}
}


export default Music;
