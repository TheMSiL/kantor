import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ArticleHome from '../components/Home/ArticleHome';
import Main from '../components/Main';
import Table from '../components/Table';
import Loader from '../components/Loader';

const HomePage = () => {
	const { t } = useTranslation();
	const [exchange_rates, setExchange_rates] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const data = {
			table_id: 'currency',
		};
		axios
			.post('/data.php', data, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then(response => {
				setExchange_rates(response.data.data);
				setIsLoading(false);
			})
			.catch(error => {
				console.error(error);
				setIsLoading(false);
			});
	}, []);

	return (
		<>
			<Main />
			{isLoading ? (
				<Loader />
			) : (
				<Table
					data={exchange_rates}
					title={t('table_1-title')}
					ft={t('table_1-ft')}
					st={t('table_1-st')}
					tt={t('table_1-tt')}
					id=''
				/>
			)}
			<ArticleHome />
		</>
	);
};

export default HomePage;
