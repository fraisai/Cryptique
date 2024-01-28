import React from 'react';

const Audience = () => {
	return (
		<div>
			{/* AUDIENCE BAR */}
			<div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
				<div className="w-full">
					<h3 className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">Audience</h3>
					<div className="flex items-center mb-2">
						<div className="w-16 text-sm font-medium dark:text-white">50+</div>
						<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
							<div className="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500" style={{ width: '18%' }}></div>
						</div>
					</div>

					<div className="flex items-center mb-2">
						<div className="w-16 text-sm font-medium dark:text-white">40+</div>
						<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
							<div className="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500" style={{ width: '15%' }}></div>
						</div>
					</div>

					<div className="flex items-center mb-2">
						<div className="w-16 text-sm font-medium dark:text-white">30+</div>

						<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
							<div className="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500" style={{ width: '60%' }}></div>
						</div>
					</div>

					<div className="flex items-center mb-2">
						<div className="w-16 text-sm font-medium dark:text-white">20+</div>
						<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
							<div className="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500" style={{ width: '30%' }}></div>
						</div>
					</div>
				</div>

				<div id="traffic-channels-chart" className="w-full"></div>
			</div>
		</div>
	);
};

export default Audience;
