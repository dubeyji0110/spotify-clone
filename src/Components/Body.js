import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import React from "react";
import { useStateValue } from "../StateProvider";
import "./Body.css";
import Header from "./Header";
import SongRow from "./SongRow";

function Body({ spotify }) {
	const [{ discover_weekly }, dispatch] = useStateValue();

	const playPlaylist = (id) => {
		spotify
			.play({
				context_uri: `spotify:playlist:37i9dQZEVXcE03IHN9aLMH`,
			})
			.then((res) => {
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
			});
	};

	const playSong = (id) => {
		spotify
			.play({
				uris: [`spotify:track:${id}`],
			})
			.then((res) => {
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
			});
	};

	return (
		<section className='body'>
			<Header spotify={spotify} />
			<div className='body__info'>
				<img src={discover_weekly?.images[0]?.url} alt='' />
				<div className='body__infoText'>
					<strong>PLAYLIST</strong>
					<h2>Discover Weekly</h2>
					<p>{discover_weekly?.description}</p>
				</div>
			</div>
			<div className='body__songs'>
					<div className='backdrop'>
				<div className='body__icons'>
					<PlayCircleFilled
						className='body__shuffle'
						onClick={playPlaylist}
					/>
					<Favorite fontSize='large' />
					<MoreHoriz />
				</div>
					{/* {console.log(discover_weekly.tracks)} */}
					{discover_weekly?.tracks.items.map((item, indx) => (
						<SongRow
							track={item.track}
							playSong={playSong}
							id={indx}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default Body;
