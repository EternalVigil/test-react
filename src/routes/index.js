import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import NotFound from './NotFound';

export default () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Home} />
			<Redirect from='/home' to='/' />
			<Route path='/about' component={About} />
			<Redirect from='/about-us' to='/about' />
			<Route component = {NotFound} />
		</Switch>
	</BrowserRouter>
);