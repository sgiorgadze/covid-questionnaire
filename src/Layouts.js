import React from 'react';

import { Route } from 'react-router-dom';

import Header from './components/Header';

const NoLayoutRoute = ({ component: Component, ...rest }) => {
	return <Route {...rest} render={(props) => <Component {...props} />} />;
};

const MainLayoutRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => (
				<MainLayout>
					<Component {...props} />
				</MainLayout>
			)}
		/>
	);
};

const MainLayout = ({ children }) => {
	return (
		<div className="main_wrapper">
			<Header />
			<div className="questionnaire_wrapper"> {children}</div>
		</div>
	);
};

export { MainLayoutRoute, NoLayoutRoute };
