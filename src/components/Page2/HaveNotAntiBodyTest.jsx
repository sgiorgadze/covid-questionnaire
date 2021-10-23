import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { FORM_PATTERNS } from '../../constants';

import Input from '../commons/Input/index';

const HaveNotTest = ({ register, errors }) => {
	return (
		<div className="haveTest_content input_content">
			<p className="title">მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი), როდის გქონდა კოვიდ19*</p>

			<div className="input_line">
				<Input
					name="whenHadCovid"
					placeholder="თარიღი"
					{...register('whenHadCovid', {
						required: 'თარიღის შეყვანა სავალდებულოა',
						pattern: {
							value: FORM_PATTERNS.date.value,
							message: FORM_PATTERNS.date.message
						}
					})}
				/>
				<ErrorMessage errors={errors} name="whenHadCovid" render={({ message }) => <span>{message}</span>} />
			</div>
		</div>
	);
};

export default HaveNotTest;
