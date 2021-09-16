import React from 'react';
import { Input } from './StyleInput';

export const CardInput = ({ name,placeholder, onChange, type }) => {
	return <Input name={name} type={type} placeholder={placeholder} onChange={(e)=>onChange(e)} />;
};
