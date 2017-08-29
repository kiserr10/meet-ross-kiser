import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Passions from './components/Passions';
import {
	BroswerRouter as Router,
	Route,
	Link
} from 'react-router-dom';


class App extends Component {
	constructor(){
		super();

	}

	render() {
		return (
			<div>
				<Header />
				<div className="main-body">
					<div className="box-1"></div>
					<div className="box-2">
						<img className="main-prof-pic" src={require('./headshot.jpg')}/>
					</div>
					<div className="box-3"></div>
					<div className="box-4"></div>
					<div className="box-5"></div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<Router>
		<div>
			<Route path='/' component={App} />
			<Route path='/about' component={About} />
			<Route path='/projects' component={Projects} />
			<Route path='/contact' component={Contact} />
			<Route path='/passions' component={Passions} />
		</div>
	</Router>

, document.getElementById('root'));
