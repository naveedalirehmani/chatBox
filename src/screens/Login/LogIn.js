import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/card/Card';
import { CardButton } from '../../components/button/CardButton';
import { CardInput } from '../../components/input/CardInput';
import {
	P1,
	Hr,
	Heading,
	A,
	TermsContainer,
	CheckDiv,
	Icons,
	Footer,
} from '../../GlobalStyles';
import { CheckBoxInput } from '../../components/input/CheckBoxInput';
import { IconDiv } from '../../components/icons/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookF,
	faGoogle,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export const LogIn = () => {
	const click = () => {
		return console.log('log in');
	};

	return (
		<Card>
			<Heading>Login</Heading>
			<CardInput type='text' placeholder='E-mail Address' />
			<CardInput type='password' placeholder='Password' />
			<TermsContainer>
				<CheckDiv>
					<CheckBoxInput />
					<P1>Remember Me</P1>
				</CheckDiv>
				<A>Forget Password? </A>
			</TermsContainer>
			<CardButton title='Log In' />
			<Hr>Or</Hr>
			<Icons>
				<IconDiv>
					<FontAwesomeIcon icon={faFacebookF} color='#202442' />
				</IconDiv>
				<IconDiv>
					<FontAwesomeIcon icon={faGoogle} color='#202442' />
				</IconDiv>
				<IconDiv>
					<FontAwesomeIcon icon={faTwitter} color='#202442' />
				</IconDiv>
			</Icons>
			<Footer>
				<P1>
					Don't have an account?
					<Link to='/SignUp'>
						<A>Sign Up</A>
					</Link>
				</P1>
			</Footer>
		</Card>
	);
};
