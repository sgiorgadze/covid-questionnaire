import React from 'react';
import CheckBox from '../commons/CheckBox';

const HandleTest = ({ handleRadioButton, register }) => {
	return (
		<div className="input_content test_question">
			<p className="title"> ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>
			<CheckBox
				text="კი"
				handleRadioButton={(e) => handleRadioButton(e)}
				value="yesTest"
				name="antiBodyTest"
				{...register('antiBodyTest', {
					required: true
				})}
			/>
			<CheckBox
				text="არა"
				handleRadioButton={(e) => handleRadioButton(e)}
				value="noTest"
				name="antiBodyTest"
				{...register('antiBodyTest', {
					required: true
				})}
			/>
		</div>
	);
};

export default HandleTest;
