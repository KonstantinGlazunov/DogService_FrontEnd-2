/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import Button from 'react-bootstrap/Button';

import s from '../../../../features/Features.module.css';
import UsersList from '../../../../features/UserD/UsersList';
import User from '../../../../features/auth/types/User';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { selectUser } from '../../../../features/auth/selectors';
import { FormControl, InputGroup, Modal, Nav } from 'react-bootstrap';
import { resetLoginFormError } from '../../../../features/auth/authSlice';

export default function ButtonsUsers(): JSX.Element {
	const dispatch = useAppDispatch();
	const [showUsersList, setShowUsersList] = useState(false);
	const user = useAppSelector(selectUser);
	const [show1, setShow] = useState(false);
	const [show2, setShow2] = useState(false);
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const handleClose = () => setShow(false);
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const handleShow1 = () => setShow(true);
	const handleClose2 = () => setShow2(false);
	const handleShow2 = () => setShow2(true);
	const [showPassword, setShowPassword] = useState(false);
	//const dogLoverId = user?.id;
	const [dogSitId, setDogSitId] = useState('');
	const [dogLoverId, setDogLoverId] = useState('');
	const [showConf, setShowConf] = useState(false);
	const handleCloseConf = () => setShowConf(false);
	let result = null;

	const handleAllSeeClick = () => {
		setShowUsersList(!showUsersList);
	};
	const handleListClose = () => {
		setShowUsersList(false);
	};

	async function handle(): Promise<User> {
		const res = await fetch('/api/registerUser/dogLov-id/' + dogLoverId + '/dogSid/' + dogSitId);

		if (res.status >= 400) {
			const { message }: { message: string } = await res.json();
			throw new Error(message);
		}
		console.log('test');

		setShowConf(true);
		return res.json();
	}

	async function handleDogSittersLIst(): Promise<User> {
		const res = await fetch('/api/registerUser/'+ dogLoverId + '/dogSitters');

		/* /{dogLover-id}/dogSitters */

		if (res.status >= 400) {
			const { message }: { message: string } = await res.json();
			throw new Error(message);
		}
		console.log('test');

		setShowConf(true);
		console.log(res.json());
		result = res.json();
		return res.json();
	}

	function handleSubmit(event: FormEvent<HTMLFormElement>): void {
		throw new Error('Function not implemented.');
	}

	const handleNameChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setDogLoverId(event.target.value);
			// 332 очищаем ошибку
			dispatch(resetLoginFormError());
		},
		[dispatch]
	);

	const handlePasswordChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setDogSitId(event.target.value);
			// 332 очищаем ошибку
			dispatch(resetLoginFormError());
		},
		[dispatch]
	);

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
						<UsersList onClose={handleListClose} />
					</section>
				</div>
			)}
			<>
				<Button variant="secondary" onClick={handleShow1}>
					Добавить догситтера в список к догловеру
				</Button>{' '}
			</>

			<>
				<Button variant="secondary" onClick={handleShow2}>
					Показать список догситтеров у догловера
				</Button>{' '}
			</>

			<div>
				{/* <Nav>
					<Button variant="primary" className="mr-2" onClick={handleShow1}>
						Betreten
					</Button>
				</Nav> */}

				<Modal show={show1} onHide={handleClose} id="modal-avtorisation">
					<Modal.Header closeButton>
						<Modal.Title>Add DogSitters to DogLovers</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form className="auth-form" onSubmit={handle}>
							<div className="mb-3">
								<label htmlFor="name-input" className="form-label">
									DogLoverId
								</label>
								<InputGroup>
									<FormControl
										type="text"
										id="dogLoverId-input"
										name="dogLoverId"
										value={dogLoverId}
										onChange={handleNameChange}
									/>
								</InputGroup>
							</div>
							<div className="mb-3">
								<label htmlFor="password-input" className="form-label">
									DogSitterId
								</label>
								<InputGroup>
									<FormControl
										type="text"
										id="dogSitId-input"
										name="dogSitId"
										value={dogSitId}
										onChange={handlePasswordChange}
									/>
									{/* <Button
										variant="outline-secondary"
										onClick={handleTogglePasswordVisibility}
										className={`custom-button`}
									></Button> */}
								</InputGroup>
							</div>
							<button type="submit" className="btn btn-primary">
								Add DogSitters to DogLovers
							</button>
						</form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>

				<Modal show={show2} onHide={handleClose2} id="modal-avtorisation">
					<Modal.Header closeButton>
						<Modal.Title>Add DogSitters to DogLovers</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form className="auth-form" onSubmit={handleDogSittersLIst}>
							<div className="mb-3">
								<label htmlFor="name-input" className="form-label">
									DogLoverId
								</label>
								<InputGroup>
									<FormControl
										type="text"
										id="dogLoverId-input"
										name="dogLoverId"
										value={dogLoverId}
										onChange={handleNameChange}
									/>
								</InputGroup>
							</div>
							<button type="submit" className="btn btn-primary">
								Show list of dogSitters
							</button>
						</form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose2}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
			{/* <Modal show={showConf} onHide={handleCloseConf}>
				<Modal.Header closeButton>
					<Modal.Title>Ende der Registrierung</Modal.Title>
				</Modal.Header>
				<Modal.Body>Hundesitter, {dogSitId} erfolgreich zu Ihrer Liste hinzugefügt.</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCloseConf}>
						Ok
					</Button>
				</Modal.Footer>
			</Modal> */}
		</>
	);
}
