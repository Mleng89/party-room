import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
	Button,
	Grid,
	Typography,
	TextField,
	FormHelperText,
	FormControl,
	Radio,
	RadioGroup,
	FormControlLabel,
} from '@material-ui/core';
import { withRouter } from './hook/withRouter';
class CreateRoomPage extends Component {
	defaultVotes = 2;
	constructor(props) {
		super(props);
		this.state = {
			guestCanPause: true,
			votesToSkip: this.defaultVotes,
		};
	}
	handleVotesChanged = (e) => {
		this.setState({ votesToSkip: e.target.value });
	};
	handleGuestCanPauseChange = (e) => {
		this.setState({ guestCanPause: e.target.value === 'true' ? true : false });
	};
	handleRoomButtonPressed = () => {
		const reqOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			// payload
			body: JSON.stringify({
				votes_to_skip: this.state.votesToSkip,
				guest_can_pause: this.state.guestCanPause,
			}),
		};
		fetch('/api/create-room', reqOptions)
			.then((res) => res.json())
			.then((data) => this.props.navigate('/room/' + data.code));
	};

	render() {
		return (
			<Grid container spacing={1}>
				{/* 12 is maximum number */}
				<Grid item xs={12} align='center'>
					<Typography component='h4' variant='h4'>
						Create A Room
					</Typography>
				</Grid>
				<Grid item xs={12} align='center'>
					<FormControl component='fieldset'>
						<FormHelperText>
							<div align='center'>Guest Control of Playback State</div>
						</FormHelperText>
						<RadioGroup
							row
							defaultValue='true'
							onChange={this.handleGuestCanPauseChange}
						>
							<FormControlLabel
								value='true'
								control={<Radio color='primary' />}
								label='Play/Pause'
								labelPlacement='bottom'
							/>
							<FormControlLabel
								value='false'
								control={<Radio color='secondary' />}
								label='No Control'
								labelPlacement='bottom'
							/>
						</RadioGroup>
					</FormControl>
				</Grid>
				<Grid item xs={12} align='center'>
					<FormControl>
						<TextField
							required={true}
							type='number'
							onChange={this.handleVotesChanged}
							defaultValue={this.defaultVotes}
							inputProps={{
								min: 1,
								style: { textAlign: 'center' },
							}}
						/>
						<FormHelperText>
							<div align='center'>Votes Required To Skip Song.</div>
						</FormHelperText>
					</FormControl>
				</Grid>
				<Grid item xs={12} align='center'>
					<Button
						color='primary'
						variant='contained'
						onClick={this.handleRoomButtonPressed}
					>
						Create a Room
					</Button>
				</Grid>
				<Grid item xs={12} align='center'>
					<Button color='secondary' variant='contained' to='/' component={Link}>
						Back
					</Button>
				</Grid>
			</Grid>
		);
	}
}

// export default function CreateRoomPage() {
// 	const [defaultVotes, setDefaultVotes] = useState('');
// 	const [guestCanPause, setGuestCanPause] = useState(true);
// 	//Grid aligns horizontal or vertical with Material UI
// 	return (
// 		<Grid container spacing={1}>
// 			<h1>Hello world/Create Room Page</h1>
// 		</Grid>
// 	);
// }

export default withRouter(CreateRoomPage);
