import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationLink = () => {
	return (
		<div className="reg_link_content">
			<p>
				რომ აღარ გადადო, <br />
				ბარემ ეხლავე დარეგისტრირდი
			</p>
			<Link
				to={{ pathname: 'https://booking.moh.gov.ge' }}
				className="link"
				target="_blank"
				rel="noopener noreferrer"
			>
				https://booking.moh.gov.ge
			</Link>
		</div>
	);
};

export default RegistrationLink;
