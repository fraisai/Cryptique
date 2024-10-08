import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, redirect, useSearchParams } from 'react-router-dom';
import axios from 'axios'; // axios.defaults.baseURL = REACT_BASE_URL;
import { Dashboard, Sidebar, Navbar, Footer, CryptoContainer, InvestmentsContainer, NewsContainer, ConnectContainer, TrendingContainer, SignIn, LoginContainer, SignupContainer, TermsConditions, ErrorPage, LandingContainer } from './componentImports';
import { CryptiqueContext } from './CryptiqueContext';

const Layout = ({ children }) => {
	return(
		<div className="overflow-y-scroll wrapper bg-gray-50">
			{/* **************************** SIDEBAR **************************** */}
			<aside className="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full pt-16 mb-16 font-normal xs:hidden transition-width">
				<Sidebar />
			</aside>

			<div className="flex flex-col pt-16 " style={{ paddingLeft: '18%', width: '100%' }}>{children}</div>

			{/* **************************** FOOTER **************************** */}
			<footer className="bg-gray-50">
				<Footer />
			</footer>
		</div>
	)
}

const SignupLayout = ({ children }) => {
	return (
		<div className="overflow-y-scroll wrapper bg-gray-50">
			<div className='flex flex-col items-center justify-center px-16 mt-16 sm:bg-red-600 md:bg-red-400' style={{ paddingTop: "9rem", paddingLeft: 24, paddingRight: 24 }}>{children}</div>

			{/* **************************** FOOTER **************************** */}
			<footer className="bg-gray-50">
				<Footer pl='24px' />
			</footer>
		</div>
	)
}

const App = () => {
	const [chartData, setChartData] = useState({});
	// const [searchParams, setSearchParams] = useSearchParams();
	let location = useLocation();
	const [isAuth, setIsAuth] = useState(false);
	
	useEffect(() => {
		const getChartData = async () => {
			const marketChartData = await axios.get('/api/crypt/coins/market-charts');
			setChartData(marketChartData.data);
		};
		getChartData();
	}, []);

	console.log("location: ", location.search);
	
	return (
		<div className="w-full h-full overflow-y-scroll bg-gray-50">
			
			{/* **************************** NAVBAR **************************** */}
			<nav className="fixed z-30 w-full bg-white border-b border-gray-200">
				<Navbar />
			</nav>

			{/* **************************** BODY & ROUTES **************************** */}
			<div className="pt-6">
				<Routes>					
					{/* <Route path="/" element={<Layout><Dashboard chartData={chartData} /></Layout>} /> */}
					{/* <Route path="/" element={<LandingContainer />} /> */}
					<Route path="/" element={<SignupLayout><LoginContainer locationSearch={location.search} /></SignupLayout>} />
					<Route path="/dashboard" element={<Layout><Dashboard chartData={chartData} /></Layout>} />
					<Route path="/all-coins" element={<Layout><CryptoContainer /></Layout>} />
					<Route path="/trending" element={<Layout><TrendingContainer /></Layout>} />
					<Route path="/investments" element={<Layout><InvestmentsContainer /></Layout>} />
					<Route path="/news" element={<Layout><NewsContainer /></Layout>} />
					<Route path="/connect" element={<Layout><ConnectContainer /></Layout>} />
					<Route path="/terms-conditions" element={<Layout><TermsConditions /></Layout>} />
					<Route path="/error" element={<ErrorPage />} />

					<Route path="/login" element={<SignupLayout><LoginContainer locationSearch={location.search} /></SignupLayout>} />
					<Route path="/signup" element={<SignupLayout><SignupContainer /></SignupLayout>} />
					<Route path="*" element={<ErrorPage reason={"You do not have permission."}/>}/>
				</Routes>
			</div>
		</div>
	);
};

export default App;