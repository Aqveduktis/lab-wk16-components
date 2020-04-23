import React from 'react';
import { Home } from 'components/Home';
import { Banner } from 'lib/Banner';

export const App = () => {
	return (
		<div>
			<Home>
				<Banner text="You did wrong" buttonText="correct it" />
			</Home>
			<Home>
				<Banner text="You did wrong" buttonText="correct it" />
			</Home>
			<Home />
		</div>
	);
};
