import React, { Component } from 'react';
import '../App.css';
import{
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

class Header extends Component {
	render(){
		return(
			<div className="header-bar">
				<div className="title-box">
					<h1 className="main-title">Ross Kiser</h1>
				</div>
				<div className="main-links"></div>
				<div className="left-header-box"></div>
			</div>
		);
	}
}


export default Header;
