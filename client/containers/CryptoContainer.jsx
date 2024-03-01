import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoCardContainer from './card-containers/CryptoCardContainer';

const CryptoContainer = () => {
	const [market, setMarket] = useState([]);

	useEffect(() => {
		const getMarketData = async () => {
			try {
				const marketData = await axios.get('/api/crypt/coins/markets');
				setMarket(marketData.data);
	
				// const dummy = await axios.get('/api/crypt/coins/');
				// if (JSON.stringify(dummy.data === "{}")) "empty object";
				// console.log("dummy ", dummy, dummy.data, marketData)
			} catch (error) {
				setMarket([])
				console.log("CryptoContainer.jsx: ", error)
			}
		};
		getMarketData();
	}, []);

	return (
		<div className="flex overflow-hidden bg-gray-50">
			<div id="main-content" className="relative w-1/2 h-full overflow-x-hidden overflow-y-auto bg-gray-50 lg:ml-64" style={{ paddingRight: '18%', width: '150%' }}>
				{/* MAIN */}
				<main>
					<div className="px-6 pt-6" style={{ width: '125%', margin: '0 auto' }}>
						<h1 className="mb-2 text-2xl font-bold text-gray-900">Current Cryptocurrencies Market</h1>
						<div className="grid gap-4 xl:grid-cols-1 2xl:grid-cols-1">
							<CryptoCardContainer market={market} />
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default CryptoContainer;
