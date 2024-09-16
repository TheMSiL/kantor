import { Outlet } from 'react-router-dom';
import Contacts from './components/Contacts';
import Header from './components/Header';
import { ScrollRestoration } from './components/ScrollRestoration';

const Layout = () => {
	return (
		<ScrollRestoration>
			<div className='wrapper'>
				<div className='content'>
					<Header />
					<Outlet></Outlet>
					<Contacts />
					<span className='sm:text-sm text-xs mb-4 block text-center'>
						COPYRIGHT 2024 KANTORX, CREATED BY SITEOST.COM
					</span>
				</div>
			</div>
		</ScrollRestoration>
	);
};

export default Layout;
