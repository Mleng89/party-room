import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// export default class Room extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			votesToSkip: 2,
// 			guestCanPause: false,
// 			isHost: false,
// 		};
// 		this.roomCode = this.props.match.params.roomCode;
// 	}

// 	render() {
// 		console.log('blah blah', this.props);
// 		return (
// 			<div>
// 				{/* <h3>{this.roomCode}</h3> */}
// 				<p>Votes: {this.state.votesToSkip}</p>
// 				<p>Guest Can Pause: {this.state.guestCanPause}</p>
// 				<p>Host: {this.state.isHost}</p>
// 			</div>
// 		);
// 	}
// }

export default function Room(props) {
	const [votesToSkip, setVotesToSkip] = useState(2);
	const [guestCanPause, setGuestCanPause] = useState(false);
	const [isHost, setIsHost] = useState(false);

	const { roomCode } = useParams();
	console.log('the props', props);

	return (
		<div>
			<h3>{roomCode}</h3>
			<p>Votes: {String(votesToSkip)}</p>
			<p>Guest Can Pause: {String(guestCanPause) === 'true' ? 'Yes' : 'No'}</p>
			<p>Host: {String(isHost) === 'true' ? 'Yes' : 'No'}</p>
		</div>
	);
}
