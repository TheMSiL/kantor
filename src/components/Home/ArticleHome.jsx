import { useTranslation } from 'react-i18next';

const ArticleHome = () => {
	const { t } = useTranslation();

	return (
		<section className='rounded-[10px] bg-[#141414] p-5 mb-8' id='info'>
			<h2 className='section_title'>{t('home_article-title')}</h2>
			<p className='leading-[26px] sm:text-base text-sm'>
				{t('home_article-text')}
			</p>
		</section>
	);
};

export default ArticleHome;
