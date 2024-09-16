import { useTranslation } from 'react-i18next';

const Page5Article = () => {
	const { t } = useTranslation();

	return (
		<section className='rounded-[10px] bg-[#141414] p-5 mb-8'>
			<h2 className='section_title'>{t('page_5-title')}</h2>
			<p className='leading-[26px] mb-5'>{t('page_5-text-1')}</p>
			<p className='leading-[26px] mb-5 font-semibold'>{t('page_5-text-2')}</p>
			<p className='leading-[26px] mb-5'>{t('page_5-text-3')}</p>
			<p className='leading-[26px] mb-5'>{t('page_5-text-4')}</p>
			<p className='leading-[26px] mb-5 font-semibold'>{t('page_5-text-5')}</p>
			<p className='leading-[26px] mb-5'>{t('page_5-text-6')}</p>
			<p className='leading-[26px] mb-5'>{t('page_5-text-7')}</p>
			<p className='leading-[26px] mb-5'>{t('page_5-text-8')}</p>
			<p className='leading-[26px]'>{t('page_5-text-9')}</p>
		</section>
	);
};

export default Page5Article;
