import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Futer from '../Futer/Futer';

function Main(): JSX.Element {
	return (
		<>
			<Navbar />
			<Outlet />
			<Futer />
			{/* <footer>Здесь будет футер</footer> */}
		</>
	);
}

export default Main;
