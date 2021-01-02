import React from 'react';
import kha from '../images/kha.png';
import './style.scss';

const Navbar = () => (
	<div className="hero-head">
		<nav className="navbar">
			<div className="gallery-nav">
				<a href="/">
					<img src={kha} alt='Restaurant logo for navigation'/>
				</a>
			</div>
		</nav>
	</div>
);

export default Navbar;
