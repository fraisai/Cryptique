import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import CRUDProducts from './CRUDProducts';
import SearchBar from '../components/SearchBar';
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
		<div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
			<div className="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/90" id="sidebarBackdrop"></div>

			<div id="main-content" className="relative w-1/2 h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900" style={{ paddingLeft: '19%', paddingRight: '19%', width: '150%' }}>
				{/* MAIN */}
				<main>
					<div className="px-6 pt-6" style={{ width: '125%', margin: '0 auto' }}>
						{' '}
						{/* px-4 => padding-left && padding-right = 1rem = 16px, pt-6 => padding-top = 1.5rem = 24px */}
						<div className="grid gap-4 xl:grid-cols-1 2xl:grid-cols-1">
							{' '}
							{/* xl = responsive 1280px	@media (min-width: 1280px) { ... } */}
							<CRUDProducts name={name} />
						</div>
						<div>
							<table style={{ margin: '0 auto' }}>
								<thead></thead>
								<tbody>
									{list.map((el) => {
										return (
											<tr>
												<td>
													<button variant="white" color="pink">
														{el.name}
													</button>
												</td>
												<th>
													<button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
														Edit
													</button>
												</th>
												<th>
													<button onClick={() => deleteTodo(el.trending_id)} variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
														Delete
													</button>
												</th>
												<th>
													<button onClick={() => handleTweetSearch(el.name)} variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
														Submit to Search Tweets
													</button>
												</th>
											</tr>
										);
									})}

									{tweet.map((el) => {
										{
											/* <img src={`${el.Media[0].media_url}`}/> */
										}
										return (
											<tr style={{ outline: '1px solid black', padding: '6px' }}>
												<td>{el.user.screen_name}</td>
												<td>{el.full_text}</td>
												<td>{el.user.followers_count}</td>
												<td>{el.retweet_count}</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default InvestmentsContainer;
