import React from 'react';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import store from './src/app/store';
export default (App = () => {
	return (
		<Provider store={store}>
			<Navigation />
		</Provider>
	);
});
