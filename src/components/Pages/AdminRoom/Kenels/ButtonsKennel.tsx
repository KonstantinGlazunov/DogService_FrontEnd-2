import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import KennelsListForAdmin from '../../../../features/kennels/KenelsListForAdmin';
import s from '../../../../features/Features.module.css';
import KennelsCreate from '../../../../features/kennels/KennelCreate';

function ButtonsKennel() {
	const [showKennels, setShowKennels] = useState(false);
	const [showCreateForm, setShowCreateForm] = useState(false);
	const handleAllSeeClick = () => {
		setShowKennels(!showKennels);
		setShowCreateForm(false);
	};
	const handleCreateClick = () => {
		setShowCreateForm(true);
		setShowKennels(false);
	};
	const handleCreateFormClose = () => {
		setShowCreateForm(false);
	};
	const handleListClose = () => {
		setShowKennels(false);
	};

	return (
		<>
			{!showKennels ? (
				<>
					<Button variant="primary" onClick={handleAllSeeClick}>
						Посмотреть всех
					</Button>{' '}
				</>
			) : (
				<div className={s.listContSec}>
					<section id={s.listSection}>
						<KennelsListForAdmin onClose={handleListClose} />
					</section>
				</div>
			)}
			{!showCreateForm ? (
				<>
					<Button variant="secondary" onClick={handleCreateClick}>
						Добавить
					</Button>{' '}
				</>
			) : (
				<div className={s.createCont}>
					<section id={s.added}>
						{showCreateForm && <KennelsCreate setShowCreateForm={handleCreateFormClose} />}
					</section>
				</div>
			)}
		</>
	);
}

export default ButtonsKennel;
