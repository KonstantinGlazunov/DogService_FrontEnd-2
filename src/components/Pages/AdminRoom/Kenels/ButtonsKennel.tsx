import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import KennelsListForAdmin from '../../../../features/kennels/KenelsListForAdmin';
import s from '../../../../features/Features.module.css';
import KennelsCreate from '../../../../features/kennels/KennelCreate';

function ButtonsKennel() {
  const [showKennels, setShowKennels] = useState(false);
	const [showCreateForm, setShowCreateForm] = useState(false);
  const handleAllSeeClick = () => {
		setShowKennels(!showKennels);
	};
  const handleCreateClick = () => {
		setShowCreateForm(true);
	};

  return (
   <>
			{!showKennels ? (
				<>
					<Button variant="primary" onClick={handleAllSeeClick}>
						Alles sehen
					</Button>{' '}
          </>
			) : (
				<div className={s.listContSec}>
					<section id={s.listSection}>
						<KennelsListForAdmin />
					</section>
				</div>
			)}
			{!showCreateForm ? (
				<>
					<Button variant="secondary" onClick={handleCreateClick}>
						Hinzufügen
					</Button>{' '}
				</>
			) : (
				<div className={s.createCont}>
					<section id={s.added}>
						{showCreateForm && <KennelsCreate setShowCreateForm={setShowCreateForm} />}
					</section>
				</div>
			)}
		</>
  );
}

export default ButtonsKennel