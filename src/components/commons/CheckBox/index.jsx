import React, { forwardRef } from 'react';
import './checkBox.scss';

const CheckBox = forwardRef(({ name = 'haveCovid', text, linkText, handleRadioButton, error, ...rest }, ref) => {
	return (
		<div className="checked_block">
			<input type="radio" id={name} name={name} ref={ref} {...rest} onChange={(e) => handleRadioButton(e)} />
			<label>{text}</label>
		</div>
	);
});

export default CheckBox;
