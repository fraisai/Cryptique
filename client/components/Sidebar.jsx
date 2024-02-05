import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AboutCryptiqueIconSVG, CryptocurrenciesIconSVG, DropdownArrow, DashboardIconPieSVG, LanguageSVG, InvestmentsIcon, NewsIcon, ConnectIconSVG, SupportIconSVG, SettingsIconSVG } from '../componentImports.js';

const Sidebar = () => {
	const [showSubmenu, setShowSubmenu] = useState(false);
	const [showLanguageMenu, setShowLanguageMenu] = useState(false);

	function handleCryptoShow() {
		setShowSubmenu(!showSubmenu);
	}

	function handleLanguageMenuShow() {
		// english or french
		setShowLanguageMenu(!showLanguageMenu);
	}

	return (
		<div className="relative flex flex-col flex-1 min-h-0 bg-white border-r border-gray-200 sm:flex dark:bg-gray-800 dark:border-gray-700">
			<div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto sm:flex md:hidden lg:block">
				<div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
					<ul className="pb-2 space-y-2">
						{/* SEARCH & LOGO */}
						<li>
							{/* FOR MOBILE SCREEN SIZE - SEARCH  */}
							<form action="#" method="GET" className="lg:hidden">
								<label htmlFor="mobile-search" className="sr-only">
									Search
								</label>
								<div className="relative">
									<input type="text" name="email" id="mobile-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search"></input>
								</div>
							</form>
						</li>

						{/* DASHBOARD PAGE */}
						<Link to="/">
							<li>
								<div className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
									<DashboardIconPieSVG />
									<span className="ml-3">Dashboard</span>
								</div>
							</li>
						</Link>

						{/* CRYPTOCURRENCIES PAGE */}
						<li>
							<button onClick={handleCryptoShow} className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
								<CryptocurrenciesIconSVG />
								<span className="flex-1 ml-3 text-left whitespace-nowrap">Cryptocurrencies</span>
								<DropdownArrow />
							</button>

							{/* <!-- Dropdown menu --> */}
							{showSubmenu ? (
								<ul className="py-2 space-y-2 ">
									<Link to="/all-coins">
										<li className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
											Current Market
										</li>
									</Link>

									<Link to="/trending">
										<li className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
											Trending Cryptos
										</li>
									</Link>
								</ul>
							) : (
								''
							)}
						</li>

						{/* INVESTMENTS PAGE */}
						<Link to="/investments">
							<li>
								<button className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
									<InvestmentsIcon />
									<span className="flex-1 ml-3 text-left whitespace-nowrap">Investments (CRUD)</span>
								</button>
							</li>
						</Link>

						{/* NEWS PAGE */}
						<Link to="/news">
							<li className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700 ">
								<NewsIcon />
								<span className="ml-3">News</span>
							</li>
						</Link>

						{/* CONNECT */}
						<Link to="/connect">
							<li>
								<button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
									<ConnectIconSVG />
									<span className="flex-1 ml-3 text-left whitespace-nowrap">Connect</span>
								</button>
							</li>
						</Link>
					</ul>

					<div className="pt-6 space-y-2">
						<div className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
							<AboutCryptiqueIconSVG />
							<span className="ml-3">About Cryptique</span>
						</div>

						<div className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
							<SupportIconSVG />
							<span className="ml-3">Support</span>
						</div>
					</div>
				</div>
			</div>

			{/* SETTINGS BUTTON */}
			<div className="absolute bottom-0 left-0 justify-center hidden w-full p-4 space-x-4 bg-white lg:flex dark:bg-gray-800">
				<button className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
					<SettingsIconSVG />
				</button>

				<div>
					<button onClick={handleLanguageMenuShow} className="justify-center p-2 text-gray-500 rounded cursor-pointer dropbtn nline-flex hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
						<LanguageSVG />
					</button>

					{/* DROPDOWN LANGUAGES */}
					{showLanguageMenu ? (
						<ul>
							<Link to="/">
								<li className="flex items-center pl-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
									English (US)
								</li>
							</Link>

							<Link to="/">
								<li className="flex items-center pl-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
									French
								</li>
							</Link>
						</ul>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
