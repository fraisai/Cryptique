import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="px-3 py-3 mb-16 ">
			<div className="flex items-center justify-between">
				<div className="flex items-center justify-start">
					{/* LOGO */}
					<button className="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100">
						<svg id="toggleSidebarMobileHamburger" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
						</svg>
						<svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
						</svg>
					</button>

					<div className="flex ml-2 md:mr-24">
						<Link to="/"><img src="https://img.icons8.com/ios-filled/50/cheap-2.png" className="h-8 mr-3" /></Link>
						<Link to="/"><span className="self-center mr-3 text-xl font-semibold sm:text-2xl whitespace-nowrap">Cryptique</span></Link>
					</div>

					{/* SEARCH BAR */}
					<form action="#" method="GET" className="hidden lg:block lg:pl-3.5">
						<label htmlFor="topbar-search" className="sr-only">
							Search
						</label>
						<div className="relative mt-1 lg:w-96">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
								</svg>
							</div>
							<input type="text" name="email" id="topbar-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5" placeholder="Search"></input>
						</div>
					</form>
				</div>

				<div className="flex items-center">
					<button id="toggleSidebarMobileSearch" type="button" className="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100">
						<span className="sr-only">Search</span>

						<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
						</svg>
					</button>

					<button type="button" data-dropdown-toggle="notification-dropdown" className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100">
						<span className="sr-only">View notifications</span>

						<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
						</svg>
					</button>

					<div className="z-50 hidden max-w-sm my-4 overflow-hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg" id="apps-dropdown" style={{ position: 'absolute', inset: '0px auto auto 0px', margin: '0px', transform: 'translate3d(1085px, 65px, 0px)' }} data-popper-placement="bottom">
						<div className="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50">Apps</div>

						<div className="grid grid-cols-3 gap-4 p-4">
							<a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100">
								<svg className="mx-auto mb-1 text-gray-500 w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path>
								</svg>
								<div className="text-sm font-medium text-gray-900">Sales</div>
							</a>
							<a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100">
								<svg className="mx-auto mb-1 text-gray-500 w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
								</svg>
								<div className="text-sm font-medium text-gray-900">Users</div>
							</a>
							<a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100">
								<svg className="mx-auto mb-1 text-gray-500 w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clipRule="evenodd"></path>
								</svg>
								<div className="text-sm font-medium text-gray-900 dark:text-white">Inbox</div>
							</a>
							<a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
								<svg className="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
								</svg>
								<div className="text-sm font-medium text-gray-900 dark:text-white">Profile</div>
							</a>

							<a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
								<svg className="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
								</svg>
								<div className="text-sm font-medium text-gray-900 dark:text-white">Settings</div>
							</a>

							<a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
								<svg className="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path>
									<path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"></path>
								</svg>
								<div className="text-sm font-medium text-gray-900 dark:text-white">Products</div>
							</a>
							<a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
								<svg className="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
									<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
								</svg>
								<div className="text-sm font-medium text-gray-900 dark:text-white">Pricing</div>
							</a>
							<a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
								<svg className="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clipRule="evenodd"></path>
								</svg>
								<div className="text-sm font-medium text-gray-900 dark:text-white">Billing</div>
							</a>
							<a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
								<svg className="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
								</svg>
								<div className="text-sm font-medium text-gray-900 dark:text-white">Logout</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
