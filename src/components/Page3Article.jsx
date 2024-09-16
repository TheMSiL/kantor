import React from 'react';
import { useTranslation } from 'react-i18next';

const Page3Article = () => {
	const { t } = useTranslation();

	return (
		<section className='rounded-[10px] bg-[#141414] p-5 mb-8'>
			<h2 className='section_title'>{t('page_3-title')}</h2>
			<p className='leading-[26px] mb-5'>{t('page_3-text-1')}</p>
			<p className='leading-[26px] mb-5 font-semibold'>{t('page_3-text-2')}</p>
			<p className='leading-[26px] mb-5'>{t('page_3-text-3')}</p>
			<p className='leading-[26px] mb-5'>{t('page_3-text-4')}</p>
			<p className='leading-[26px] mb-5'>{t('page_3-text-5')}</p>
			<p className='leading-[26px] mb-5 font-semibold'>{t('page_3-text-6')}</p>
			<p className='leading-[26px] mb-5'>{t('page_3-text-7')}</p>
			<p className='leading-[26px]'>{t('page_3-text-8')}</p>
		</section>
	);
};

export default Page3Article;
