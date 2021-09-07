import React from 'react';
import { Input } from './StyleInput';

export const CardInput = ({ placeholder, onChange }) => {
	return <Input placeholder={placeholder} onChange={onChange} />;
};
