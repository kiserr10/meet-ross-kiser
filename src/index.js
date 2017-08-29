import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Music from './components/Music';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';


export default class App extends Component {
	constructor(){
		super();

	}

	render() {
		return (
			<div>
				<Header />
				<div className="main-body">
					<div className="box-1">
						<li className="about-link"><Link to='/about'>About Me</Link></li>
					</div>
					<div className="box-2">
						<img className="main-prof-pic" src={require('./images/headshot.jpg')}/>
					</div>
					<div className="box-3">
						<li className="projects-link"><Link to='/projects'>Tech Projects</Link></li>
					</div>
					<div className="box-4">
						<li className="music-link"><Link to='/music'>Music</Link></li>
					</div>
					<div className="box-5">
						<li className="contact-link"><Link to='/contact'>Contact</Link></li>
					</div>
					<div className="box-6">
						<img className="main-abstract-pic" src={require('./images/creation2.png')}/>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<Router>
		<div>
			<Route exact path='/' component={App} />
			<Route path='/about' component={About} />
			<Route path='/projects' component={Projects} />
			<Route path='/contact' component={Contact} />
			<Route path='/music' component={Music} />
		</div>
	</Router>

	, document.getElementById('root'));
