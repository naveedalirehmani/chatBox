import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/card/Card';
import { CardButton } from '../../components/button/CardButton';
import { CardInput } from '../../components/input/CardInput';
import { P1, P2, Heading, A } from '../../GlobalStyles';

export const LogIn = () => {
	const click = () => {
		return console.log('log in');
	};

	return (
		<Card>
			<Heading>Login</Heading>
			<CardInput placeholder='E-mail Address' />
			<CardInput placeholder='Password' />
			<CardButton title='Log In' onclick={click} />
			<P1>
				Can't remember your Password? <A>Recover it.</A>
			</P1>
			<P2>
				Don't have a Account?
				<A>
					<Link to='/SignUp'>Create it.</Link>
				</A>
			</P2>
		</Card>
	);
};
