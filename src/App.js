import React from 'react';
import { Home } from 'components/Home';
import { Banner } from 'lib/Banner';

const buttonArr = [
	{
		text: 'learn more',
		function: () => {
			alert('you have learned');
		}
	}
];
const buttonList = [
	{
		text: 'learn more',
		function: () => {
			alert('you have learned');
		}
	},
	{
		text: 'make a decision',
		function: () => {
			alert('good call');
		}
	}
];

export const App = () => {
	return (
		<div>
			<Home>
				<Banner text="You did wrong" buttons={buttonArr} />
			</Home>
			<Home>
				<Banner text="You did wrong" buttons={buttonList} />
			</Home>
			<Home>
				<Banner imageUrl="http://www.fillmurray.com/200/300" text="You did wrong" buttons={buttonArr} />
			</Home>
		</div>
	);
};
