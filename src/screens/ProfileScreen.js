import { FlatList } from 'react-native';
import React from 'react';
import { PostList } from '../components';
import { Container, AvatarView, NameText } from './styles';
export default function ProfileScreen({
	navigation: { navigate, setOptions },
	navigation,
	route: { params: { data } }
}) {
	React.useEffect(
		() => {
			setOptions({
				title: data.name
			});
		},
		[ navigation ]
	);
	const renderItem = (data) => {
		return (
			<PostList
				name={data.title}
				body={data.body}
				id={data.userId}
				onPress={() => navigate('PostScreen', { data })}
				profileOnPress={() => {}} // already inside of the profile
			/>
		);
	};
	return (
		<Container>
			<AvatarView source={{ uri: data.avatar }} />
			<NameText>Posts</NameText>
			<FlatList
				data={data.posts}
				keyExtractor={(item) => item.id}
				initialNumToRender={10}
				renderItem={({ item }) => renderItem(item)}
			/>
		</Container>
	);
}
