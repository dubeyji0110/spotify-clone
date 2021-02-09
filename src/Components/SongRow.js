import React from "react";
import "./SongRow.css";

function SongRow({ track, playSong, id }) {
	return (
		<div className='song' onClick={() => playSong(track.id)}>
			<div className='songRow'>
				<h5 style={{ marginRight: "10px" }}>{id + 1}</h5>
				<img
					className='songRow__album'
					src={track.album.images[0].url}
					alt=''
				/>
				<div className='songRow__info'>
					<h1>{track.name}</h1>
					<p>
						{track.artists.map((artist) => artist.name).join(", ")}
						{/* {track.album.name} */}
					</p>
				</div>
			</div>
			<div className='songRow__albumName'>{track.album.name}</div>
			<div className='songRow__albumName'>
				{Math.trunc((track.duration_ms /1000) / 60) +
					":" +
					Math.trunc((track.duration_ms / 1000) % 60)}
			</div>
		</div>
	);
}

export default SongRow;
