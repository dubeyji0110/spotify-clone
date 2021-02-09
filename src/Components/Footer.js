import { Grid, IconButton, Slider } from "@material-ui/core";
import {
	PauseCircleOutline,
	PlayCircleOutline,
	PlaylistPlay,
	Repeat,
	Shuffle,
	SkipNext,
	SkipPrevious,
	VolumeDown,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import "./Footer.css";

function Footer({ spotify }) {
	const [volume, setVolume] = useState(null);
	const [{ token, item, playing }, dispatch] = useStateValue();

	useEffect(() => {
		spotify.getMyCurrentPlaybackState().then((r) => {
			dispatch({
				type: "SET_PLAYING",
				playing: r.is_playing,
			});
			dispatch({
				type: "SET_ITEM",
				item: r.item,
			});
		});
	}, [spotify]);

	const handlePlayPause = () => {
		if (playing) {
			spotify.pause();
			dispatch({
				type: "SET_PLAYING",
				playing: false,
			});
		} else {
			spotify.play();
			dispatch({
				type: "SET_PLAYING",
				playing: true,
			});
		}
	};

	const skipNext = () => {
		spotify.skipToNext();
		spotify.getMyCurrentPlayingTrack().then((r) => {
			dispatch({
				type: "SET_ITEM",
				item: r.item,
			});
			dispatch({
				type: "SET_PLAYING",
				playing: true,
			});
		});
	};

	const skipPrevious = () => {
		spotify.skipToPrevious();
		spotify.getMyCurrentPlayingTrack().then((r) => {
			dispatch({
				type: "SET_ITEM",
				item: r.item,
			});
			dispatch({
				type: "SET_PLAYING",
				playing: true,
			});
		});
	};

	return (
		<footer className='footer'>
			<div className='footer__left'>
				<img
					className='footer__albumLogo'
					src={item?.album.images[0].url}
					alt={item?.name}
				/>
				{item ? (
					<div className='footer__songInfo'>
						<h4>{item.name}</h4>
						<p>
							{item.artists
								.map((artist) => artist.name)
								.join(", ")}
						</p>
					</div>
				) : (
					<div className='footer__songInfo'>
						<h4>No song is playing</h4>
						<p>...</p>
					</div>
				)}
			</div>
			<div className='footer__center'>
				<IconButton>
					<Shuffle className='footer__icon' />
				</IconButton>
				<IconButton onClick={skipNext}>
					<SkipPrevious className='footer__icon' />
				</IconButton>
				{playing ? (
					<IconButton onClick={handlePlayPause}>
						<PauseCircleOutline
							fontSize='large'
							className='footer__icon'
						/>
					</IconButton>
				) : (
					<IconButton onClick={handlePlayPause}>
						<PlayCircleOutline
							fontSize='large'
							className='footer__icon'
						/>
					</IconButton>
				)}
				<IconButton onClick={skipPrevious}>
					<SkipNext className='footer__icon' />
				</IconButton>
				<IconButton>
					<Repeat className='footer__icon' />
				</IconButton>
			</div>
			<div className='footer__right'>
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlay />
					</Grid>
					<Grid item>
						<VolumeDown />
					</Grid>
					<Grid item xs>
						<Slider
							defaultValue={volume}
							onChange={(e) => setVolume(e.target.value)}
							min={0}
							max={100}
							step={2}
						/>
					</Grid>
				</Grid>
			</div>
		</footer>
	);
}

export default Footer;
