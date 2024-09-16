import NavBar from '../components/NavBar';
import Page1Article from '../components/Page1Article';
import { useTranslation } from 'react-i18next';

const Page1 = () => {
	const { t } = useTranslation();

	return (
		<>
			<NavBar title={t('header_nav-3-1')} />
			<Page1Article />
		</>
	);
};

export default Page1;
