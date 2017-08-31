import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/animate.css';
import{
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

class Header extends Component {
	render(){
		return(
			<div className="header-bar">
				<div className="left-header-box">
					<img className="left-bracket" src={require('../images/left-bracket.png')}/>
				</div>
				<div className="main-links">
					<h1 className="main-title">Ross Kiser</h1>
				</div>
				<div className="right-header-box">
					<img className="right-bracket" src={require('../images/right-bracket.png')}/>
				</div>
				<div className="sub-title-box animated fadeInUp">
					<h5 className="sub-title">
						<span className="f">F</span>
						<span className="u">u</span>
						<span className="l">l</span>
						<span className="l">l</span>
						<span> </span>
						<span className="s">S</span>
						<span className="t">t</span>
						<span className="a">a</span>
						<span className="c">c</span>
						<span className="k">k</span>
						<span> </span>
						<span className="d">D</span>
						<span className="e">e</span>
						<span className="v">v</span>
						<span className="e">e</span>
						<span className="l">l</span>
						<span className="o">o</span>
						<span className="p">p</span>
						<span className="e">e</span>
						<span className="r">r</span>
					</h5>
				</div>
			</div>
		);
	}
}


export default Header;
