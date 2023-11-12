/* eslint-disable prettier/prettier */
import Carousels from './Carousels/Carousels';
import Contents from './Content/Contents';
import Sitters from '../Sitters/Sitters';

// eslint-disable-next-line prettier/prettier
const Home = (): JSX.Element => {
	return (
		<div>
			<Carousels />
			<Sitters />
			{/* <Contents /> */}
		</div>
	);
};
export default Home;
