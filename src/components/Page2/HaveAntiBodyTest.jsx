import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { FORM_PATTERNS } from '../../constants';

import Input from '../commons/Input/index';

const HaveTest = ({ register, errors }) => {
	return (
		<div className="haveTest_content input_content">
			<p className="title">მიუთითე მიახლოებითი თარიღი(დღე/თვე/წელი) და რაოდენობა ანტისხეულების*</p>

			<div className="input_line">
				<Input
					name="date"
					placeholder="თარიღი"
					{...register('date', {
						required: 'თარიღის შეყვანა სავალდებულოა',
						pattern: {
							value: FORM_PATTERNS.date.value,
							message: FORM_PATTERNS.date.message
						}
					})}
				/>
				<ErrorMessage errors={errors} name="date" render={({ message }) => <span>{message}</span>} />
			</div>
			<div className="input_line">
				<Input
					name="antiBodiesCount"
					placeholder="ანტისხეულების რაოდენობა"
					{...register('antiBodiesCount', {
						required: 'ანტისხეულების რაოდენობის შეყვანა სავალდებულოა',
						pattern: {
							value: FORM_PATTERNS.number.value,
							message: FORM_PATTERNS.number.message
						}
					})}
				/>
				<ErrorMessage errors={errors} name="antiBodiesCount" render={({ message }) => <span>{message}</span>} />
			</div>
		</div>
	);
};

export default HaveTest;
