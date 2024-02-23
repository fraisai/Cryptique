import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios'; // axios.defaults.baseURL = REACT_BASE_URL;
import { Dashboard, Sidebar, Navbar, Footer, CryptoContainer, InvestmentsContainer, NewsContainer, ConnectContainer, TrendingContainer, SignIn } from './componentImports';
import { CryptiqueContext } from './CryptiqueContext';
// const REACT_BASE_URL = 'http://localhost:5000';

const App = () => {
	const [chartData, setChartData] = useState({});
	let location = useLocation();
	
	useEffect(() => {
		console.log("useEffect location: ", location.search);
		
		const getChartData = async () => {
			const marketChartData = await axios.get('/api/crypt/coins/market-charts');
			setChartData(marketChartData.data);
		};
		getChartData();
	}, []);

	console.log("location: ", location.search);
	
	return (
		<>
			
			{/* **************************** NAVBAR **************************** */}
			<nav className="fixed z-30 w-full bg-white border-b border-gray-200">
				<Navbar />
			</nav>

			{/* **************************** SIDEBAR **************************** */}
			<aside className="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full pt-16 mb-16 font-normal xs:hidden transition-width">
				<Sidebar />
			</aside>

			{/* **************************** BODY & ROUTES **************************** */}
			<div className="bg-gray-50">

				{/* **************************** SIGN IN **************************** */}
				{/* <div align='center' >
					<SignIn/>
				</div> */}

				<Routes>
					{/* <Route path='/login' 
						component={() => {
							window.location.assign = 'https://github.com/login/oauth/authorize?client_id=17cfd66a744613f0d753';
							return null;
					}
					}/> */}
					
					{/* <Route 
						path="/sign-in" 
						element={
							<div align='center' >
								<SignIn/>
							</div>
						}
					/> */}

					<Route path="/" element={<Dashboard chartData={chartData} />} />
					<Route path="/all-coins" element={<CryptoContainer />} />
					<Route path="/trending" element={<TrendingContainer />} />
					<Route path="/investments" element={<InvestmentsContainer />} />
					<Route path="/news" element={<NewsContainer />} />
					<Route path="/connect" element={<ConnectContainer />} />
				</Routes>
			</div>

			{/* **************************** FOOTER **************************** */}
			<footer className="bg-gray-50 dark:bg-gray-800">
				<Footer />
			</footer>
		</>
	);
};

export default App;

/*
fetch('api/crypt/coins/trending').then(res => res.json())
        .then(res => {
          const data = res
          console.log("fetch api", data)
        })
*/
