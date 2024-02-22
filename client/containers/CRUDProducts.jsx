import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import { RightArrowSVG, LeftArrowSVG,  } from '../componentImports';

const CRUDProducts = (props) => {
	return (
		<div>
			

			<div className="flex flex-col">
				<div className="inline-block min-w-full align-middle">
					{/* <div className="overflow-hidden shadow"> */}
						<table className="w-full min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
							<thead className="bg-gray-100 dark:bg-gray-700">
								<tr style={{ width: '200%' }}>
									<th scope="col" className="p-8">
										<div className="flex items-center">
											<input id="checkbox-all" aria-describedby="checkbox-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
											<label for="checkbox-all" className="sr-only">
												checkbox
											</label>
										</div>
									</th>

									<th scope="col" className="p-8 text-sm font-medium text-left text-gray-500 uppercase dark:text-gray-400">
										Cryptocurrency
									</th>
									<th scope="col" className="p-8 text-sm font-medium text-left text-gray-500 uppercase dark:text-gray-400">
										Symbol
									</th>
									<th scope="col" className="p-8 text-sm font-medium text-left text-gray-500 uppercase dark:text-gray-400">
										Shares
									</th>
									<th scope="col" className="p-8 text-sm font-medium text-left text-gray-500 uppercase dark:text-gray-400">
										Price
									</th>

									<th scope="col" className="p-8 text-sm font-medium text-left text-gray-500 uppercase dark:text-gray-400">
										% Change
									</th>
									<th scope="col" className="p-8 text-sm font-medium text-left text-gray-500 uppercase dark:text-gray-400">
										Your Equity
									</th>

									<th scope="col" className="p-8 text-sm font-medium text-left text-gray-500 uppercase dark:text-gray-400">
										Actions
									</th>
								</tr>
							</thead>

							<tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700" style={{ width: '100%' }}>
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
										<div className="text-base font-semibold text-gray-900 dark:text-white">Bitcoin</div>
									</td>

									<td id="_name" className="p-8 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
										BTC
									</td>
									<td className="p-8 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">0.2328874 shares</td>
									<td className="p-8 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">$41,000.00</td>
									<td className="p-8 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">6.91%</td>
									<td className="p-8 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">$9548.38</td>

									<td className="p-8 space-x-2 whitespace-nowrap">
										<button type="button" id="updateProductButton" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
											<svg className="w-10 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
												<path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
												<path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"></path>
											</svg>
											Edit
										</button>

										<button type="button" id="deleteProductButton" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
											<svg className="w-10 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path>
											</svg>
											Sell
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					{/* </div> */}
				</div>
			</div>

			<div className="sticky bottom-0 right-0 w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between">
				<div className="flex items-center mb-4 sm:mb-0">
					<button className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
						<LeftArrowSVG />
					</button>
					
					<button className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
						<RightArrowSVG />
					</button>
				</div>

			</div>
		</div>
	);
};

export default CRUDProducts;
