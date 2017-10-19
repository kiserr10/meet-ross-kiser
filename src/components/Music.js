import React, { Component } from 'react';
import '../styles/App.css';
import Header3 from './Header3.js';
import SpotifyPlayer from 'react-spotify-player';


const size = {
	width: '100%',
	height: 400,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'


class Music extends Component {
	render(){
		return(
			<div>
				<Header3 />
				<div className="music-main-body">
					<div className="music-player-1">
						<SpotifyPlayer
							uri="spotify:artist:0g3xKT5GqkAimVN7eec8G9"
							size={size}
							view={view}
							theme={theme}
						/>
					</div>
					<div className="music-player-2">
						<SpotifyPlayer
							uri="spotify:artist:4Yl49Hycdu2g5BknbKsI6m"
							size={size}
							view={view}
							theme={theme}
						/>
					</div>
				</div>
				<div className="music-background-splash">
					<img className="music-image" src={require('../images/music-gear.png')} height="700px"/>
				</div>
			</div>
		);
	}
}


export default Music;
