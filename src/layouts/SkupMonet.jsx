import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Loader from '../components/Loader';
import NavBar from '../components/NavBar';
import Table from '../components/Table';

const SkupMonet = () => {
	const { t } = useTranslation();
	const [money, setMoney] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const data = {
			table_id: 'coin',
		};
		axios
			.post('/data.php', data, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then(response => {
				setMoney(response.data.data);
				setIsLoading(false);
			})
			.catch(error => {
				console.error(error);
				setIsLoading(false);
			});
	}, []);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<NavBar title={t('header_nav-2')} />
					<Table
						data={money}
						title={t('table_3-title')}
						ft={t('table_3-ft')}
						st={t('table_3-st')}
						tt={t('table_3-tt')}
					/>
				</>
			)}
		</>
	);
};

export default SkupMonet;
