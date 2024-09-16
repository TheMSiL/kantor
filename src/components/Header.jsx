import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import inst from '../assets/inst.svg';
import logo from '../assets/logo.svg';
import tg from '../assets/tg.svg';
import twitter from '../assets/twitter.svg';

const Header = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [dropdownLangOpen, setDropdownLangOpen] = useState(false);
	const [showBurger, setShowBurger] = useState(false);
	const [savedLanguage, setSavedLanguage] = useState('pl');

	const { i18n, t } = useTranslation();

	const languages = [
		{ code: 'PL', name: 'Polski' },
		{ code: 'EN', name: 'English' },
		{ code: 'UA', name: 'Українська' },
	];


	const handleLanguageChange = code => {
		i18n.changeLanguage(code.toLowerCase());
		localStorage.setItem('language', code.toLowerCase());
		setDropdownLangOpen(false);
	};

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	return (
		<header className='flex items-center justify-between py-5 gap-5 xl:gap-10'>
			<NavLink className='block' to='/'>
				<img className='w-[180px]' src={logo} alt='logo' />
			</NavLink>
			<nav>
				<ul className='lg:flex hidden items-center gap-5'>
					<li className='leading-[26px] xl:text-base text-sm duration-300 hover:text-[#FF9900]'>
						<NavLink to='/skup-zlota'>{t('header_nav-1')}</NavLink>
					</li>
					<li className='leading-[26px] xl:text-base text-sm duration-300 hover:text-[#FF9900]'>
						<NavLink to='/skup-monet'>{t('header_nav-2')}</NavLink>
					</li>
					<li className='relative leading-[26px] xl:text-base text-sm cursor-pointer duration-300 hover:text-[#FF9900]'>
						<div
							onClick={toggleDropdown}
							className='flex items-center xl:text-base text-sm'
						>
							<a>{t('header_nav-3')}</a>
							<svg
								className={`ml-2 duration-300 ${
									dropdownOpen ? 'transform rotate-180' : ''
								}`}
								xmlns='http://www.w3.org/2000/svg'
								width='10'
								height='5'
								viewBox='0 0 10 5'
								fill='none'
							>
								<path
									d='M9.89768 0.0966184C9.75986 -0.0322061 9.53589 -0.0322061 9.39806 0.0966184L5.00483 4.21095L0.602992 0.0966184C0.465165 -0.0322061 0.241197 -0.0322061 0.10337 0.0966184C-0.0344567 0.225443 -0.0344567 0.434783 0.10337 0.563607L4.74641 4.90338C4.81532 4.96779 4.90146 5 4.99622 5C5.08236 5 5.17712 4.96779 5.24603 4.90338L9.88907 0.563607C10.0355 0.434783 10.0355 0.225443 9.89768 0.0966184Z'
									fill='white'
								/>
							</svg>
						</div>
						{dropdownOpen && (
							<ul className='absolute xl:text-base text-sm left-0 z-20 mt-2 w-[320px] border border-black bg-white text-black shadow-lg rounded-[10px] overflow-hidden'>
								<li
									className='p-2 hover:bg-gray-200 uppercase'
									onClick={() => setDropdownOpen(!dropdownOpen)}
								>
									<NavLink to='/kurs-euro-sprzedaz-kantor-warszawa'>
										{t('header_nav-3-1')}
									</NavLink>
								</li>
								<li
									className='p-2 hover:bg-gray-200 uppercase'
									onClick={() => setDropdownOpen(!dropdownOpen)}
								>
									<NavLink to='/korona-czeska-kantor-warszawa'>
										{t('header_nav-3-2')}
									</NavLink>
								</li>
								<li
									className='p-2 hover:bg-gray-200 uppercase'
									onClick={() => setDropdownOpen(!dropdownOpen)}
								>
									<NavLink to='/kurs-hrywny-kantor-warszawa'>
										{t('header_nav-3-3')}
									</NavLink>
								</li>
								<li
									className='p-2 hover:bg-gray-200 uppercase'
									onClick={() => setDropdownOpen(!dropdownOpen)}
								>
									<NavLink to='/skup-monet-kolekcjonerskich-warszawa'>
										{t('header_nav-3-4')}
									</NavLink>
								</li>
								<li
									className='p-2 hover:bg-gray-200 uppercase'
									onClick={() => setDropdownOpen(!dropdownOpen)}
								>
									<NavLink to='/skup-zlota-warszawa-najlepsza-cena'>
										{t('header_nav-3-5')}
									</NavLink>
								</li>
							</ul>
						)}
					</li>
					<li className='leading-[26px] xl:text-base text-sm duration-300 hover:text-[#FF9900]'>
						<a href='/#info'>{t('header_nav-4')}</a>
					</li>
					<li className='leading-[26px] xl:text-base text-sm duration-300 hover:text-[#FF9900]'>
						<a href='#contacts'>{t('header_nav-5')}</a>
					</li>
				</ul>
			</nav>
			<div className='flex items-center gap-3 sm:gap-5 xl:text-base text-sm'>
				<a
					className=' duration-300 hover:text-[#FF9900] lg:block hidden'
					href='tel:+48 791 901 979'
				>
					+48 791 901 979
				</a>
				<a
					className=' duration-300 hover:scale-105'
					href='https://t.me/manager_kantorx'
				>
					<img src={tg} alt='tg' />
				</a>
				<a className=' duration-300 hover:scale-105' href='#'>
					<img src={inst} alt='inst' />
				</a>
				<a className=' duration-300 hover:scale-105' href='#'>
					<img src={twitter} alt='twitter' />
				</a>
				<div className='relative w-5'>
					<button
						className='rounded py-2 shadow cursor-pointer'
						onClick={() => setDropdownLangOpen(!dropdownLangOpen)}
					>
						{savedLanguage.toUpperCase()}
					</button>

					{dropdownLangOpen && (
						<div className='absolute right-0 z-20 bg-white text-black border rounded shadow-md mt-2 w-32'>
							{languages.map(lang => (
								<div
									key={lang.code}
									className='p-2 hover:bg-gray-200 cursor-pointer'
									onClick={() => {
										handleLanguageChange(lang.code);
										setSavedLanguage(lang.code);
									}}
								>
									{lang.name}
								</div>
							))}
						</div>
					)}
				</div>
				<svg
					onClick={() => setShowBurger(!showBurger)}
					className='lg:hidden block cursor-pointer z-50'
					xmlns='http://www.w3.org/2000/svg'
					width='28'
					height='20'
					viewBox='0 0 28 20'
					fill='none'
				>
					<path
						d='M1 0H27C27.2652 0 27.5196 0.105357 27.7071 0.292893C27.8946 0.48043 28 0.734784 28 1C28 1.26522 27.8946 1.51957 27.7071 1.70711C27.5196 1.89464 27.2652 2 27 2H1C0.734783 2 0.480429 1.89464 0.292892 1.70711C0.105356 1.51957 0 1.26522 0 1C0 0.734784 0.105356 0.48043 0.292892 0.292893C0.480429 0.105357 0.734783 0 1 0Z'
						fill='white'
					/>
					<path
						d='M27 11H14C13.7348 11 13.4804 10.8946 13.2929 10.7071C13.1054 10.5196 13 10.2652 13 10C13 9.73478 13.1054 9.48043 13.2929 9.29289C13.4804 9.10536 13.7348 9 14 9H27C27.2652 9 27.5196 9.10536 27.7071 9.29289C27.8946 9.48043 28 9.73478 28 10C28 10.2652 27.8946 10.5196 27.7071 10.7071C27.5196 10.8946 27.2652 11 27 11Z'
						fill='white'
					/>
					<path
						d='M5 18H27C27.2652 18 27.5196 18.1054 27.7071 18.2929C27.8946 18.4804 28 18.7348 28 19C28 19.2652 27.8946 19.5196 27.7071 19.7071C27.5196 19.8946 27.2652 20 27 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19C4 18.7348 4.10536 18.4804 4.29289 18.2929C4.48043 18.1054 4.73478 18 5 18Z'
						fill='white'
					/>
				</svg>
			</div>

			<div className={showBurger ? 'overlay show' : 'overlay'}>
				<ul className='flex flex-col items-center gap-5 uppercase'>
					<li
						className='leading-[26px]  duration-300 hover:text-[#FF9900]'
						onClick={() => setShowBurger(!showBurger)}
					>
						<NavLink to='/skup-zlota'>{t('header_nav-1')}</NavLink>
					</li>
					<li
						className='leading-[26px]  duration-300 hover:text-[#FF9900]'
						onClick={() => setShowBurger(!showBurger)}
					>
						<NavLink to='/skup-monet'>{t('header_nav-2')}</NavLink>
					</li>
					<li className='relative leading-[26px] xl:text-base text-sm cursor-pointer duration-300 hover:text-[#FF9900]'>
						<div
							onClick={toggleDropdown}
							className='flex items-center xl:text-base text-sm'
						>
							<a>{t('header_nav-3')}</a>
							<svg
								className={`ml-2 duration-300 ${
									dropdownOpen ? 'transform rotate-180' : ''
								}`}
								xmlns='http://www.w3.org/2000/svg'
								width='10'
								height='5'
								viewBox='0 0 10 5'
								fill='none'
							>
								<path
									d='M9.89768 0.0966184C9.75986 -0.0322061 9.53589 -0.0322061 9.39806 0.0966184L5.00483 4.21095L0.602992 0.0966184C0.465165 -0.0322061 0.241197 -0.0322061 0.10337 0.0966184C-0.0344567 0.225443 -0.0344567 0.434783 0.10337 0.563607L4.74641 4.90338C4.81532 4.96779 4.90146 5 4.99622 5C5.08236 5 5.17712 4.96779 5.24603 4.90338L9.88907 0.563607C10.0355 0.434783 10.0355 0.225443 9.89768 0.0966184Z'
									fill='white'
								/>
							</svg>
						</div>
						{dropdownOpen && (
							<ul className='absolute xl:text-base text-sm left-10 transform -translate-x-1/2 z-20 mt-2 w-[290px] border border-black bg-white text-black shadow-lg rounded-[10px] overflow-hidden'>
								<li
									className='p-2 hover:bg-gray-200 uppercase'
									onClick={() => {
										setDropdownOpen(!dropdownOpen);
										setShowBurger(!showBurger);
									}}
								>
									<NavLink to='/kurs-euro-sprzedaz-kantor-warszawa'>
										{t('header_nav-3-1')}
									</NavLink>
								</li>
								<li
									className='p-2 hover:bg-gray-200 uppercase'
									onClick={() => {
										setDropdownOpen(!dropdownOpen);
										setShowBurger(!showBurger);
									}}
								>
									<NavLink to='/korona-czeska-kantor-warszawa'>
										{t('header_nav-3-2')}
									</NavLink>
								</li>
								<li
									className='p-2 hover:bg-gray-200 uppercase'
									onClick={() => {
										setDropdownOpen(!dropdownOpen);
										setShowBurger(!showBurger);
									}}
								>
									<NavLink to='/kurs-hrywny-kantor-warszawa'>
										{t('header_nav-3-3')}
									</NavLink>
								</li>
								<li
									className='p-2 hover:bg-gray-200 uppercase'
									onClick={() => {
										setDropdownOpen(!dropdownOpen);
										setShowBurger(!showBurger);
									}}
								>
									<NavLink to='/skup-monet-kolekcjonerskich-warszawa'>
										{t('header_nav-3-4')}
									</NavLink>
								</li>
								<li
									className='p-2 hover:bg-gray-200 uppercase'
									onClick={() => {
										setDropdownOpen(!dropdownOpen);
										setShowBurger(!showBurger);
									}}
								>
									<NavLink to='/skup-zlota-warszawa-najlepsza-cena'>
										{t('header_nav-3-5')}
									</NavLink>
								</li>
							</ul>
						)}
					</li>
					<li
						className='leading-[26px]  duration-300 hover:text-[#FF9900]'
						onClick={() => setShowBurger(!showBurger)}
					>
						<a href='/#info'>{t('header_nav-4')}</a>
					</li>
					<li
						className='leading-[26px]  duration-300 hover:text-[#FF9900]'
						onClick={() => setShowBurger(!showBurger)}
					>
						<a href='#contacts'>{t('header_nav-5')}</a>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
