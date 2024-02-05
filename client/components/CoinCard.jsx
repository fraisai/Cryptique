import React, { useState, useRef } from 'react';
// https://flowbite.com/docs/typography/images/
import CryptoOneWeekChart from './dashboard-charts/CryptoOneWeekChart';
import { RightArrowSVG, AddInvestmentsButtonSVG } from '../componentImports';

const CoinCard = ({ img, card_key, name, price, data }) => {
	const [index, setIndex] = useState(0);
	const [showChart, setShowChart] = useState(false);
	const handleNextClick = () => setIndex(index + 1);
	const handleShowChartClick = () => setShowChart(!showChart);
	let item = <></>; // the page to be displayed on card based on whether Crypto, Chart, or About is clicked

	function handleClick(e) {
		console.log('e', e);
		e.preventDefault();
	}

	const chart = (name, price_7d) => { // line chart
		return (
			<div style={{ margin: '0 auto' }} className="p-4 pb-4 text-center" id="chart">
				{price_7d ? <CryptoOneWeekChart name={name} chartData={price_7d} maxH={'200px'} maxW={'200px'} key={card_key + 'chart'} /> : <></>}
			</div>
		);
	};
	
	const about = (name) => { // about crypto info
		return (
			<div className="p-8 bg-white rounded-lg md:p-8" id="about">
				<p className="mb-3 text-gray-500 ">Read about {name}</p>
				<button className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
					Learn more
					<RightArrowSVG />
				</button>
			</div>
		);
	};
	
	const cryptoMain = () => {
		
	}

	if (index === 0) {
	} else if (index === 1) {
		item = chart(name, data);
	} else {
		item = about(name);
	}
	
	if (data) {
		return (
			<div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{ width: '320px', height: '370px' }}>
				{/* **************** START CARD HEADER **************** */}
				<ul className="flex pb-8 text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">
					<li className="me-2">
						<button className="inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500" onClick={() => setIndex(0)}>
							Crypto
						</button>
					</li>

					<li className="me-2">
						<button className="inline-block p-4 text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-blue-300" onClick={() => setIndex(1)}>
							7 Day Chart
						</button>
					</li>

					<li className="me-2">
						<button className="inline-block p-4 text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300" onClick={() => setIndex(2)}>
							About
						</button>
					</li>
				</ul>
				{/* **************** END CARD HEADER **************** */}

				{index === 0 ? (
					<div className="max-w-xs bg-white">
						<img className="p-5 pt-6 pt-8 rounded-xs" style={{ padding: '20px', margin: '0 auto', maxHeight: '150px' }} src={img} alt="" />

						<div className="p-5 pt-6">
							<h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h4>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Market Price: {price}</p>

							{/* Add to Investments Button */}
							<button onClick={handleClick}><AddInvestmentsButtonSVG /></button>
						</div>
					</div>
				) : (
					<div className="max-w-xs bg-white rounded" style={{ width: '318px', height: '314px' }}>
						{item} 
						{/* chart or about */}
					</div>
				)}
			</div>
		);
	} else return <></>;
};


export default CoinCard;
