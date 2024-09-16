import NavBar from '../components/NavBar';
import Page4Article from '../components/Page4Article';
import { useTranslation } from 'react-i18next';

const Page4 = () => {
	const { t } = useTranslation();

	return (
		<>
			<NavBar title={t('header_nav-3-4')} />
			<Page4Article />
		</>
	);
};

export default Page4;
