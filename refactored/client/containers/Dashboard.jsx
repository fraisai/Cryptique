
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import options from '../constants/dashboardOptions';
import {optionsClassname} from '../constants/dashboardOptions';
import OneDayChart from '../components/dashboard-charts/OneDayChart';
import OneWeek from '../components/dashboard-charts/OneWeekChart';
import ErrorPage from '../components/ErrorPage';

function Dashboard({ chartData }) {
    console.log("Dashboard", chartData)
    const [selectValue, setSelectValue] = useState('day');
    let displayedChart1 = <OneDayChart name={"BTC"} chartData={chartData}/>
    let displayedChart2 = <OneDayChart name={"ETH"} chartData={chartData}/>
    let currPrice = chartData.prices ? "$" + new Intl.NumberFormat().format(chartData.prices[chartData.prices.length - 1]) : '';

    const handleSelectValueChange = (e) => setSelectValue(e.target.value);

    if (selectValue === 'day') {
        displayedChart1 = <OneDayChart name={"BTC"} chartData={chartData}/>
        displayedChart2 = <OneDayChart name={"ETH"} chartData={chartData}/>
    } else if (selectValue === 'week') {
        displayedChart1 = <OneWeek name={"BTC"} chartData={chartData} />
        displayedChart2 = <OneWeek name={"BTC"} chartData={chartData}/>
    } else {
        displayedChart1 = <ErrorPage />
        displayedChart2 = <ErrorPage />
    }

    return (
        <div className="bg-gray-50 dark:bg-gray-800">
            <div className="flex flex-col pt-16 bg-gray-50 dark:bg-gray-900">
                <div className="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/90" id="sidebarBackdrop"></div>
                <div id="main-content" className="px-6 pt-6 relative h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900 w-full" style={{paddingLeft: '19%', width: '100%'}}>
                    {/* CARD HOLDING CHART */}
                    <div className="two-column-grid p-4 bg-white border border-gray-200 rounded-lg shadow-sm  dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                            <div className="flex-shrink-0">
                                <span className="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">{currPrice}</span>
                                <h3 className="text-base font-light text-gray-500 dark:text-gray-400">Investments</h3>
                            </div>

                            <div className="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">
                                12.5%
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </div>


                        {/* CHART */}

                            {/* <div id="main-chart" style={{minHeight: '435px'}} className="flex justify-center items-center"> */}
                            <div id="main-chart" style={{maxHeight: '435px'}} className="grid grid-cols-2 gap-8">
                                <div style={{maxHeight: '435px'}} className='p-6'>
                                    {displayedChart1}
                                </div>
                                <div style={{maxHeight: '435px'}} className='p-6'>
                                    {displayedChart2}
                                </div>
                            </div>
                        

                        {/* <!-- Card Footer --> */}
                        <div className="flex items-center justify-between pt-3 mt-4 border-t border-gray-200 sm:pt-6 dark:border-gray-700">
                            <div>
                                {/* <!-- Dropdown menu --> */}
                                <select name="" id="" value={selectValue} onChange={handleSelectValueChange} className="py-1 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
                                    {options.map(opt => {
                                        return (
                                            <option className={optionsClassname} key={opt.val} value={opt.val}>{opt.label}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dashboard;