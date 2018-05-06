import React from 'react';
let Links = ['Home', 'About', 'Projects', 'Contact'];
const navLinks = (props) => {
	return (
		<ul>
			{Links.map(i => {
				return(<li key={Links.i}>{i}</li>);
			})}
		</ul>
		);
}

export default navLinks;



/*
	render() {
		return (
			<header className='App-header'>
			<div className='headerIcon'>
				<img class='appLogo' src='' alt='' title='' />
			</div>
			<div className='siteTitle'>
				<span className='siteName'>{this.props.siteName}</span>
			</div>
			<nav className='navMenu'>
				<ul className='navLinks'>
					<li><a href='/'>Home</a></li>
					<li><a href='/about'>About</a></li>
					<li><a href='/projects'>Projects</a></li>
					<li><a href='/contact'>Contact</a></li>
				</ul>
			</nav>
			</header>
			);
	}
*/