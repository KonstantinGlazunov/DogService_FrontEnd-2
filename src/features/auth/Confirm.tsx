/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable import/default */
import React, { useEffect } from 'react';
import * as api from './api';
// eslint-disable-next-line import/default
import { useSearchParams } from 'react-router-dom';
import User from './types/User';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type

async function confirm(): Promise<User> {
	const url = window.location.href;

	const kod = url.substring(url.indexOf('?') + 4);

	const res = await fetch('/api/users/confirm/' + kod);

	if (res.status >= 400) {
		// достаем текст ошибки из ответа
		const { message }: { message: string } = await res.json();
		throw new Error(message);
	}
	return res.json();
}

/* eslint-disable prettier/prettier */
const Confirm = (): JSX.Element => {
	const navigate = useNavigate();

	useEffect(() => {
		confirm();
		navigate('/');
	}, []);

	return (
		<>
			<h1>КОНФИРМ</h1>
		</>
	);
};
export default Confirm;
