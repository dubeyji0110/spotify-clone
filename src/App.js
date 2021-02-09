import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./StateProvider";
import { getTokenFromUrl } from "./spotify";
import Player from "./Components/Player";
import Login from "./Components/Login";
import "./App.css";

const spotify = new SpotifyWebApi();

function App() {
	const [{ token }, dispatch] = useStateValue();

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";

		const _token = hash.access_token;

		if (_token) {
			spotify.setAccessToken(_token);
			dispatch({
				type: "SET_TOKEN",
				token: _token,
			});
			spotify.getMe().then((user) => {
				dispatch({
					type: "SET_USER",
					user,
				});
			});
			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: "SET_PLAYLISTS",
					playlists,
				});
			});
			spotify.getPlaylist("37i9dQZEVXcE03IHN9aLMH").then((res) => {
				dispatch({
					type: "SET_DISCOVER_WEEKLY",
					discover_weekly: res,
				});
			});
			spotify.getMyTopArtists().then((res) =>
				dispatch({
					type: "SET_TOP_ARTISTS",
					top_artists: res,
				})
			);
			dispatch({
				type: "SET_SPOTIFY",
				spotify,
			});
		}
	}, [token, dispatch]);

	return (
		<div className='app'>
			{token ? <Player spotify={spotify} /> : <Login />}
		</div>
	);
}

export default App;
