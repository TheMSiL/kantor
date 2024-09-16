import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './layouts/HomePage';
import Page1 from './layouts/Page1';
import Page2 from './layouts/Page2';
import Page3 from './layouts/Page3';
import Page4 from './layouts/Page4';
import Page5 from './layouts/Page5';
import SkupZlota from './layouts/SkupZlota';
import SkupMonet from './layouts/SkupMonet';
import AdminPage from './layouts/AdminPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				element: <HomePage />,
				index: true,
			},
			{
				element: <Page1 />,
				path: '/kurs-euro-sprzedaz-kantor-warszawa',
			},
			{
				element: <Page2 />,
				path: '/korona-czeska-kantor-warszawa',
			},
			{
				element: <Page3 />,
				path: '/kurs-hrywny-kantor-warszawa',
			},
			{
				element: <Page4 />,
				path: '/skup-monet-kolekcjonerskich-warszawa',
			},
			{
				element: <Page5 />,
				path: '/skup-zlota-warszawa-najlepsza-cena',
			},
			{
				element: <SkupZlota />,
				path: '/skup-zlota',
			},
			{
				element: <SkupMonet />,
				path: '/skup-monet',
			},
			{
				element: <AdminPage />,
				path: '/klj213hbv214sd8712bsad662qwe12',
			},
		],
	},
]);

export default router;
