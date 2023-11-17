/* eslint-disable prettier/prettier */
import Carousels from './Carousels/Carousels';
import Contents from './Content/Contents';
import Sitters from '../Sitters/Sitters';
import { useAppSelector } from '../../../app/hooks';
import { selectUser } from '../../../features/auth/selectors';
import Admin from '../AdminRoom/Admin';

import SittersPage from '../../../features/dogsitters/SittersPage';

// eslint-disable-next-line prettier/prettier
const Home = (): JSX.Element => {
	const user = useAppSelector(selectUser);

	return (
		<div>
			{user?.role === 'ADMIN' ? (
				<Admin />
			) : (
				<>
					<Carousels />
				  <SittersPage />
				</>
			)}
		</div>
	);
};
export default Home;
