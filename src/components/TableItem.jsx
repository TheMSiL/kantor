const TableItem = ({ logo, title, purchase, sell }) => {
	return (
		<div className='leading-[26px] font-medium xl:text-base text-sm'>
			<div className='grid sm:grid-cols-3 overflow-hidden bg-[#060606] rounded-[5px]'>
				<div className=' py-3 pl-4 text-base xl:text-xl sm:border-r border-r-[#14161C] bg-[#060606]'>
					{logo && <img className='inline-block mr-3' src={logo} />}
					{title}
				</div>
				<div className='sm:block flex items-center justify-between py-3 px-4 sm:border-b-0 border-b border-b-[#14161C] sm:border-r border-r-[#14161C] bg-[#060606]'>
					<span className='sm:hidden block'>CENA ZAKUPU</span> {purchase}
				</div>
				<div className='sm:block flex items-center justify-between py-3 px-4 bg-[#060606]'>
					<span className='sm:hidden block'>CENA SPRZEDAŻY</span> {sell}
				</div>
			</div>
		</div>
	);
};

export default TableItem;
