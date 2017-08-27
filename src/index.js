import React, { Component } from 'react';
import Header from './components/Header';
import ReactDOM from 'react-dom';

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
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
