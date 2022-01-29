import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
const { height } = Dimensions.get('window');
export const Container = styled.View`
	flex: 1;
	background-color: #fff;
`;
export const AvatarView = styled.Image`
	width: ${height * 0.3}px;
	height: ${height * 0.3}px;
	align-self: center;
	margin: 10px;
`;
export const NameText = styled.Text`
	font-size: 20px;
	font-weight: bold;
	align-self: center;
`;
export const BodyText = styled.Text`
	font-size: 18px;
	font-weight:300
	align-self: center;
	padding: 10px; 
	text-align: justify
`;
