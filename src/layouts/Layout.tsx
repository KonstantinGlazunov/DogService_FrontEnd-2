
import { Outlet } from 'react-router-dom';
import Navibar from '../components/Header/Navbar/Navibar';
import Futer from '../components/Futer/Futer';



export default function Layout(): JSX.Element {
	return (
		<>
			<header><Navibar /></header>	
			<Outlet />
			<footer><Futer /></footer>
		</>
	);
}
