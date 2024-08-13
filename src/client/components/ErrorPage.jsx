import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = ({code = '404', reason = 'Page under construction.'}) => {
	return ( 
	<div className="max-w-screen-md max-h-screen-xl" style={{ padding: '2rem' }}>
		<div className="max-w-screen-md text-center bg-white " style={{ padding: '5rem 0 6rem 0', }}>
			<h1 className="mb-4 font-extrabold text-7xl lg:text-9xl text-primary-600">{code}</h1>
			<p className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">{reason}</p>
			<p className="mb-4 text-lg font-light text-gray-500">Sorry, page is not available. Try returning to the home page.</p>
			{/* <Link to="/">
				<button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Back to Homepage</button>
			</Link> */}
		</div>
	</div>
		
	);
};

export default ErrorPage;
