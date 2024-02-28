import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<div className="max-w-screen-xl bg-white">
			<div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
				<div className="max-w-screen-sm mx-auto text-center">
					<h1 className="mb-4 font-extrabold tracking-tight text-7xl lg:text-9xl text-primary-600">404</h1>
					<p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Something's missing.</p>
					<p className="mb-4 text-lg font-light text-gray-500">Sorry, we can't find that page. Try returning to the home page.</p>
					{/* <Link to="/">
                    	<button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Back to Homepage</button>
                	</Link> */}
				</div>
			</div>
		</div>
	);
};

export default ErrorPage;
