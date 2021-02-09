import { Avatar } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import { useStateValue } from "../StateProvider";
import "./Header.css";

function Header({ spotify }) {

    const [{ user }, dispatch] = useStateValue();

	return (
		<header className='header'>
            <div className='header__left'>
                <Search />
                <input placeholder='Search for Artist, Songs, or Podcasts' type='text' />
            </div>
            <div className='header__right'>
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
		</header>
	);
}

export default Header;
