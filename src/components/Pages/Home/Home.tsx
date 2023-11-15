/* eslint-disable prettier/prettier */
import Carousels from './Carousels/Carousels';
import Contents from './Content/Contents';
import Sitters from '../Sitters/Sitters';
import GetSittersForm from '../../../features/dogsitters/GetSittersForm';
import SittersPage from '../../../features/dogsitters/SittersPage';

// eslint-disable-next-line prettier/prettier
const Home = (): JSX.Element => {
	return (
		<div>
			<Carousels />
			<GetSittersForm />
			<SittersPage />
			{/* <Sitters /> */}
			{/* <Contents /> */}
		</div>
	);
};
export default Home;
