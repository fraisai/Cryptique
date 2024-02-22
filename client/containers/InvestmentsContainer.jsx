import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import CRUDProducts from './CRUDProducts';
import SearchBar from '../components/SearchBar';
import { TrashcanSVG } from '../componentImports';

const name = 'BTC';

const InvestmentsContainer = () => {
	const [list, setList] = useState([]);
	const [tweet, setTweet] = useState([]);

	useEffect(() => {
		const getWatchlist = async () => {
			const res = await axios.get('api/watch/get');
			setList(res);
			console.log(res);
		};
	});

	const getList = async () => {
		await axios
			.get('/api/watch/get')
			.then((response) => {
				setList(response.data);
			})
			.catch((error) => {
				console.log('Error in GET request in Listodos.js', error.message);
			});
	};

	useEffect(() => {
		getList();
	}, []); // ensures you make just 1 request by including []

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
		<div className="flex pt-16 overflow-hidden bg-gray-50">			
			<div className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64" style={{ paddingLeft: '19%', paddingRight: '19%', }}>
				<h1 className="pt-6 m-4 text-xl font-semibold text-gray-900 sm:text-2xl">All Investments</h1>

				
				<div className="px-6 pt-6" style={{ width: '125%', margin: '0 auto' }}>
					<div className="grid gap-4 xl:grid-cols-1 2xl:grid-cols-1">
						{' '}
						<div className="max-w-screen flex flex-col p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
							<div className="items-center justify-between block sm:flex md:divide-x md:divide-gray-100">
								<div className="flex items-center mb-4 sm:mb-0">
									<SearchBar />
									<form className="sm:pr-3" action="#" method="GET">
										<label htmlFor="products-search" className="sr-only">
											Search
										</label>
										<div className="relative w-48 mt-1 sm:w-64 xl:w-96">
											<input type="text" name="email" id="products-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" />
										</div>
									</form>

									<div className="flex items-center w-full sm:justify-end">
										<div className="flex pl-2 space-x-1">
											<button className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
												<TrashcanSVG />
											</button>
											
											<a href="#" className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
												<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
												</svg>
											</a>
											{/* <a href="#" className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"> */}
												<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
													<path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
												</svg>
											{/* </a> */}
										</div>
									</div>
								</div>
								
								<button id="createProductButton" className="text-white bg-green-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800" type="button" data-drawer-target="drawer-create-product-default" data-drawer-show="drawer-create-product-default" aria-controls="drawer-create-product-default" data-drawer-placement="right">
									Add to Watchlist
								</button>
							</div>
						</div>
						<div className="max-w-screen flex flex-col p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5"></div>

						<CRUDProducts name={name} />
					</div>
					
				</div>
			</div>
		</div>
	);
};

export default InvestmentsContainer;
