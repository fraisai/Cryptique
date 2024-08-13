import React, { useState, useRef, useMemo } from 'react';
import axios from 'axios';

const SearchBar = () => {
	const [query, setQuery] = useState(''); // state that hold API data
	const [suggestion, setSuggestion] = useState([]); // returns the suggestion box

	const getFilteredCoins = async (e) => {
		setQuery(e.target.value); // query to send to backend
		try {
			if (query.length >= 1) {
				const filteredResult = await axios.get(`api/crypt/filter?coin_name=${query}`);
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
		<form>
			<input 
				list="locations" 
				name="query" 
				onChange={debouncedResults} 
				placeholder="Type name or symbol" 
				type="text" 
				// defaultValue={''}
			/>

			<datalist id="locations">
				{query.length > 0 && // // required to avoid the dropdown list to display the locations fetched before
					suggestion?.map((el, ind) => {
						if (el.name.includes(query)) return <option key={ind} value={el.name} />;
						else if (el.symbol.includes(query)) return (<option key={ind} value={el.symbol} />)
						return '';
					})}
			</datalist>
		</form>
	);
};

export default SearchBar;
