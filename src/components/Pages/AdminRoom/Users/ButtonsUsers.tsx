import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import s from '../../../../features/Features.module.css';
import UsersList from '../../../../features/UserD/UsersList';

function ButtonsUsers() {
	const [showUsersList, setShowUsersList] = useState(false);

	const handleAllSeeClick = () => {
		setShowUsersList(!showUsersList);
	};

	return (
		<>
			{!showUsersList ? (
				<>
					<Button variant="primary" onClick={handleAllSeeClick}>
						Посмотреть всех
					</Button>{' '}
				</>
			) : (
				<div className={s.listContSec}>
					<section id={s.listSection}>
						<UsersList />
					</section>
				</div>
			)}
			<>
				<Button variant="secondary">
					Добавить
				</Button>{' '}
			</>
		</>
	);
}

export default ButtonsUsers;
