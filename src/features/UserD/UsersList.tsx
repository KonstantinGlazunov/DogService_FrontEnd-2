import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectUsers } from './selectors';
import { loadUsers } from './usersSlice';
import s from '../../features/Features.module.css';

export default function UsersList(): JSX.Element {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();
  const [isListOpen, setIsListOpen] = useState(false);
  
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;

  const handleClick = async (): Promise <void> => {
		dispatch(loadUsers());
    setIsListOpen(!isListOpen);
	};

  const handleClickClosed = (): void => {
    setIsListOpen(false);
  };

  const startIndex = (page - 1) * itemsPerPage;
	const endIndex = page * itemsPerPage;
	const currentAllUsers = users.slice(startIndex, endIndex);

    useEffect(() => {
		setIsListOpen(false);
	}, [page]);


  return (
    <div className={`${s.liContainer}  ${isListOpen ? s.background : s.closed}`}>
      <div className={s.btnforlist}>
       <div className={s.btnList}>
       <button type="submit" onClick={handleClick} className={s.btn}>
          {isListOpen ? 'Скрыть список клиник' : 'Показать список клиник'}
        </button>
			</div>
			<div className={s.closeBtn}>
				<button type='submit' onClick={handleClickClosed}>Закрыть</button>
			</div>
			</div>
      {isListOpen && (
      <ul className={s.lList}>
      {currentAllUsers.map((users) => (
        <li key={String(users.id)} className={s.liItem}>
          <div className={s.dogName}>{users.userName}</div>
            <div>{users.role}</div>
            <div>{users.email}</div>
        </li>
      ))}
      </ul>
      )}
      <div className={s.pagination}>
        {Array.from({ length: Math.ceil(users.length / itemsPerPage) }).map((_, index) => (
          <button key={index} onClick={() => setPage(index + 1)}>
            {index + 1}
          </button>
        ))}
    </div>
    </div>
  )
}
