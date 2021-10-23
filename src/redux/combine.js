import { combineReducers } from '@reduxjs/toolkit';

import CovidQuestionnaire from './userInfoSlice';

const combineSlices = combineReducers({
	CovidQuestionnaire
});

export default combineSlices;
