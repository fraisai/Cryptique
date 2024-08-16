import React, { useState, useRef, useMemo } from 'react';
import axios from 'axios';

const SearchBar = () => {
	const [coinQuery, setCoinQuery] = useState(''); // state that holds API data
	const [suggestion, setSuggestion] = useState([]); // returns the suggestion box

	const getFilteredCoins = async (e) => {
		setCoinQuery(e.target.value); // query to send to backend
		try {
			if (coinQuery.length >= 1) {
				const filteredResult = await axios.get(`api/crypt/filter?coin_name=${coinQuery}`);
				setSuggestion(filteredResult?.data);
			}
		} catch (error) {
			if (err.response && err.response.status === 404) {
				setSuggestion([]);
				console.clear();
			}
		}
	
		/**
		 * axios
			.get(`api/crypt/filter?coin_name=${query}`)
			.then((data) => setSuggestion(data.data?.results))
			.catch((err) => {
			});
		 */
	};

	function debounce(callback, wait) { // 
		let timerId; // the id returned from setTimeout - use to stop execution via clearTimeout
		return function (...args) {
			const context = this;
			if (timerId) clearTimeout(timerId);

			timerId = setTimeout(() => {
				timerId = null;
				callback.apply(context, args);
			}, wait);
		};
	}

	const debouncedResults = useMemo(() => debounce(getFilteredCoins, 300), []);

	return (
		<form className='flex items-center w-full' style={{ justifyContent: 'space-around'}}>
			<div className='flex justify-between	 flex-row'>
				<input 
					list="locations" 
					className='w-5/6 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block p-2.5 px-4'
					name="coinQuery" 
					onChange={debouncedResults} 
					placeholder="Type name or symbol" 
					type="text" 
					// defaultValue={''}
				/>

				<datalist id="locations">
					{coinQuery.length > 0 && // // required to avoid the dropdown list to display the locations fetched before
						suggestion?.map((el, ind) => {
							if (el.name.includes(coinQuery)) return <option key={ind} value={el.name} />;
							else if (el.symbol.includes(coinQuery)) return (<option key={ind} value={el.symbol} />)
							return '';
						})}
				</datalist>

				<button className="text-white bg-green-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full" type="button">
					Add to Watchlist
				</button>
			</div>
		</form>
	);
};

export default SearchBar;
