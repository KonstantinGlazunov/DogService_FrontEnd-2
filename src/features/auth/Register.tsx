/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
import { Button, Col, Form, InputGroup, Modal, Nav, Row } from 'react-bootstrap';
//import styles from './Registration.module.css';
import { ChangeEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/named
import { registerUser, resetRegisterFormError, login, registerSetter } from './authSlice';
import { selectRegisterFormError } from './selectors';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import styles from './Register.module.css';
import Conf from './ConfirmationReg';

const none: string = styles.qwertynone;
const block: string = styles.qwertyblock;

const Register = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const error = useAppSelector(selectRegisterFormError);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [userName, setUserName] = useState('');
	const [city, setSity] = useState('');
	const [zip, setZip] = useState('');
	const [setter, setSetter] = useState<boolean>(false);
	const [size, setSize] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordRepeat, setPasswordRepeat] = useState('');

	const [show, setShow] = useState(false);
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const handleClose = () => setShow(false);
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const handleShow = () => setShow(true);

	const [showConf, setShowConf] = useState(false);

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const handleCloseConf = () => setShowConf(false);
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const handleShowConf = () => setShowConf(true);

	// const [validated, setValidated] = useState(false);

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-shadow

	// const handleSubmit = (event: any) => {
	// 	const form = event.currentTarget;
	// 	if (form.checkValidity() === false) {
	// 		event.preventDefault();
	// 		event.stopPropagation();
	// 	}

	// 	setValidated(true);
	// };

	const handleSubmitUser = useCallback(
		async (event: React.FormEvent) => {
			event.preventDefault();
			const dispatchResult = await dispatch(
				// eslint-disable-next-line @typescript-eslint/no-unsafe-call
				registerUser({
					firstName,
					lastName,
					userName,
					city,
					zip,
					email,
					password,
					passwordRepeat,
				})
			);

			if (registerUser.fulfilled.match(dispatchResult)) {
				// 	//dispatch(login({ email, password }));
				navigate('/');
				setShow(false);
				setShowConf(true);
			}
		},
		[dispatch, firstName, lastName, userName, city, zip, email, navigate, password, passwordRepeat]
	);

	const handleSubmitSetter = useCallback(
		async (event: React.FormEvent) => {
			event.preventDefault();
			const dispatchResult = await dispatch(
				registerSetter({
					firstName,
					lastName,
					userName,
					city,
					zip,
					size,
					email,
					password,
					passwordRepeat,
				})
			);
			if (registerSetter.fulfilled.match(dispatchResult)) {
				// 	dispatch(login({ email, password }));
				navigate('/');
				setShow(false);
				setShowConf(true);
			}
		},
		[
			dispatch,
			firstName,
			lastName,
			userName,
			city,
			size,
			zip,
			email,
			navigate,
			password,
			passwordRepeat,
		]
	);
	console.log(size);

	const handleFirstNameChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setFirstName(event.target.value);
			dispatch(resetRegisterFormError());
		},
		[dispatch]
	);

	const handleLastNameChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setLastName(event.target.value);
			dispatch(resetRegisterFormError());
		},
		[dispatch]
	);

	const handleUserNameChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setUserName(event.target.value);
			dispatch(resetRegisterFormError());
		},
		[dispatch]
	);

	const handleCityChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setSity(event.target.value);
			dispatch(resetRegisterFormError());
		},
		[dispatch]
	);

	const handleZipChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setZip(event.target.value);
			dispatch(resetRegisterFormError());
		},
		[dispatch]
	);

	const handleEmailChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setEmail(event.target.value);
			dispatch(resetRegisterFormError());
		},
		[dispatch]
	);

	const handlePasswordChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setPassword(event.target.value);
			dispatch(resetRegisterFormError());
		},
		[dispatch]
	);

	const handlePasswordRepeatChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setPasswordRepeat(event.target.value);
			dispatch(resetRegisterFormError());
		},
		[dispatch]
	);

	const handleSizeChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setSize(event.target.value);
			dispatch(resetRegisterFormError());
		},
		[dispatch]
	);

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	function IsSetter(event: ChangeEvent<HTMLInputElement>): void {
		if (setter == true) {
			setSetter(false);
			setSize('');
		}
		if (setter != true) {
			setSetter(true);
			setSize('A_MINI');
		}
	}

	// function handleClose(): void {
	// 	throw new Error('Function not implemented.');
	// }

	return (
		<>
			<div className={block}>
				<Nav>
					<Button variant="primary" className="mr-2" onClick={handleShow}>
						Registration
					</Button>
				</Nav>

				<Modal show={show} onHide={handleClose} id="modal-registration">
					<Modal.Header closeButton>
						<Modal.Title>Registration</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form className="auth-form" onSubmit={setter ? handleSubmitSetter : handleSubmitUser}>
							{error && (
								<div className="invalid-feedback mb-3" style={{ display: 'block' }}>
									{error}
								</div>
							)}
							<Row className="mb-3">
								<Form.Group as={Col} md="4" controlId="validationCustom01">
									<label htmlFor="name-input" className="form-label">
										First Name
									</label>
									<input
										type="text"
										className={`form-control ${error ? 'is-invalid' : ''}`}
										id="name-input"
										name="firstName"
										value={firstName}
										onChange={handleFirstNameChange}
										autoFocus
									/>
								</Form.Group>
								<Form.Group as={Col} md="4" controlId="validationCustom01">
									<label htmlFor="name-input" className="form-label">
										Last Name
									</label>
									<input
										type="text"
										className={`form-control ${error ? 'is-invalid' : ''}`}
										id="name-input"
										name="lastName"
										value={lastName}
										onChange={handleLastNameChange}
									/>
								</Form.Group>
								<Form.Group as={Col} md="4" controlId="validationCustom01">
									<label htmlFor="name-input" className="form-label">
										User Name
									</label>
									<InputGroup hasValidation>
										<InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
										<input
											type="text"
											className={`form-control ${error ? 'is-invalid' : ''}`}
											id="name-input"
											name="userName"
											value={userName}
											onChange={handleUserNameChange}
										/>
									</InputGroup>
								</Form.Group>
							</Row>
							<Row className="mb-3">
								<Form.Group as={Col} md="8" controlId="validationCustom01">
									<label htmlFor="name-input" className="form-label">
										City
									</label>
									<input
										type="text"
										className={`form-control ${error ? 'is-invalid' : ''}`}
										id="name-input"
										name="city"
										value={city}
										onChange={handleCityChange}
									/>
								</Form.Group>
								<Form.Group as={Col} md="4" controlId="validationCustom01">
									<label htmlFor="name-input" className="form-label">
										Zip
									</label>
									<input
										type="text"
										className={`form-control ${error ? 'is-invalid' : ''}`}
										id="name-input"
										name="zip"
										value={zip}
										onChange={handleZipChange}
									/>
								</Form.Group>
							</Row>
							<Row className="mb-3">
								<Form.Group as={Col} md="12" controlId="validationCustom01">
									<label htmlFor="name-input" className="form-label">
										E-mail
									</label>
									<input
										type="text"
										className={`form-control ${error ? 'is-invalid' : ''}`}
										id="name-input"
										name="username"
										value={email}
										onChange={handleEmailChange}
									/>
								</Form.Group>
							</Row>
							<Row className="mb-3">
								<Form.Group as={Col} md="12" controlId="validationCustom01">
									<label htmlFor="password-input" className="form-label">
										Password
									</label>
									<input
										type="password"
										className={`form-control ${error ? 'is-invalid' : ''}`}
										id="password-input"
										name="password"
										value={password}
										onChange={handlePasswordChange}
									/>
								</Form.Group>
							</Row>

							<Row className="mb-3">
								<Form.Group as={Col} md="12" controlId="validationCustom01">
									<label htmlFor="password-repeat-input" className="form-label">
										Repeat password
									</label>
									<input
										type="password"
										className={`form-control ${error ? 'is-invalid' : ''}`}
										id="password-repeat-input"
										name="passwordRepeat"
										value={passwordRepeat}
										onChange={handlePasswordRepeatChange}
									/>
								</Form.Group>
							</Row>
							<Row className="mb-3">
								<Form.Group as={Col} md="8" controlId="validationCustom01">
									<Form.Check
										name="checked"
										className={`form-control}`}
										checked={setter}
										onChange={IsSetter}
										label="I'm ready to adopt a dog for a while."
										feedbackType="invalid"
									/>
								</Form.Group>

								<Form.Group as={Col} md="4">
									{/* <label htmlFor="size"></label> */}
									<Form.Select
										aria-label="Default select example"
										className={`form-control }`}
										id="size-input"
										name="size"
										value={size}
										onChange={(e) => setSize(e.target.value)}
									>
										<option value="" disabled>
											Size Of Dog
										</option>
										<option value="A_MINI">MINI</option>
										<option value="B_SMALL">SMALL</option>
										<option value="C_MIDDLE">MIDDLE</option>
										<option value="D_BIG">BIG</option>
										<option value="E_GREAT">GREAT</option>
									</Form.Select>
								</Form.Group>
							</Row>
							<button type="submit" className="btn btn-primary">
								Registration
							</button>
						</form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>

				<Button variant="primary" onClick={handleShowConf} className={styles.qwertymodal}>
					Launch demo modal
				</Button>
			</div>

			<Modal show={showConf} onHide={handleCloseConf}>
				<Modal.Header closeButton>
					<Modal.Title>Окончание регистрации</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Hallo, {userName} для завершения регистрации зайдите почту {email} и перейдите по
					отправленной ссылке.
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCloseConf}>
						Ok
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
export default Register;
