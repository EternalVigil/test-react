import React from 'react';

import styles from '../App.css';
import Header from '../Header';
import Footer from '../Footer';

export default class Home extends React.Component {
	componentWillMount(){

	}
	render() {
		return(
			<div id='container' className={styles.app}>
			<Header />
			<container className='mainWindow'>
				<span>Home</span>
			</container>
			<Footer />
			</div>
			);
	}
}