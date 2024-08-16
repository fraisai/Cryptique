import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import SearchBar from '../components/SearchBar';
import { TrashcanSVG, InvestmentsCard, RightArrowSVG, LeftArrowSVG,  } from '../componentImports';

const name = ['BTC', 'ETH', 'Memecoin'];

const InvestmentsContainer = () => {
	const [cards, setCards] = useState([]);
	const [tweet, setTweet] = useState([]);

	useEffect(() => {
		/**
		 * Get all saved cards in watchlist
		 */
		const getWatchlist = async () => {
			try {
				const res = await axios.get('/api/watchlist/cards');
				setList(res.data);
			} catch (error) {
				console.log('Error in GET request in InvestmentContainer.js', error.message);
			}
		};
		getWatchlist();
	});

	console.log('list from InvestmentContainer.jsx', cards);

	const deleteCard = async (id) => {
		try {
			await axios
				.delete(`/api/watchlist/cards/${id}`)
				.then((res) => console.log('Delete in InvestmentContainer.js'))
				.catch((error) => console.log('Delete error in InvestmentContainer.js', error.message));
			// window.location = '/cryptotodo';
		} catch (err) {
			console.log('Error in InvestmentContainer.jsx');
		}
	};

	const addCard = async (id) => {
		try {
			const card = await axios.get(`watchlist/cards/${id}`);
			await axios.post('watchlist/cards', {
				_id: card.id,

			})
		} catch (error) {
			console.log('Error in InvestmentContainer.jsx');
		}
	}
	
	const handleTweetSearch = async (ele) => {
		console.log('tweetSearch', ele);
		const newObj = {
			id: ele,
		};
		await axios
			.post(`/twitter/${ele}`, newObj)
			.then((res) => setTweet(res.data))
			.catch((error) => {
				console.log('Error in handleTweetSearch GET request in InvestmentContainer.js', error.message);
			});
	};

	return (
		<div className="flex w-full overflow-hidden bg-gray-50" >
			<div className="px-6 pt-6" >
				<h1 className="pt-6 pb-6 m-4 text-xl font-semibold text-gray-900 sm:text-2xl">All Investments</h1>

				<div className='bg-white flex items-center border-gray-200 lg:mt-1.5'>
					<SearchBar />
				</div>

				<div className="grid gap-4 xl:grid-cols-1 2xl:grid-cols-1">
					{/* WHITE BORDER */}
					<div className="max-w-screen flex flex-col p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5"></div>

					<div className="flex flex-col">
						<div className="inline-block min-w-full align-middle">
							<table className="flex flex-col min-w-full divide-y divide-gray-200 table-fixed">
								<tbody className="bg-white divide-y divide-gray-200 ">
									<thead className="bg-gray-100">
										<tr className='min-w-full'>
											<th scope="col" className="p-8">
												<div className="flex items-center">
													<input id="checkbox-all" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" />
													<label htmlFor="checkbox-all" className="sr-only">
														checkbox
													</label>
												</div>
											</th>

											<th scope="col" className="p-8 text-sm font-medium text-left text-gray-500 uppercase ">
												Cryptocurrency
											</th>
											<th scope="col" className="p-8 text-sm font-medium text-left text-gray-500 uppercase ">
												Symbol
											</th>
											<th scope="col" className="p-8 text-sm font-medium text-left text-gray-500 uppercase ">
												Shares
											</th>
											<th scope="col" className="p-8 text-sm font-medium text-left text-gray-500 uppercase ">
												Price
											</th>

											<th scope="col" className="p-8 text-sm font-medium text-left text-gray-500 uppercase ">
												% Change
											</th>
											<th scope="col" className="p-8 text-sm font-medium text-left text-gray-500 uppercase ">
												Your Equity
											</th>

											<th scope="col" className="p-8 text-sm font-medium text-left text-gray-500 uppercase ">
												Actions
											</th>
										</tr>
									</thead>

									{name.map(el => <InvestmentsCard name={el} />)}
								</tbody>
							</table>
						</div>
					</div>
					
				</div>
				

				{/************* LEFT RIGHT PAGINATION ************ */}
				<div className="sticky bottom-0 right-0 w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between">
					<div className="flex items-center mb-4 sm:mb-0">
						<button className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
							<LeftArrowSVG />
						</button>
						
						<button className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
							<RightArrowSVG />
						</button>
					</div>
				</div>
				{/************* LEFT RIGHT PAGINATION ************ */}
			</div>
		</div>
	);
};

export default InvestmentsContainer;
