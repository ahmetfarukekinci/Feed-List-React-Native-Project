import { createSlice } from '@reduxjs/toolkit';
import dummyData from './dummyData';
export const slice = createSlice({
	name: 'feed',
	initialState: {
		feedList: dummyData
	},
	reducers: {}
	/*
	Because there is no kind of update in the scenario, I could not place any reducer here.
	*/
});

export default slice.reducer;
