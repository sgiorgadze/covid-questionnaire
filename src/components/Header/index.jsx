import React from 'react';
import './header.scss';

const Header = () => {
	const routeName = window.location.pathname.split('/').pop();
	const numberOfPage = routeName[routeName.length - 1];

	return (
		<div className="header">
			<div className="img_text">
				<img src="/covid-questionnaire/assets/img/Group.png" alt="" />
			</div>
			<div className="pages">{`${numberOfPage}`}/4</div>
		</div>
	);
};

export default Header;
