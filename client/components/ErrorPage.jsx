import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<div className="bg-white dark:bg-gray-900">
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-sm text-center">
					<h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
					<p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
					<p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. Try returning to the home page.</p>
					{/* <Link to="/">
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Back to Homepage</button>
                </Link> */}
				</div>
			</div>
		</div>
	);
};

export default ErrorPage;
