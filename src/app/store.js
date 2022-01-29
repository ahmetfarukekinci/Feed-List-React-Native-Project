import { configureStore } from '@reduxjs/toolkit';
import feed from '../screens/feedSlice';
export default configureStore({
	reducer: {
		feed
	}
});
