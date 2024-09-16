import NavBar from '../components/NavBar';
import Page5Article from '../components/Page5Article';
import { useTranslation } from 'react-i18next';

const Page5 = () => {
	const { t } = useTranslation();

	return (
		<>
			<NavBar title={t('header_nav-3-5')} />
			<Page5Article />
		</>
	);
};

export default Page5;
