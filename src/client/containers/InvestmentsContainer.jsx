import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import SearchBar from '../components/SearchBar';
import { TrashcanSVG, InvestmentsCard, RightArrowSVG, LeftArrowSVG,  } from '../componentImports';

const name = ['BTC', 'ETH', 'Memecoin'];

const InvestmentsContainer = () => {
	const [list, setList] = useState([]);
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
				console.log('Error in GET request in Listodos.js', error.message);
			}
		};
		getWatchlist();
	});
	
	console.log('list from Listodos.js', list);

	const deleteTodo = async (id) => {
		try {
			await axios
				// .delete(`/cryptotodo/${id}`)
				.delete(`/v1/api/cryptodo/${id}`)
				.then((res) => console.log('Delete in Listodos.js'))
				.catch((error) => console.log('Delete error in Listodos.js', error.message));
			window.location = '/cryptotodo';
		} catch (err) {
			console.log('Error in Listodos.js');
		}
	};

	const handleTweetSearch = async (ele) => {
		console.log('tweetSearch', ele);
		const newObj = {
			id: ele,
		};
		await axios
			.post(`/twitter/${ele}`, newObj)
			.then((res) => setTweet(res.data))
			.catch((error) => {
				console.log('Error in handleTweetSearch GET request in Listodos.js', error.message);
			});
	};

	return (
		<div className="flex w-full overflow-hidden bg-gray-50" >
			<div className="px-6 pt-6" >
				<h1 className="pt-6 pb-6 m-4 text-xl font-semibold text-gray-900 sm:text-2xl">All Investments</h1>

				<div className="grid gap-4 xl:grid-cols-1 2xl:grid-cols-1">
					<div className="max-w-screen flex flex-col p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
						<div className="items-center justify-between block sm:flex md:divide-x md:divide-gray-100">
							<div className="flex items-center mb-4 sm:mb-0">
								<SearchBar />
								<form className="sm:pr-3" action="#" method="GET">
									<label htmlFor="products-search" className="sr-only">
										Search
									</label>
									<div className="relative w-48 mt-1 sm:w-64 xl:w-96">
										<input type="text" name="email" id="products-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Search" />
									</div>
								</form>

								<div className="flex items-center w-full sm:justify-end">
									<div className="flex pl-2 space-x-1">
										<a href="#" className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
											<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
											</svg>
										</a>
									</div>
								</div>
							</div>
							
							<button id="createProductButton" className="text-white bg-green-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none" type="button" data-drawer-target="drawer-create-product-default" data-drawer-show="drawer-create-product-default" aria-controls="drawer-create-product-default" data-drawer-placement="right">
								Add to Watchlist
							</button>
						</div>
					</div>

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
