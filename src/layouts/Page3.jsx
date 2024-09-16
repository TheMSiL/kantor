import NavBar from '../components/NavBar';
import Page3Article from '../components/Page3Article';
import { useTranslation } from 'react-i18next';

const Page3 = () => {
	const { t } = useTranslation();

	return (
		<>
			<NavBar title={t('header_nav-3-3')} />
			<Page3Article />
		</>
	);
};

export default Page3;
