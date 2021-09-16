import React from 'react';
import { Input } from './StyleInput';

export const CardInput = ({ placeholder, onChange, type }) => {
	return <Input type={type} placeholder={placeholder} onChange={onChange} />;
};
