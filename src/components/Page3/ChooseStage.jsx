import React from 'react';
import CheckBox from '../commons/CheckBox';

const ChooseStage = ({ handleRadioButton, register }) => {
	return (
		<div className="input_content test_question">
			<p className="title">აირჩიე რა ეტაპზე ხარ*</p>
			<CheckBox
				text="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
				handleRadioButton={(e) => handleRadioButton(e)}
				value="firstDose"
				name="vaccinationStage"
				{...register('vaccinationStage', {
					required: true
				})}
			/>
			<CheckBox
				text="სრულად ვაქცინირებული ვარ"
				handleRadioButton={(e) => handleRadioButton(e)}
				value="FullyVaccinated"
				name="vaccinationStage"
				{...register('vaccinationStage', {
					required: true
				})}
			/>
			<CheckBox
				text="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
				handleRadioButton={(e) => handleRadioButton(e)}
				value="onlyFirstDose"
				name="vaccinationStage"
				{...register('vaccinationStage', {
					required: true
				})}
			/>
		</div>
	);
};

export default ChooseStage;
