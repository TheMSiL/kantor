import { useTranslation } from 'react-i18next';

const Page1Article = () => {
	const { t } = useTranslation();

	return (
		<section className='rounded-[10px] bg-[#141414] p-5 mb-8'>
			<h2 className='section_title'>{t('page_1-title')}</h2>
			<p className='leading-[26px] mb-5'>{t('page_1-text-1')}</p>
			<p className='leading-[26px] mb-5 font-semibold'>{t('page_1-text-2')}</p>
			<p className='leading-[26px] mb-5'>{t('page_1-text-3')}</p>
			<p className='leading-[26px] mb-5'>{t('page_1-text-4')}</p>
			<p className='leading-[26px] mb-5'>{t('page_1-text-5')}</p>
			<p className='leading-[26px] mb-5 font-semibold'>{t('page_1-text-6')}</p>
			<p className='leading-[26px] mb-5'>{t('page_1-text-7')}</p>
			<p className='leading-[26px] mb-5'>{t('page_1-text-8')}</p>
			<p className='leading-[26px] mb-5'>{t('page_1-text-9')}</p>
			<p className='leading-[26px]'>{t('page_1-text-10')}</p>
		</section>
	);
};

export default Page1Article;
