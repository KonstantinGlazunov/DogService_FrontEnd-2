import { Form, useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectLoginFormError } from './selectors';
import { getUser, login, resetLoginFormError } from './authSlice';
import styles from './Login.module.css';
import { Button, Modal, Nav, Row } from 'react-bootstrap';

const none: string = styles.qwertynone;
const block: string = styles.qwertyblock;

function Login(): JSX.Element {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const error = useAppSelector(selectLoginFormError);
	const [email, setName] = useState('');
	const [password, setPassword] = useState('');

	const [show1, setShow] = useState(false);
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const handleClose = () => setShow(false);
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const handleShow1 = () => setShow(true);

	const handleSubmit = useCallback(
		async (event: React.FormEvent) => {
			event.preventDefault();
			// делаем диспатч санка
			const dispatchResult = await dispatch(
				login({
					email,
					password,
				})
			);
			// проверяем, что санк login зарезолвился успешно
			if (login.fulfilled.match(dispatchResult)) {
				dispatch(getUser()); // подгрузит юзера
				navigate('/'); // переведет на стартовую страницу
			}

			// выводим в консоль ошибку если санк login зареджектился
			if (login.rejected.match(dispatchResult)) {
				// eslint-disable-next-line no-console
				console.error(dispatchResult.error.message);
			}
		},
		[dispatch, email, navigate, password]
	);

	const handleNameChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setName(event.target.value);
			// 332 очищаем ошибку
			dispatch(resetLoginFormError());
		},
		[dispatch]
	);

	const handlePasswordChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setPassword(event.target.value);
			// 332 очищаем ошибку
			dispatch(resetLoginFormError());
		},
		[dispatch]
	);

	return (
		<div className={block}>
			<Nav>
				<Button variant="primary" className="mr-2" onClick={handleShow1}>
					Log In
				</Button>
			</Nav>

			<Modal show={show1} onHide={handleClose} id="modal-avtorisation">
				<Modal.Header closeButton>
					<Modal.Title>Log In</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form className="auth-form" onSubmit={handleSubmit}>
						<h2>Вход</h2>
						{error && (
							<div className="invalid-feedback mb-3" style={{ display: 'block' }}>
								{error}
							</div>
						)}
						<div className="mb-3">
							<label htmlFor="name-input" className="form-label">
								Имя
							</label>
							<input
								type="text"
								className={`form-control ${error ? 'is-invalid' : ''}`}
								id="name-input"
								name="username"
								value={email}
								onChange={handleNameChange}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="password-input" className="form-label">
								Пароль
							</label>
							<input
								type="password"
								className={`form-control ${error ? 'is-invalid' : ''}`}
								id="password-input"
								name="password"
								value={password}
								onChange={handlePasswordChange}
							/>
						</div>
						<button type="submit" className="btn btn-primary">
							Войти
						</button>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default Login;
