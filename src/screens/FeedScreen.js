import React, { useMemo, useState } from 'react';
import { FlatList } from 'react-native';
import { PostList } from '../components';
import { useSelector } from 'react-redux';
import { Container } from './styles';
export default function FeedScreen({ navigation: { navigate } }) {
	const [ loading, setLoading ] = useState(false);
	const feedList = useSelector((state) => state.feed.feedList);
	const sortedFeedList = useMemo(
		() => {
			const sortedList = feedList.slice(); // to prevent mutation
			sortedList.sort((a, b) => a.date.localeCompare(b.date)); // Sort posts in descending chronological order newer to older
			return sortedList;
		},
		[ feedList ] // in case list change
	);
	const renderItem = (data) => {
		return (
			<PostList
				name={data.name}
				body={data.body}
				id={data.id}
				onPress={() => navigate('PostScreen', { data })}
				profileOnPress={() => navigate('ProfileScreen', { data })}
			/>
		);
	};
	const onRefresh = () => {
		setLoading(() => true);
		setTimeout(() => {
			setLoading(() => false);
		}, 500);
		/* 
		Because I could not find appropriate api for this scenario, I faked this async refresh my self. 
		*/
	};
	return (
		<Container>
			<FlatList
				data={sortedFeedList}
				keyExtractor={(item) => item.id}
				initialNumToRender={10}
				onRefresh={() => onRefresh()}
				refreshing={loading}
				renderItem={({ item }) => renderItem(item)}
			/>
		</Container>
	);
}
