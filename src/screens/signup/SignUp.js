import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/card/Card';
import { CardButton } from '../../components/button/CardButton';
import { CardInput } from '../../components/input/CardInput';
import {
	P1,	
	Heading,
	A,
	TermsContainer,
	CheckDiv,
	Footer,
} from '../../GlobalStyles';
import { CheckBoxInput } from '../../components/input/CheckBoxInput';

export const SignUp = () => {
	const click = () => {
		return console.log('log in');
	};

	return (
		<Card>
			<Heading>Sign Up</Heading>
			<CardInput type='text' placeholder='User Name' />
			<CardInput type='text' placeholder='E-mail Address' />
			<CardInput type='password' placeholder='Create Password' />
			<CardInput type='password' placeholder='Re-enter Password' />
			<TermsContainer>
				<CheckDiv>
					<CheckBoxInput />
					<P1>I Accept the</P1>
					<A>Terms and Conditions </A>
				</CheckDiv>
			</TermsContainer>
			<CardButton title='Sign Up' />
			<Footer>
				<P1>
					Already have a account?
					<Link to='/'>
						<A>Log In</A>
					</Link>
				</P1>
			</Footer>
		</Card>
	);
};
