import React from 'react';
import { Container, AvatarView, BodyText, NameText } from './styles';
export default function PostScreen({ route: { params: { data } } }) {
	return (
		<Container>
			<AvatarView source={{ uri: data.avatar }} />
			<NameText>{data.name}</NameText>
			<BodyText>{data.body}</BodyText>
		</Container>
	);
}
