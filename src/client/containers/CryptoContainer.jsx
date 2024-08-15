import React, { useState, useEffect, useRef, useMemo } from 'react';
import axios from 'axios';
import CryptoCardContainer from './card-containers/CryptoCardContainer';
import { Pagination } from '../componentImports';
/**
 * to check time it take 
 * console.time('filter array');
const visibleTodos = getFilteredTodos(todos, filter);
console.timeEnd('filter array');

 * @returns all-coins endpoint
 */
const CryptoContainer = () => {
	const [allMarket, setAllMarket] = useState([]);
	const [displayedCards, setDisplayedCards] = useState([]);
	// PAGINATION
	const cardsPerPage = 12;
	const currPageRef = useRef(1);
	const [totalPages, setTotalPages] = useState(0); // 100 items per page
	// const totalRef = useRef(0);
	const [startInd, setStartInd] = useState(0);
	const [endInd, setEndInd] = useState(cardsPerPage);
    const [nextPage, setNextPage] = useState();
	const pageArr = [];

	const handlePageClick = (val, target) => { // when page number is clicked, it changes the cards that are displayed on page. index for slice method (end index is exclusive) => page1: 0 - 10, page2: 10-20, page3: 20-30
		currPageRef.current = val; // update the new currPage
		let ind = val - 1; 
		if (currPageRef.current === 1) setDisplayedCards(allMarket.slice(0, cardsPerPage));
		if (currPageRef.current === totalPages) setDisplayedCards(allMarket.slice(cardsPerPage * ind));
		if (currPageRef.current > 1 && currPageRef.current < totalPages) setDisplayedCards(allMarket.slice(cardsPerPage * ind, cardsPerPage * (ind + 1)));
		return; 
	}

	/**
	 * Generates the numbered boxes based on the totalPages that should be generated
	 * @returns array of page number elements
	 */
    const pageItems = () => {
        for (let i = 1; i <= totalPages; i++) {
            pageArr.push(<li 
                key={i} 
                onClick={(e) => handlePageClick(i, e.target)}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >{i}</li>)
        }
        return pageArr;
    }
	// const memoPageItems = useMemo(() => pageItems(), [totalPages]);

    const handlePrevClick = () => {
		if (currPageRef.current < 1) {
			currPageRef.current = 1;
			return;
		}
		currPageRef.current -= 1;
		let ind = currPageRef.current - 1;

		if (currPageRef.current === 1) {
			setDisplayedCards(allMarket.slice(0, cardsPerPage));
			currPageRef.current = 1;
		}
		if (currPageRef.current === totalPages) setDisplayedCards(allMarket.slice(cardsPerPage * ind));
		if (currPageRef.current > 1 && currPageRef.current < totalPages) setDisplayedCards(allMarket.slice(cardsPerPage * ind, cardsPerPage * (ind + 1)));
    }

    const handleNextClick = () => {
		if (currPageRef.current === totalPages) {
			currPageRef.current = totalPages;
			return;
		}

		currPageRef.current += 1;
		let ind = currPageRef.current - 1;
		
		if (currPageRef.current === 1) setDisplayedCards(allMarket.slice(0, cardsPerPage));
		if (currPageRef.current === totalPages) setDisplayedCards(allMarket.slice(cardsPerPage * ind));
		if (currPageRef.current > 1 && currPageRef.current < totalPages) setDisplayedCards(allMarket.slice(cardsPerPage * ind, cardsPerPage * (ind + 1)));
	}
	
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		const getMarketData = async () => {
			try { 
				const marketData = await axios.get('/api/crypt/coins/markets');
				setAllMarket(await marketData.data); // ALL the cryptos in market				 
				setTotalPages(Math.ceil(marketData.data.length / cardsPerPage));// calculate total number of pages
				if (currPageRef.current === 1) setDisplayedCards(marketData.data.slice(0, cardsPerPage)); // display cards for the first page
			} catch (error) {
				setAllMarket([]);
				if (axios.isCancel(error)) {
					console.log("CryptoContainer.jsx: ", error);
				} 
			}
		};
		getMarketData();

		return () => { // cleanup function
			cancelToken.cancel();
		}
	}, []);

	return (
		<div className="flex overflow-hidden bg-gray-50">
			<div id="main-content" className="relative w-1/2 h-full overflow-x-hidden overflow-y-auto bg-gray-50 lg:ml-64" style={{ paddingRight: '18%', width: '150%' }}>
				{/* MAIN */}
				<main>
					<div className="px-6 pt-6" style={{ width: '125%', margin: '0 auto' }}>
						<h1 className="mb-2 text-2xl font-bold text-gray-900">Current Cryptocurrencies Market</h1>
						<div className="grid gap-4 xl:grid-cols-1 2xl:grid-cols-1">
							<CryptoCardContainer market={displayedCards} />
						</div>

						{/* <Pagination
							currPage={currPage}
							totalPages={totalPages}
							prevClick={handlePrevClick}
							nextClick={handleNextClick}
							pageClick={handlePageClick}
						/> */}

    
						<div className="flex flex-col items-center w-full">
							<span className="text-sm text-gray-700">
								Showing <span className="font-semibold text-gray-900">{currPageRef.current}</span> of <span className="font-semibold text-gray-900">{totalPages}</span> Pages
							</span>

							<ul className="inline-flex -space-x-px text-sm">
								<li>
									<button onClick={handlePrevClick} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Previous</button>
								</li>
								
								{pageItems()}

								<li>
									<button onClick={handleNextClick} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Next</button>
								</li>
							</ul>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default CryptoContainer;
