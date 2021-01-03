import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Navbar from './navbar';
import Midsection from './midsection';
import Footer from './footer';
import IG from './ig';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Navbar />
		<Midsection />
		<Footer />
		<IG />
	</div>
);

export default Layout;
