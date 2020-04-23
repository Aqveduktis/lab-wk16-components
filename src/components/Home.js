import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
	width: 80%;
	min-height: 500px;
	background-color: #666;
	border: 5px solid black;
`;

const Title = styled.h1`
	font-size: 40px;
	color: orange;
`;

export const Home = () => {
	return (
		<Container>
			<Title>Title of website</Title>
			<p>
				This is a website .....<br />xxxxx xxxx <br />xxxx xxxx yyy yyyy yy
			</p>
		</Container>
	);
};
