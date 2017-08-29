import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';


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

ReactDOM.render(<App />, document.getElementById('root'));
