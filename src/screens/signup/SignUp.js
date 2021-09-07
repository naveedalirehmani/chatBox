import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/card/Card';
import { CardButton } from '../../components/button/CardButton';
import { CardInput } from '../../components/input/CardInput';
import { P1, P2, Heading, A } from '../../GlobalStyles';

export const SignUp = () => {
	const click = () => {
		return console.log('Sign Up');
	};

	return (
		<Card>
			<Heading>SignUp</Heading>
			<CardInput placeholder='Your Names' />
			<CardInput placeholder='E-mail Address' />
			<CardInput placeholder='Password' />
			<CardButton title='Sign Up' onclick={click} />
			<P1>
				I agree with <A>Terms and Conditions.</A>
			</P1>
			<P2>
				Already have an account? <A>Log In</A>
			</P2>
		</Card>
	);
};
