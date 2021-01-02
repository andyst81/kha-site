import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Gallery from './gallery-element';
import Navbar from './navbar.js';
import Footer from './footer';
import IG from './ig';

const GalleryLayout = ({ children }) => (
	<div>
		<Navbar />
		<Helmet />
		<Gallery />
		<Footer />
		<IG />
	</div>
);

export default GalleryLayout;