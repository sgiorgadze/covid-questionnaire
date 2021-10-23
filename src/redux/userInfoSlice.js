import { createSlice } from '@reduxjs/toolkit';

const userInfoSlice = createSlice({
	name: 'CovidQuestionnaire',
	initialState: {},
	reducers: {
		setUserInfo(state, { payload }) {
			//console.log(payload);
			state.userInfo = payload;
		},
		setCovidInfo(state, { payload }) {
			state.covidInfo = payload;
		},
		setVaccinationInfo(state, { payload }) {
			state.vaccinationInfo = payload;
		},
		setRecommendations(state, { payload }) {
			state.recommendations = payload;
		}
	}
});

export const { setUserInfo, setCovidInfo, setVaccinationInfo, setRecommendations } = userInfoSlice.actions;
export default userInfoSlice.reducer;
