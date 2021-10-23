import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import StartPage from './components/StartPage';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import LastPage from './components/LastPage';

import { routPrefix } from './constants';

import { NoLayoutRoute, MainLayoutRoute } from './Layouts';

const Routes = () => {
	return (
		<Switch>
			<NoLayoutRoute path={`/${routPrefix}`} exact component={StartPage} />
			<MainLayoutRoute path={`/${routPrefix}/კითხვარი/page1`} component={Page1} />
			<MainLayoutRoute path={`/${routPrefix}/კითხვარი/page2`} component={Page2} />
			<MainLayoutRoute path={`/${routPrefix}/კითხვარი/page3`} component={Page3} />
			<MainLayoutRoute path={`/${routPrefix}/კითხვარი/page4`} component={Page4} />
			<NoLayoutRoute path={`/${routPrefix}/კითხვარი/complete`} component={LastPage} />
		</Switch>
	);
};

export default Routes;
