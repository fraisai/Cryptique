import React from 'react';
import { CoinCard } from '../../componentImports';
import { Spinner } from '../../componentImports';
const CryptoCardContainer = ({ market }) => {
	// console.log("market", market)
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',

		// These options are needed to round to whole numbers if that's what you want.
		//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
		//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
	});
	
	if (market.length > 0) {
		return (
			<main>
				<div className="responsive-three-columns sm:grid-cols-1">
					{market.map((el, i) => {
						return (
							<div key={el.id + i}>
								<CoinCard img={el.image} card_key={el.id + i} name={el.name} price={formatter.format(el.current_price)} data={el.sparkline_in_7d.price} />
							</div>
						);
					})}
				</div>
			</main>
		);
	} else {
		return <Spinner />;
	}
};

export default CryptoCardContainer;
