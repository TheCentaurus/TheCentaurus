import Sort from '../../Assets/images/sort.svg'
function SearchButton({ value, onChange }) {
	return (
		<div>
			<div className='relative bg-white shadow-md shadow-gray-400  w-full'>
				<span className='absolute bg-white rounded-lg border-l-0 border-gray-300 border  inset-y-0 right-0 pl-3 flex items-center'>
					<img src={Sort} alt='Search'/>
				</span>
				<input
					value={value}
					onChange={(e) => onChange(e.target.value)}
					className='pl-10 bg-white  pr-4  py-2 rounded-lg border-gray-300 outline-0 block w-full sm:text-sm border sm:leading-5'
					placeholder='Search building name or ID'
				/>
			</div>
		</div>
	);
}

export default SearchButton;
