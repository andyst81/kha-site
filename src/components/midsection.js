import React from 'react';
import './style.scss';
import './App.css';
import menu from "../images/kha-menu.pdf"

const Midsection = () => (
	<div className="App">
	<section className="hero is-medium">
		<div className="hero-body">
			<div className="container">
			</div>
		</div>
	</section>
	<section id="parallax-1" className="hero is-large ">
		<div className="hero-body">
			<div className="container">
				<div className="columns">
					<div className="column is-6 is-offset-6">
						<h1 className="title is-1 ">Delicious Modern Thai Food</h1>
						<hr className="content-divider" />
						<a href={menu} className="button is-white is-inverted"><span className="pr-2">Menu</span><i className="fas fa-chevron-right"></i></a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section id="parallax-2" className="hero is-large ">
		<div className="hero-body">
			<div className="container">
				<div className="columns">
					<div className="column is-6">
						<h1 className="title is-1 ">Amazing Drinks</h1>
						<hr className="content-divider" />
						<a href="#" className="button is-white is-inverted"><span className="pr-2">Gallery</span><i className="fas fa-chevron-right"></i></a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section id="parallax-3" className="hero is-large ">
		<div className="hero-body">
			<div className="container">
				<div className="columns">
					<div className="column is-6 is-offset-6">
						<h1 className="title is-1 ">Warm and Cozy Atmosphere</h1>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section className="cta va">
		<div className="container">
			<div className="columns">
				<div className="column is-6 line">
					<h1 className="title is-1 ">Join Our Community</h1>
					<h2 className="subtitle">Click the button below or scan the QR code to join our Line community and hear about our upcoming events and special offers.</h2>
					<a href="https://lin.ee/pg909sE"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/en.png" alt="เพิ่มเพื่อน" height="36" border="0" /></a>
				</div>
				<div className="column is-6">
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6AQAAAACgl2eQAAABoklEQVR42u2ZQa6DMAxELeUAHClX95E4QCTXngm0tFUXX3+RkUApouFtrHjGTrD4fbndwA3cwN8At7w2H1sM68Os7TZqyrSA/I3NY++JtQjCnBcCMqgEeC8AD4kJAvgHIOMVBphpyWgCZ8rh1a+cXBk45P8yvvvDysA03VbBpmp6jm9evTpA4ediYVgOgydLAV5xYRLzHfKJdkk5AQDCL8mgmtS9QURaAIyr1ggFpaImKQbAiunGDc5cD7tpAcyuszjGYchawKBkaobFBTXFuhQQR0GP2e7CkMczTA0AK9UpHxhaat/ateIsDzj8CgWlOt5py/EqHAEgUNYrx1rB0wrG08QkAEcpcbyF8GFiJgbMFoV7qLbP3GuhBbCCdDoYtWMfW9r1AcqfHSM2UPG2mioAl4aTLWbfogXgkAeNbuZbdezOPZQUcDzONHNWebuWxeUBbmmDxX128tceRgI4mysC6B794/BwdYBWbDxSQPfOB0UgWNbN2hGpIsDdB1oUt7cWRQFgylHyCJOtuxhA+eNQfX4dgBV0KeD+GnUDN/DfwANbcuNWJz0XaAAAAABJRU5ErkJggg==" 
						className="line"
						alt="Line QR code"
					/>
				</div>
			</div>
		</div>

	</section>
	
</div>
);

export default Midsection;
