import parse from 'html-react-parser';
import { useTranslation } from 'react-i18next';

const Contacts = () => {
	const { t } = useTranslation();

	return (
		<section className='rounded-[10px] bg-[#141414] p-5 mb-4' id='contacts'>
			<h2 className='section_title mb-5'>{t('contact_title')}</h2>
			<div className='flex lg:flex-row flex-col items-start gap-5 justify-between'>
				<div className='flex lg:flex-col flex-wrap md:flex-row flex-col gap-4 2xl:w-[500px] lg:w-[360px] w-full'>
					<a
						className='bg-white text-center font-semibold text-black px-2 py-4 rounded-[5px]'
						href='https://t.me/manager_kantorx'
					>
						{t('tg_contact')}
					</a>

					<div className='flex items-center justify-start p-4 rounded-[5px] leading-[26px] bg-[#060606] w-full lg:text-base text-sm'>
						{parse(t('contact_address'))}
					</div>

					<div className='flex items-center md:justify-center lg:justify-start p-4 rounded-[5px] leading-[26px] bg-[#060606] w-full lg:text-base text-sm'>
						+48 791 901 979
					</div>

					<div className='flex items-center justify-start p-4 rounded-[5px] leading-[26px] bg-[#060606] w-full lg:text-base text-sm'>
						{parse(t('contact_schedule'))}
					</div>
				</div>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.6130575003167!2d20.989535476663683!3d52.23224747198715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecdf851d48f8f%3A0xbd0db9b3a60d5b44!2sKantor%20X%20Exchange!5e0!3m2!1suk!2sua!4v1721316286748!5m2!1suk!2sua'
					height='354'
					style={{ border: '0', borderRadius: '5px', width: '100%' }}
					allowFullScreen
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
				></iframe>
			</div>
		</section>
	);
};

export default Contacts;
