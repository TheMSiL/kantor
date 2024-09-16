import loader from '../assets/loader.svg';

const Loader = () => {
	return (
		<div className='overlay_load'>
			<img src={loader} />
		</div>
	);
};

export default Loader;
