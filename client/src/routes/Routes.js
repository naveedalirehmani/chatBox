import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../screens/homeChat/home';
import { LogIn } from '../screens/Login/LogIn';
import { SignUp } from '../screens/signup/SignUp';

export const Routes = () => {
	return (
		<Switch>
			<Route path='/' component={LogIn} exact />
			<Route path='/Home' component={Home} />
			<Route path='/SignUp' component={SignUp} />
		</Switch>
	);
};
