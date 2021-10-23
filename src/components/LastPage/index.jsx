import React, { useEffect, useState } from 'react';
import { routPrefix } from '../../constants';

import './lastPage.scss';

const LastPage = () => {
	const [ showImg, setShowImg ] = useState(false);
	useEffect(() => {
		setShowImg(true);
	});
	return (
		<div className="lastPage_content">
			<div className="thanks_text">
				<p>მადლობა</p>
				<img
					src={`/${routPrefix}/assets/img/Vector-1.png`}
					alt="img"
					className={showImg ? 'star1 show_star1' : 'star1'}
				/>
				<img
					src={`/${routPrefix}/assets/img/Vector-1.png`}
					alt="img"
					className={showImg ? 'star2 show_star2' : 'star2'}
				/>
			</div>
		</div>
	);
};

export default LastPage;
