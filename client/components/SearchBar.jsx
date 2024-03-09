import React, { useState, useRef, useMemo } from 'react';
import axios from 'axios';

const SearchBar = () => {
	const [query, setQuery] = useState('');
	// state that hold API data
	const [suggestion, setSuggestion] = useState([]);

	const getFilteredCoins = async (e) => {
		setQuery(e.target.value);
		try {
			const filteredResult = await axios.get(`api/crypt/filter?coin_name=${query}`);
			setSuggestion(filteredResult?.data);
		} catch (error) {
			if (err.response && err.response.status === 404) {
				setSuggestion(null);
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

	function debounce(callback, wait) {
		let timerId;
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
			<input type="text" placeholder="Type name or symbol" name="query" onChange={debouncedResults} list="locations" />

			<datalist id="locations">
				{query.length > 0 && // // required to avoid the dropdown list to display the locations fetched before
					suggestion?.map((el, index) => {
						if (el.name.toLowerCase().includes(query)) {
							return <option key={index} value={el.name} />;
						}
						return '';
					})}
			</datalist>
		</form>
	);
};

export default SearchBar;
