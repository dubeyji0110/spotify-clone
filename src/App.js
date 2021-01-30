import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import Login from "./Components/Login";
import { getTokenFromUrl } from "./spotify";

const spotify = new SpotifyWebApi();

function App() {
	const [token, setToken] = useState(null);

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";

		const _token = hash.access_token;

		if (_token) {
			setToken(_token);
			spotify.setAccessToken(_token);
			spotify.getMe().then((user) => {
				console.log(user);
			});
		}
	}, []);

	return (
		<div className='app'>
			{token ? (
				// <Player />
				<h1>Hi token</h1>
			) : (
				<Login />
			)}
		</div>
	);
}

export default App;
