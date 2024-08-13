import React, { useState, useEffect } from 'react';
import axios from 'axios'; // axios.defaults.baseURL = REACT_BASE_URL;
import { CoinCard, TrendingCardContainer } from '../componentImports';

const TrendingContainer = () => {
	const [trending, setTrending] = useState([]);

	useEffect(() => {
		const getTrendingData = async () => {
			const trendingData = await axios.get('/api/crypt/coins/trending');
			setTrending(trendingData.data.coins);
		};
		getTrendingData();
	}, []);

	return (
		<div className="flex overflow-hidden bg-gray-50">
			<div id="main-content" className="relative w-1/2 h-full overflow-x-hidden overflow-y-auto bg-gray-50 lg:ml-64" style={{ paddingRight: '18%', width: '150%' }}>
				{/* MAIN */}
				<main>
					<div className="px-6 pt-6" style={{ width: '125%', margin: '0 auto' }}>
						<h1 className="mb-2 text-2xl font-bold text-gray-900">Trending Cryptocurrencies</h1>
						<div className="grid gap-4 xl:grid-cols-1 2xl:grid-cols-1">
							<TrendingCardContainer trending={trending} />
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default TrendingContainer;


// HOW I MADE 3 ROWS: flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
// /* container */
// .responsive-three-columns {
//     display:flex;
//     flex-wrap:wrap;
// }

// /* columns */
// .responsive-three-columns > * {
//     width:100%;
//     padding:1rem;
//     // background-color: aqua;
// }

// /* tablet breakpoint */
// @media (min-width:768px) {
//     .responsive-three-columns > * {
//         width:calc(100% / 3);
//     }
// }