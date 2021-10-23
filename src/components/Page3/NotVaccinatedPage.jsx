import React from 'react';
import CheckBox from '../commons/CheckBox';

const NotVaccinated = ({ handleRadioButton, register }) => {
	return (
		<div className="input_content test_question dont_plan_blocks">
			<p className="title">რას ელოდები?*</p>
			<CheckBox
				text="დარეგისტრირებული ვარ და ველოდები თარიღს"
				handleRadioButton={(e) => handleRadioButton(e)}
				value="waitingVacData"
				name="reason"
				{...register('reason', {
					required: true
				})}
			/>
			<CheckBox
				text="არ ვგეგმავ"
				handleRadioButton={(e) => handleRadioButton(e)}
				value="dontPlan"
				name="reason"
				{...register('reason', {
					required: true
				})}
			/>
			<CheckBox
				text="გადატანილი მაქვს და ვგეგმავ აცრას"
				handleRadioButton={(e) => handleRadioButton(e)}
				value="PlanVaccinated"
				name="reason"
				{...register('reason', {
					required: true
				})}
			/>
		</div>
	);
};

export default NotVaccinated;
