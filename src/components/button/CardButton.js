import React from 'react';
import { Button } from './StyleButton';

export const CardButton = ({ title,onclick }) => {
	return <Button onClick={onclick}>{title}</Button>;
};
