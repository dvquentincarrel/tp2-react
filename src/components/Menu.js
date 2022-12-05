import React from 'react';
import { NavLink } from "react-router-dom";
import './Menu.css'

function Menu(){
	let activeStyle = {
		borderRadius: '10px',
		padding: '5px',
		margin: '0px, 10px',
		textDecoration: "underline",
		background: "coral",
		color: "black"
	};
	let unactiveStyle = {
		margin: '0px 10px',
		padding: '5px',
		textDecoration: "none",
		color: "coral"
	}

	return(
		<nav>
			<ul>
				<li>
					{/* Couldn't figure out how to make it default, if route is "/" */}
					<NavLink to="blog" style={({ isActive }) => isActive ? activeStyle : unactiveStyle}>
						Blog
					</NavLink>
				</li>
				<li>
					<NavLink to="recettes" style={({ isActive }) => isActive ? activeStyle : unactiveStyle}>
						Recettes
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
export default Menu;
