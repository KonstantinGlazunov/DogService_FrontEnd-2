/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useAppSelector } from '../../app/hooks';
import { selectDogsitters } from './selectors';
import s from './css/DogsittersList.module.css';
import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { selectUser } from '../auth/selectors';
import User from '../auth/types/User';
import img from './images/img1.png';

let dogSitId = 0;
let dogSitFirstName = '';
let imeg = 0;

//console.log(imeg);

const img1 = 'hgsjhgahshgjashjhj';
const img2 = 'hgsjhgahshgjashjhj';

let per = '';

const per1 = 'img';

let per2 = '';

per = per1 + per2;

export default function DogsittersList(): JSX.Element {
	const dogsitters = useAppSelector(selectDogsitters);
	const itemsPerPage = 1;
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [showConf, setShowConf] = useState(false);
	const handleCloseConf = () => setShowConf(false);

	const totalPages = Math.ceil(dogsitters.length / itemsPerPage);
	const indexOfLastDogSitter = currentPage * itemsPerPage;
	const indexOfFirstDogSitter = indexOfLastDogSitter - itemsPerPage;
	const currentDogSitters = dogsitters.slice(indexOfFirstDogSitter, indexOfLastDogSitter);

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage);
	};

	const user = useAppSelector(selectUser);

	// const im = function img() {
	// 	if (imeg === 1) {
	// 		imeg = 2;
	// 	} else if (imeg === 2) {
	// 		imeg = 3;
	// 	}
	// };

	async function handle(): Promise<User> {
		const dogLoverId = user?.id;

		const res = await fetch('/api/registerUser/dogLov-id/' + dogLoverId + '/dogSid/' + dogSitId);

		if (res.status >= 400) {
			const { message }: { message: string } = await res.json();
			throw new Error(message);
		}

		setShowConf(true);
		return res.json();
	}

	if (dogsitters.length === 0) {
		return (
			<div className={s.dogsittersListContainer}>
				<div className={s.dogsitterItem}>
					<a className={s.dogsittersListTitle}>
						Leider keine Hundesitter gefunden, versuchen Sie die nächstgelegene Stadt einzugeben
						oder plz
					</a>
				</div>
			</div>
		);
	}

	// <img className="d-block w-100" src="../images/img1.png" alt="dog_1" />;

	return (
		<>
			<div className={s.dogsittersListContainer}>
				<h4 className={s.dogsittersListTitle}>Wir sind bereit, uns um Ihren Hund zu kümmern</h4>
				<ul className={s.dogsitterList}>
					{currentDogSitters.map((dogsitter) => (
						<li key={dogsitter.id} className={s.dogsitterItem}>
							{/* <div className={s.wrap}>
								<div className={s.data}>
									<p>
										<span className={s.dogs_text}> {dogsitter.firstName}</span>
										<span className={s.dogs_text}> {dogsitter.lastName}</span>
									</p>

									<p className={s.dogs_text}>{dogsitter.city}</p>
									<p className={s.dogs_text}>{dogsitter.email}</p>
								</div>
								<div className={s.foto}></div>
							</div> */}
							<p className={s.dogs_text}>
								<span className={s.dogs_text}> {dogsitter.firstName}</span>
								<span className={s.dogs_text}> {dogsitter.lastName}</span>
								<span className={s.dogs_text}> {dogsitter.city}</span>
								<span className={s.dogs_text}> {dogsitter.email}</span>
								{/* <span className={s.dogs_text}> {per}</span> */}
								<span className={s.dogs_text}>
									{' '}
									<img className="d-block w-100" src={img} alt="dog_1" />
								</span>

								<span className={s.dogs_text}>
									{' '}
									{/* <img className="d-block w-100" src="../images/img1.png" alt="dog_1" /> */}
								</span>
								<Button variant="warning" onClick={handle}>
									WÄHLEN
								</Button>
								<span className={s.dogsnone}>
									{(dogSitId = dogsitter.id)}
									{(dogSitFirstName = dogsitter.firstName)}
								</span>
							</p>
						</li>
					))}
				</ul>
				<div className={s.pagination}>
					<button
						className={s.paginationButton}
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}
					>
						Prev.
					</button>
					<span className={s.paginationPage}>{currentPage}</span>
					<button
						className={s.paginationButton}
						onClick={() => {
							//imeg = 0;
							handlePageChange(currentPage + 1);
							imeg < 3 ? imeg++ : (imeg = 0);
							per2 = imeg + '';
							//console.log(imeg);
							//console.log(per1);
							//console.log(per2);
							//console.log(per);
							per = per1 + per2;
						}}
						disabled={currentPage === totalPages}
					>
						Next
					</button>
				</div>
			</div>
			<Modal show={showConf} onHide={handleCloseConf}>
				<Modal.Header closeButton>
					<Modal.Title>Ende der Registrierung</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Hundesitter, {dogSitFirstName} erfolgreich zu Ihrer Liste hinzugefügt.
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCloseConf}>
						Ok
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
