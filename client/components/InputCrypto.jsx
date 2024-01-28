import React, { useState } from 'react';
import axios from 'axios';
import InvestList from './InvestList';

const InputCrypto = () => {
	const [nameValue, setName] = useState('');
	// set the name
	function handleChange(e) {
		setName(e.target.value);
	}

	// POST REQ
	const handleClick = async (e) => {
		console.log('click handled, event', e);
		e.preventDefault(); // prevents page from being refreshed

		const newObj = {
			_name: nameValue,
		};

		await axios
			.post('v1/api/cryptodo/post', newObj)
			.then((data) => {
				console.log('post', data);
			})
			.catch((error) => console.log(`Error in InputCryptoTodo.js POST request: ${error}`));

		//   window.location = '/cryptotodo';
	};

	return (
		<>
			<div style={{ margin: '0 auto', width: '75%' }}>
				<input
					onChange={handleChange}
					// onChange={event => {setName(event.target.value)}}
					style={{ width: '75%', height: '10%' }}
					type="text"
					placeholder="Enter the name or symbol of the cryptocurrency you would like to see Tweets of"
				/>

				<Button onClick={handleClick} variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>
					Add Crypto
				</Button>

				<Listodos />
			</div>
		</>
	);
};

export default InputCrypto;
