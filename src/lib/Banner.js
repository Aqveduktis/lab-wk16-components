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
const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;
const Thumbnail = styled.img`
	width: 70px;
	height: 70px;
	object-fit: cover;
	border: 1px solid black;
	border-radius: 50%;
`;

export const Banner = (props) => {
	const { text, buttons, imageUrl } = props;
	return (
		<Container>
			<Wrapper>
				{imageUrl && <Thumbnail src={imageUrl} alt="thumbnail" />}
				<Text>{text}</Text>
			</Wrapper>
			<Wrapper>{buttons.map((item) => <Button onClick={() => item.function()}>{item.text}</Button>)}</Wrapper>
		</Container>
	);
};

// 1. Supporting illustration (optional)
// 2. Container
// 3. Text
// 4. Buttons
