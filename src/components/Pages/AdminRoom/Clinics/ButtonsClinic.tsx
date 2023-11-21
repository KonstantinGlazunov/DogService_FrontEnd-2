import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ClinicsListForAdmin from '../../../../features/clinics/ClinicsListForAdmin';
import s from '../../../../features/Features.module.css';
import ClinicCreate from '../../../../features/clinics/ClinicCreate';



function ButtonsClinic() {
  const [showClinics, setShowClinics] = useState(false);
	const [showCreateForm, setShowCreateForm] = useState(false);

	const handleAllSeeClick = () => {
		setShowClinics(!showClinics);
		setShowCreateForm(false);
	};
  const handleCreateClick = () => {
		setShowCreateForm(true);
		setShowClinics(false);
	};
	const handleCreateFormClose = () => {
		setShowCreateForm(false);
	};

  return (
   <>
			{!showClinics ? (
				<>
					<Button variant="primary" onClick={handleAllSeeClick}>
					Посмотреть всех
					</Button>{' '}
					{/* <Button variant="success">Success</Button> <Button variant="warning">Warning</Button>{' '}
			<Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
			<Button variant="light">Light</Button> <Button variant="dark">Dark</Button> */}
				</>
			) : (
				<div className={s.listContSec}>
					<section id={s.listSection}>
						<ClinicsListForAdmin />
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
						{showCreateForm && <ClinicCreate setShowCreateForm={handleCreateFormClose} />}
					</section>
				</div>
			)}
		</>
  )
}

export default ButtonsClinic