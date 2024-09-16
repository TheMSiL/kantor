import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import change from '../assets/change.svg';

const ExchangeForm = () => {
	const [serverCurrencies, setServerCurrencies] = useState([]);
	const [fromCurrency, setFromCurrency] = useState({
		Currency: 'PLN',
		sale_price: 1,
		path: 'https://svgshare.com/i/18iF.svg',
	});
	const [toCurrency, setToCurrency] = useState({});
	const [amount, setAmount] = useState(0);
	const [result, setResult] = useState('');
	const [dropdownOpen, setDropdownOpen] = useState({ from: false, to: false });
	const [isTouched, setIsTouched] = useState(false);
	const { t } = useTranslation();

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
				setServerCurrencies(response.data.data);
				setToCurrency(response.data.data[0]);
			})
			.catch(error => {
				console.error(error);
			});
	}, []);

	const currencies = [
		{
			Currency: 'PLN',
			sale_price: 1,
			path: 'https://svgshare.com/i/18iF.svg',
		},
		...serverCurrencies,
	];

	const handleExchange = () => {
		const exchangeRate = fromCurrency?.sale_price / toCurrency?.sale_price;
		setResult(amount * exchangeRate);
	};

	useEffect(() => {
		handleExchange();
	}, [fromCurrency, toCurrency, amount]);

	const handleSwap = () => {
		const temp = fromCurrency;
		setFromCurrency(toCurrency);
		setToCurrency(temp);
		handleExchange();
		setIsTouched(true);
	};

	const handleAmountChange = e => {
		setAmount(e.target.value);
		const exchangeRate = fromCurrency?.sale_price / toCurrency?.sale_price;
		setResult(e.target.value * exchangeRate);
		setIsTouched(true);
	};

	const handleCurrencyChange = (currency, type) => {
		if (type === 'from') {
			setFromCurrency(currency);
			if (currency?.Currency !== 'PLN' && toCurrency?.Currency === 'PLN') {
				setToCurrency(currencies[0]);
			} else if (currency?.Currency !== 'PLN') {
				setToCurrency(currencies[0]);
			}
		} else {
			setToCurrency(currency);
			if (currency?.Currency !== 'PLN' && fromCurrency?.Currency === 'PLN') {
				setFromCurrency(currencies[0]);
			} else if (currency?.Currency !== 'PLN') {
				setFromCurrency(currencies[0]);
			}
		}
		setDropdownOpen({ ...dropdownOpen, [type]: false });
		handleExchange();
		setIsTouched(true);
	};

	return (
		<div className='flex flex-col w-full md:w-auto'>
			<div className='grid'>
				<div className='flex flex-col items-center sm:items-start gap-4 bg-[#060606] rounded-[10px] p-5 mb-4'>
					<div className='flex sm:flex-row flex-col gap-[67px] sm:gap-[84px] relative'>
						<div className='flex flex-col items-start gap-3 relative z-10'>
							<div className='relative '>
								<p className='text-sm font-medium mb-4'>{t('form_1')}</p>
								<div
									className='bg-white p-4 w-[250px] h-[75px] cursor-pointer text-black text-[19px] font-semibold flex items-center gap-4 rounded-[5px] shadow-input'
									onClick={() =>
										setDropdownOpen({
											...dropdownOpen,
											from: !dropdownOpen.from,
										})
									}
								>
									<img
										width={30}
										src={fromCurrency?.path}
										alt={fromCurrency?.Currency}
									/>
									{fromCurrency?.Currency}{' '}
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='12'
										height='8'
										viewBox='0 0 12 8'
										fill='none'
									>
										<path
											d='M10.293 0.292969L5.99997 4.58597L1.70697 0.292969L0.292969 1.70697L5.99997 7.41397L11.707 1.70697L10.293 0.292969Z'
											fill='black'
										/>
									</svg>
								</div>
								{dropdownOpen.from && (
									<div className='absolute z-10 h-[195px] overflow-y-auto overflow-x-hidden top-[54px] bg-white w-[250px] rounded-md'>
										{currencies.map(currency => (
											<div
												key={currency?.Currency}
												className='p-4 cursor-pointer w-[250px] hover:bg-gray-200 text-black text-[19px] font-semibold'
												onClick={() => handleCurrencyChange(currency, 'from')}
											>
												<img
													src={currency?.path}
													alt={currency?.Currency}
													className='mr-4 inline-block'
													width={30}
												/>
												{currency?.Currency}{' '}
											</div>
										))}
									</div>
								)}
							</div>
							<input
								type='number'
								value={amount}
								onChange={handleAmountChange}
								className='bg-white p-4 h-[75px] text-black text-[19px] w-[250px] font-semibold flex items-center gap-4 rounded-[5px] shadow-input'
								placeholder='0.00'
							/>
						</div>
						<div className='absolute w-[150px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:-translate-y-0 top-[53.5%] sm:top-[20%] h-[150px] flex items-center justify-center rounded-[150px] z-[4] bg-[#111318]'>
							<img
								className='cursor-pointer'
								src={change}
								onClick={handleSwap}
							/>
						</div>
						<div className='flex flex-col items-start gap-3 relative z-10'>
							<div className='relative'>
								<p className='text-sm font-medium mb-4'>{t('form_2')}</p>
								<div
									className='bg-white h-[75px] cursor-pointer p-4 w-[250px] text-black text-[19px] font-semibold flex items-center gap-4 rounded-[5px] shadow-input'
									onClick={() =>
										setDropdownOpen({ ...dropdownOpen, to: !dropdownOpen.to })
									}
								>
									<img
										width={30}
										src={toCurrency?.path}
										alt={toCurrency?.Currency}
									/>
									{toCurrency?.Currency}{' '}
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='12'
										height='8'
										viewBox='0 0 12 8'
										fill='none'
									>
										<path
											d='M10.293 0.292969L5.99997 4.58597L1.70697 0.292969L0.292969 1.70697L5.99997 7.41397L11.707 1.70697L10.293 0.292969Z'
											fill='black'
										/>
									</svg>
								</div>
								{dropdownOpen.to && (
									<div className='absolute z-10 h-[195px] overflow-y-auto top-[54px] bg-white w-[250px] rounded-md'>
										{currencies.map(currency => (
											<div
												key={currency?.Currency}
												className='p-4 cursor-pointer w-[250px] hover:bg-gray-200 text-black text-[19px] font-semibold'
												onClick={() => handleCurrencyChange(currency, 'to')}
											>
												<img
													src={currency?.path}
													alt={currency?.Currency}
													className='mr-4 inline-block'
													width={30}
												/>
												{currency?.Currency}{' '}
											</div>
										))}
									</div>
								)}
							</div>
							<input
								type='text'
								value={result !== '' ? result.toFixed(2) : ''}
								readOnly
								className='bg-white p-4 h-[75px] text-black text-[19px] w-[250px] font-semibold flex items-center gap-4 rounded-[5px] shadow-input'
								placeholder='0.00'
							/>
						</div>
					</div>
					<div className='text-center w-full'>
						{t('form_3')} 1 {fromCurrency?.Currency} ={' '}
						{(fromCurrency?.sale_price / toCurrency?.sale_price).toFixed(2)}{' '}
						{toCurrency?.Currency}
					</div>
				</div>
			</div>
			<a
				href='https://t.me/manager_kantorx'
				className={`block text-center p-4 text-black rounded-[5px] text-lg font-semibold duration-300 ${
					isTouched
						? 'bg-[#F90] hover:bg-[#ff9900d7] cursor-pointer'
						: 'bg-gray-400 cursor-not-allowed'
				}`}
				disabled={!isTouched}
			>
				{t('form_btn')}
			</a>
		</div>
	);
};

export default ExchangeForm;
