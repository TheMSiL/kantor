import axios from 'axios';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const AdminPage = () => {
	const [password, setPassword] = useState('');
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [table, setTable] = useState('');
	const [items, setItems] = useState([]);
	const [item, setItem] = useState('');
	const [itemId, setItemId] = useState('');
	const [sell, setSell] = useState('');
	const [purchase, setPurchase] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	const [error, setError] = useState('');
	const { t } = useTranslation();

	const handlePasswordSubmit = () => {
		if (password === '12312345') {
			setIsAuthenticated(true);
			setError('');
		} else {
			setError('Try again');
			setIsAuthenticated(false);
		}
	};

	if (!isAuthenticated) {
		return (
			<section className='py-[100px]'>
				<h2 className='text-center text-3xl mb-10'>{t('admin_login-title')}</h2>
				<div className='flex flex-col items-center gap-10 justify-center mb-10'>
					<input
						type='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						placeholder={t('admin_login-title')}
						className='block appearance-none w-64 bg-white border text-black border-gray-400 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
					/>
					<button
						onClick={handlePasswordSubmit}
						className='bg-white flex items-center justify-center font-semibold mx-auto border text-black border-gray-400 px-4 py-2 rounded shadow leading-tight'
					>
						{t('admin_login-title')}
					</button>
					{error && (
						<div className='text-center capitalize text-red-500 mt-5'>
							{error}
						</div>
					)}
				</div>
			</section>
		);
	}

	const handleSelectChange = event => {
		const selectedTable = event.target.value;
		setTable(selectedTable);
		if (selectedTable) {
			const data = {
				table_id: selectedTable,
			};
			axios
				.post('/data.php', data, {
					headers: {
						'Content-Type': 'application/json',
					},
				})
				.then(response => {
					setItems(response.data.data);
				})
				.catch(error => {
					console.error(error);
				});
		}
	};

	const handleItemChange = event => {
		const selectedItem = event.target.value;
		setItem(selectedItem);
		const selected = items.find(i =>
			i.title ? i.title === selectedItem : i.Currency === selectedItem
		);
		if (selected) {
			setItemId(selected.id);
			setPurchase(selected.purchase_price);
			setSell(selected.sale_price);
		}
	};
	const sent = () => {
		let data = {
			table_id: table,
			name: itemId,
			purchase_price: purchase,
			sale_price: sell,
		};

		axios
			.post('/update.php', data, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then(response => {
				setSuccessMessage(t('success'));
				setTimeout(() => {
					setSuccessMessage('');
				}, 2000);
			})
			.catch(error => {
				console.error(error);
			});
	};

	return (
		<section className='py-[100px]'>
			<h2 className='text-center text-3xl mb-10'>{t('admin_table-title')}</h2>
			<div className='flex flex-col items-center gap-10 justify-center mb-10'>
				<div className='relative inline-block w-64'>
					<select
						value={table}
						onChange={handleSelectChange}
						className='block appearance-none w-full lowercase bg-white border text-black border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
					>
						<option value=''>{t('admin_table-title')}</option>
						<option value='currency'>{t('table_1-title')}</option>
						<option value='metal'>{t('table_2-title')}</option>
						<option value='coin'>{t('table_3-title')}</option>
					</select>
					<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
						<svg
							className='fill-current h-4 w-4'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
						>
							<path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
						</svg>
					</div>
				</div>
				{table && items.length > 0 && (
					<div className='relative inline-block w-64'>
						<select
							value={item}
							onChange={handleItemChange}
							className='block appearance-none w-full bg-white border text-black border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
						>
							<option value=''>{t('admin_select-title')}</option>
							{items.map(i => (
								<option key={i.id} value={i.title ? i.title : i.Currency}>
									{i.title ? t(i.title) : i.Currency}
								</option>
							))}
						</select>
						<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
							<svg
								className='fill-current h-4 w-4'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
							>
								<path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
							</svg>
						</div>
					</div>
				)}
				{item && (
					<div className='flex items-center gap-5'>
						<div className='flex flex-col items-start gap-3'>
							<p>{t('admin_buy')}</p>
							<input
								className='block appearance-none w-full bg-white border text-black border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
								type='text'
								value={purchase}
								onChange={e => setPurchase(e.target.value)}
							/>
						</div>
						<div className='flex flex-col items-start gap-3'>
							<p>{t('admin_sell')}</p>
							<input
								className='block appearance-none w-full bg-white border text-black border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
								type='text'
								value={sell}
								onChange={e => setSell(e.target.value)}
							/>
						</div>
					</div>
				)}
			</div>
			{(sell || purchase) && (
				<button
					onClick={sent}
					className='bg-white flex items-center justify-center font-semibold mx-auto border text-black border-gray-400 px-4 py-2 rounded shadow leading-tight'
				>
					{t('admin_btn')}
				</button>
			)}
			{successMessage && (
				<div className='text-center capitalize text-green-500 mt-5'>
					{successMessage}
				</div>
			)}
		</section>
	);
};

export default AdminPage;
