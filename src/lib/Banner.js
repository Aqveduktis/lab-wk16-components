import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	background-color: white;
	border-bottom: 2px solid gray;
	display: flex;
	justify-content: space-between;
`;
const Text = styled.p`color: black;`;
const Button = styled.button`
	border: none;
	background: none;
	font-size: 20px;
	color: purple;
`;
const Thumbnail = styled.img`
	width: 70px;
	height: 70px;
	border: 1px solid black;
`;

export const Banner = (props) => {
	const { text, buttonText, buttonFunction, imageUrl } = props;
	return (
		<Container>
			<div>
				{imageUrl && <Thumbnail scr={imageUrl} alt="thumbnail" />}
				<Text>{text}</Text>
			</div>
			<div>
				<Button onClick={() => buttonFunction()}>{buttonText}</Button>
			</div>
		</Container>
	);
};

// 1. Supporting illustration (optional)
// 2. Container
// 3. Text
// 4. Buttons
