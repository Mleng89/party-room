import React, { Component } from 'react';
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import { BrowserRouter, Routes, Route, Link, Redirect } from 'react-router-dom';

// export default class HomePage extends Component {
// 	constructor(props) {
// 		super(props);
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<BrowserRouter>
// 					<p>This is the home page</p>
// 					<Routes>
// 						<Route exact path='/'></Route>
// 						<Route path='/join' component={RoomJoinPage} />
// 						<Route path='/create' component={CreateRoomPage} />
// 					</Routes>
// 				</BrowserRouter>
// 			</div>
// 		);
// 	}
// }
export default function HomePage() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<p>This is the Home Page</p>} />
					<Route path='/join/*' element={<RoomJoinPage />} />
					<Route path='/create' element={<CreateRoomPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
