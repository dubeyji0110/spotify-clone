import { Grid, IconButton, Slider } from "@material-ui/core";
import {
	PlayCircleOutline,
	PlaylistPlay,
	Repeat,
	Shuffle,
	SkipNext,
	SkipPrevious,
	VolumeDown,
} from "@material-ui/icons";
import React from "react";
import "./Footer.css";

function Footer() {
	return (
		<div className='footer'>
			<div className='footer__left'>
				<img
					className='footer__albumLogo'
					src='https://upload.wikimedia.org/wikipedia'
					alt=''
				/>
				<div className='footer__songInfo'>
					<h4>Yeah!</h4>
					<p>Usher</p>
				</div>
			</div>
			<div className='footer__center'>
				<IconButton>
					<Shuffle className='footer__icon' />
				</IconButton>
				<IconButton>
					<SkipPrevious className='footer__icon' />
				</IconButton>
				<IconButton>
					<PlayCircleOutline
						fontSize='large'
						className='footer__icon'
					/>
				</IconButton>
				<IconButton>
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
						<Slider />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Footer;
