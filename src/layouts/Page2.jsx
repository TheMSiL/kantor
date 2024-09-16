import NavBar from '../components/NavBar';
import Page2Article from '../components/Page2Article';
import { useTranslation } from 'react-i18next';

const Page2 = () => {
	const { t } = useTranslation();

	return (
		<>
			<NavBar title={t('header_nav-3-2')} />
			<Page2Article />
		</>
	);
};

export default Page2;
