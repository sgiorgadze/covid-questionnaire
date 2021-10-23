import React from 'react';
import { Link } from 'react-router-dom';

import { routPrefix } from '../../constants';
import './startPage.scss';

const StartPage = () => {
	return (
		<div className="start_page_wrapper">
			<div className="main_logo">
				<img src={`/${routPrefix}/assets/img/main logo.png`} alt="" />
			</div>
			<Link to={`/${routPrefix}/კითხვარი/page1`} className="start_link">
				კითხვარის <br />დაწყება
			</Link>
		</div>
	);
};

export default StartPage;
