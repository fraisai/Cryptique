import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios'; // axios.defaults.baseURL = REACT_BASE_URL;
import { Dashboard, Sidebar, Navbar, Footer, CryptoContainer, InvestmentsContainer, NewsContainer, ConnectContainer, TrendingContainer, SignIn, LoginContainer, SignupContainer } from './componentImports';
import { CryptiqueContext } from './CryptiqueContext';

const Layout = ({ children }) => {
	return(
		<div className="wrapper bg-gray-50">
			{/* **************************** SIDEBAR **************************** */}
			<aside className="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full pt-16 mb-16 font-normal xs:hidden transition-width">
				<Sidebar />
			</aside>

			<div className="bg-gray-50">{children}</div>

			{/* **************************** FOOTER **************************** */}
			<footer className="bg-gray-50">
				<Footer />
			</footer>
		</div>
	)
}


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
		<div className="w-full h-full bg-gray-50">
			
			{/* **************************** NAVBAR **************************** */}
			<nav className="fixed z-30 w-full bg-white border-b border-gray-200">
				<Navbar />
			</nav>

			{/* **************************** BODY & ROUTES **************************** */}
			<div className="">
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

					<Route path="/" element={<Layout><Dashboard chartData={chartData} /></Layout>} />
					<Route path="/all-coins" element={<Layout><CryptoContainer /></Layout>} />
					<Route path="/trending" element={<Layout><TrendingContainer /></Layout>} />
					<Route path="/investments" element={<Layout><InvestmentsContainer /></Layout>} />
					<Route path="/news" element={<Layout><NewsContainer /></Layout>} />
					<Route path="/connect" element={<Layout><ConnectContainer /></Layout>} />
					<Route path="/login" element={<LoginContainer />} />
					<Route path="/signup" element={<SignupContainer />} />
				</Routes>
			</div>
		</div>
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
