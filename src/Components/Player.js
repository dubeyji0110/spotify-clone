import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import "./Player.css";
import Sidebar from "./Sidebar";

function Player({ spotify }) {
	return (
		<main className='player'>
			<div className='player__body'>
				<Sidebar />
				<Body spotify={spotify} />
			</div>
			<Footer spotify={spotify} />
		</main>
	);
}

export default Player;
