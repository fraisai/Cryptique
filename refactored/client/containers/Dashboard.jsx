
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import CoinCard from '../components/CoinCard';
import options from '../constants/dashboardOptions';
import {optionsClassname} from '../constants/dashboardOptions';
import OneDay from '../components/dashboard-charts/OneDay';
import OneWeek from '../components/dashboard-charts/OneWeek';
import ErrorPage from '../components/ErrorPage';

function Dashboard(props) {
    console.log("Dashboard", props)
    const [selectValue, setSelectValue] = useState('day');
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        const getChartData = async () => {
            const marketChartData = await axios.get('/api/crypt/coins/market-charts');
            setChartData(marketChartData.data.prices);
          }
          getChartData();
      
    }, [])
  
    console.log("chartData: ", chartData);

    const handleSelectValueChange = (e) => {
        setSelectValue(e.target.value);
    }
    let displayedChart = <OneDay />

    if (selectValue === 'day') {
        displayedChart = <OneDay />
    } else if (selectValue === 'week') {
        displayedChart = <OneWeek />
    } else {
        displayedChart = <ErrorPage />
    }

    console.log("selectValue: ", selectValue)

    return (
        <div className="bg-gray-50 dark:bg-gray-800">
            <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
                <div className="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/90" id="sidebarBackdrop"></div>
                <div id="main-content" className="relative h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900 w-1/2" style={{paddingLeft: '19%', paddingRight: '19%', width: '150%'}}>

                    {/* MAIN */}
                    <main >
                        <CoinCard trending={props.trending}/>

                        <div className="px-6 pt-6 sm:flex" style={{width: '125%', margin: '0 auto'}}> {/* px-4 => padding-left && padding-right = 1rem = 16px, pt-6 => padding-top = 1.5rem = 24px */}
                            <div className="grid gap-4 xl:grid-cols-1 2xl:grid-cols-1"> {/* xl = responsive 1280px	@media (min-width: 1280px) { ... } */}
                                {/* <!-- Main widget --> */}
                                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex-shrink-0">
                                            <span className="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">$45,385</span>
                                            <h3 className="text-base font-light text-gray-500 dark:text-gray-400">Investing</h3>
                                        </div>

                                        <div className="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">
                                            12.5%
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                            </svg>
                                        </div>
                                    </div>

                                    {/* CHART */}
                                    <div id="main-chart" style={{minHeight: '435px'}} className="flex justify-center items-center">
                                        <div style={{width: '871px', height: '420px'}}>
                                            {displayedChart}
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

                            
                                {/* <!--Tabs widget --> */}
                                {/* CONTENTS OF TABSWIDGET.JSX GOES HERE */}
                            </div>


                            {/* START SMART CHAT */}
                            {/* CONTENTS OF SMARTCHAT.JSX file goes here */}
                        </div>
                    </main>
                    {/* END MAIN */}

                </div>
            </div>
        </div>
    )
}


export default Dashboard;