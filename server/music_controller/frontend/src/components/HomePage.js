import React, { Component } from 'react';
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Redirect,
} from 'react-router-dom';

export default class HomePage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Router>
					<p>This is the home page</p>
					<Routes>
						<Route exact path='/'></Route>
						<Route path='/join' component={RoomJoinPage} />
						<Route path='/create' component={CreateRoomPage} />
					</Routes>
				</Router>
			</div>
		);
	}
}
