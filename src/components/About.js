import React, { Component } from 'react';
import '../styles/App.css';
import{
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

class About extends Component {
	render(){
		return(
			<div className="about-main">
				<div className="about-box-1 animated fadeInUp">
					<h1>About Me:</h1>
				</div>
				<div className="about-box-2">
					<div className="about-nav-1">
						<li className="about-home-link"><Link to='/'>Home</Link></li>
						<li className="about-projects-link"><Link to='/projects'>Tech Projects</Link></li>
						<li className="about-music-link"><Link to='/music'>Music</Link></li>
						<li className="about-contact-link"><Link to='/contact'>Contact</Link></li>
					</div>
					<div className="about-nav-2">
						<img className="main-about-logo animated zoomIn" src={require('../images/rk-logo-fix.png')}/>
					</div>
				</div>
				<div className="about-box-3">
					<div className="my-bio">
						<p>	Long before I became a web developer, technology has been central to my creative practice. I self-taught my way into audio engineering and started my own electronic music record label which has gone on to sign several internationally acclaimed acts. After developing this part of my life for over half a decade, I encountered the world of code. A deeper dimension of technology with which I instantly clicked, it was the perfect alignment of design, creativity, and problem solving that I had been seeking. In 2017, I decided to dive in fully and immerse myself in the culture of development by attending Galvanize. I hope to use these new skillsets to have a creative avenue to influence the worlds of my other passions, such as music, rock climbing, and food.
						</p>
					</div>
				</div>
				<div className="about-box-4">
					<img className="main-prof-pic" src={require('../images/headshot.jpg')}/>
				</div>
				<div className="about-box-5"></div>
			</div>
		);
	}
}


export default About;
