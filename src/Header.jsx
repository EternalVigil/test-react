import React from 'react';
import logo from './logo.svg';
class Header extends React.Component {
	render() {
		const siteLinks = ['Home', 'About', 'Projects', 'Contact'];


		return (
			<header className='appHeader'>
				<div className='logoContainer'>
					<img className='siteLogo' src={logo} />
				</div>
				<div className=''>
					<ul className='navBar'>
						{siteLinks.map(i => {
							return(<li key={i.toString()}>{i}</li>)
						})}
					</ul>
				</div>
			</header>
			)
	}
}

export default Header;


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