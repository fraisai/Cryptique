import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

const InvestmentsCard = (props) => {
	return (
		// <div className="flex flex-col">
		// 	<div className="inline-block min-w-full align-middle">
				<tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
					<td className="w-4 p-8">
						<div className="flex items-center">
							<input id="checkbox-194556" aria-describedby="checkbox-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
							<label for="checkbox-194556" className="sr-only">
								checkbox
							</label>
						</div>
					</td>

					<td className="p-8 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
						<div className="text-base font-semibold text-gray-900 dark:text-white">{props.name}</div>
					</td>

					<td id="_name" className="p-8 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
						{props.name}
					</td>
					<td className="p-8 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">0.2328874 shares</td>
					<td className="p-8 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">$41,000.00</td>
					<td className="p-8 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">6.91%</td>
					<td className="p-8 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">$9548.38</td>

					<td className="p-8 space-x-2 whitespace-nowrap">
						<button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
							Buy
						</button>

						<button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300">
							Sell
						</button>
					</td>
				</tr>
		// 	</div>
		// </div>
	);
};

export default InvestmentsCard;
