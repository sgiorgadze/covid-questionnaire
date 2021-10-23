import React, { forwardRef } from 'react';

import './input.scss';

const Input = forwardRef((props, ref) => {
	const { name, label, ...rest } = props;
	return (
		<div className="form_block">
			<label htmlFor={name}>
				{label}
				{label && '*'}
			</label>
			<input ref={ref} {...rest} name={name} id={name} />
		</div>
	);
});

export default Input;
