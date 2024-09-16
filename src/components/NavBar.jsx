import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavBar = ({ title }) => {
	const { t } = useTranslation();

	return (
		<div className='rounded-[10px] bg-[#141414] py-3 pl-4 flex items-center mb-5'>
			<NavLink
				className='pr-3 border-r sm:text-base text-sm border-r-white'
				to='/'
			>
				{t('nav_main')}
			</NavLink>
			<p className='pl-3 sm:text-base text-sm'>{title}</p>
		</div>
	);
};

export default NavBar;
