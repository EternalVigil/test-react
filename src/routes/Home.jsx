import React from 'react';
import styles from '../App.css';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

export default class Home extends React.Component {
	componentWillMount(){

	}
	render() {
		return(
			<div id='container' className={styles.app}>
			<container className='mainWindow'>
			<Header />
			<Content />
			<Footer />
			</container>
			</div>
			);
	}
}