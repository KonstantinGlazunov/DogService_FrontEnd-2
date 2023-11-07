/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prettier/prettier */
/* eslint-disable import/default */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { updateContact, sendContactMessage } from './contactSlice';

import s from './Contacts.module.css';
import mapIcon from '../../Futer/img/map.svg';
import phone from '../../Futer/img/phone.svg';
import envelope from '../../Futer/img/envelope.svg';

const Contact = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const { name, email, message, loading, buttonMessage } = useAppSelector(
		(state) => state.contacts
	);

	const initialForm = {
		name,
		email,
		message,
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(initialForm);
		setTimeout(() => {
			dispatch(sendContactMessage());
			dispatch(updateContact(initialForm));
		}, 1000);
	};

	const onchange = (
		e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		const updatedForm = { ...initialForm, [name]: value };
		dispatch(updateContact(updatedForm));
	};

	return (
		<div className={s.siteContact}>
			<section className={s.info}>
				<div className={s.container}>
					<div className={s.ftInfoItem}>
						<span className={s.ftInfoIcon}>
							<img src={mapIcon} alt="" className={s.ic} />
						</span>
						<span>Germany, Berlin</span>
					</div>

					<div className={s.ftInfoItem}>
						<span className={s.ftInfoIcon}>
							<img src={phone} alt="" className={s.ic} />
						</span>
						<span>+49 175 9587225</span>
					</div>

					<div className={s.ftInfoItem}>
						<span className={s.ftInfoIcon}>
							<img src={envelope} alt="" className={s.ic} />
						</span>
						<span>Petscare@gmail.com</span>
					</div>
				</div>
				<iframe
					className={s.map}
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d621713.9693875!2d12.766738699949475!3d52.505019409509735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2z0JHQtdGA0LvQuNC9!5e0!3m2!1sru!2sde!4v1698239461511!5m2!1sru!2sde"
					style={{ border: 0 }}
					allowFullScreen={true}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</section>

			<div className={s.serviceTop}>
				<div className={s.title}>Get in Touch!</div>
				<div className={s.sub}>
					Got a question, proposal or project or want to work <br /> together on something? Feel
					free to reach out.
				</div>
				<form onSubmit={onSubmit}>
					<div className={s.inputRow}>
						<div className={s.side}>
							<label htmlFor="name">Your Name</label>
							<input
								type="text"
								placeholder="What's your name?"
								name="name"
								required
								value={name}
								onChange={onchange}
							/>
						</div>
						<div className={s.side}>
							<label htmlFor="name">Your Email</label>
							<input
								type="email"
								placeholder="What's your Email?"
								name="email"
								required
								value={email}
								onChange={onchange}
							/>
						</div>
					</div>
					<div className={s.textarea}>
						<label htmlFor="message">Your Message</label>
						<textarea
							id="message"
							placeholder="Hello, I think we need you to work on/collaborate this pirticular product... React out as soon as you can."
							name="message"
							required
							value={message}
							onChange={onchange}
						/>
					</div>
					<button type="submit">{loading ? '' : buttonMessage}</button>
				</form>
			</div>
		</div>
	);
};
export default Contact;
