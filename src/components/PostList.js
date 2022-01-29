import React from 'react';
import { Dimensions, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';
const { height } = Dimensions.get('window');
const TitleWrapper = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
`;
const Container = styled.TouchableOpacity`
width: 100%
min-height:${height * 0.15}px;
max-height:${height * 0.2}px;
padding:10px;
border-bottom-width: 1px;
border-color:gray
`;
const ImageView = styled.Image`
	height: 50px;
	width: 50px;
	border-radius: 25px;
`;
const NameText = styled.Text`
	font-size: 18px;
	font-weight: bold;
	margin-left: 10px;
	width: 300px;
`;
const BodyText = styled.Text`
	padding-left: 50px;
	font-size: 15px;
`;
const PostList = ({ id, name, body, onPress, profileOnPress }) => {
	return (
		<Container onPress={onPress}>
			<TouchableWithoutFeedback onPress={profileOnPress}>
				<TitleWrapper>
					<ImageView source={{ uri: `https://i.pravatar.cc/150?img={${id}}` }} />
					<NameText>{name.substring(0, 30)}</NameText>
				</TitleWrapper>
			</TouchableWithoutFeedback>
			<BodyText>{body.substring(0, 100)}</BodyText>
		</Container>
	);
};

export { PostList };
