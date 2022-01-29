import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedScreen from '../screens/FeedScreen';
import PostScreen from '../screens/PostScreen';
import ProfileScreen from '../screens/ProfileScreen';
const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="FeedScreen" component={FeedScreen} options={{ title: 'Feed Screen' }} />
				<Stack.Screen name="PostScreen" component={PostScreen} options={{ title: 'Post Screen' }} />
				<Stack.Screen name="ProfileScreen" component={ProfileScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
