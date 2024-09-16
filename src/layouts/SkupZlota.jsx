import NavBar from '../components/NavBar';
import Table from '../components/Table';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';

const SkupZlota = () => {
	const { t } = useTranslation();
	const [metals, setMetals] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const data = {
			table_id: 'metal',
		};
		axios
			.post('/data.php', data, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then(response => {
				setMetals(response.data.data);
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
					<NavBar title={t('header_nav-1')} />
					<Table
						data={metals}
						title={t('table_2-title')}
						ft={t('table_2-ft')}
						st={t('table_2-st')}
						tt={t('table_2-tt')}
					/>
				</>
			)}
		</>
	);
};

export default SkupZlota;
