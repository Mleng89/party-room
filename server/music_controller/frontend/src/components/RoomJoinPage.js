import React, { Component, useState } from 'react';
import { TextField, Button, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
// export default class RoomJoinPage extends Component {
// 	constructor(props) {
// 		super(props);
// 	}

// 	render() {
// 		return <p>This is the room join page</p>;
// 	}
// }

export default function RoomJoinPage(props) {
	const [error, setError] = useState('');
	const [roomCode, setRoomCode] = useState('');

	function handleTextFieldChange(e) {
		setRoomCode(e.target.value);
	}

	function roomButtonPressed() {
		const reqOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				code: roomCode,
			}),
		};
		fetch('/api/join-room', reqOptions)
			.then((res) => {
				if (res.ok) {
					console.log('res.ok', res.ok);
					// props.navigate(`/room/${roomCode}`);
					window.location.href = `/room/${roomCode}`;
				} else {
					setError(`Error: Room ${roomCode} not found.`);
					setRoomCode('');
				}
			})
			.catch((err) => console.log('ERROR:', err));
	}

	return (
		<Grid container spacing={1} alignItems='center'>
			<Grid item xs={12}>
				<Typography variant='h4' component='h4'>
					Join a Room!
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<TextField
					error={error}
					label='Code'
					placeholder='Enter a room code'
					value={roomCode}
					helperText={error}
					variant='outlined'
					onChange={handleTextFieldChange}
				/>
			</Grid>
			<Grid item xs={12}>
				<Button variant='contained' color='primary' onClick={roomButtonPressed}>
					Enter Room
				</Button>
			</Grid>
			<Grid item xs={12}>
				<Button variant='contained' color='secondary' to='/' component={Link}>
					Back
				</Button>
			</Grid>
		</Grid>
	);
}
