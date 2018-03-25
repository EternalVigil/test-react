import React from 'react';

const Header = () => {
return (
	<header className='App-header'>
	<div className='headerIcon'>
		<img className='App-logo' src='https://image.freepik.com/free-icon/cross-symbol-bold-outline_318-35717.jpg' alt='Logo' title='Logo' />
	</div>
	<div className='companyTitle'>
		<span className='companyName'>Our Life Church<br/>Revengence</span>
	</div>
	<nav class='navMenu'>
		<ul>
			<li>Home</li>
			<li>About Us</li>
			<li>Our Services</li>
			<li>Community</li>
			<li>Contact Us</li>
		</ul>
	</nav>
	</header>
	)
};

export default Header;