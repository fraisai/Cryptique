
import React from 'react';
import Sidebar from '../components/Sidebar';
import CoinCard from '../components/CoinCard';

function Dashboard(props) {
    console.log("Dashboard", props)
    return (
        <div className="bg-gray-50 dark:bg-gray-800">
            <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">

                <div className="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/90" id="sidebarBackdrop"></div>

                <div id="main-content" className="relative h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900 w-1/2" style={{paddingLeft: '19%', paddingRight: '19%', width: '150%'}}>

                    {/* MAIN */}
                    <main >
                        <CoinCard trending={props.trending}/>

                        <div className="px-6 pt-6" style={{width: '125%', margin: '0 auto'}}> {/* px-4 => padding-left && padding-right = 1rem = 16px, pt-6 => padding-top = 1.5rem = 24px */}
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
                                    <div id="main-chart" style={{minHeight: '435px'}}>
                                        <div style={{width: '871px', height: '420px'}}>
                                        </div>
                                    </div>


                                    {/* <!-- Card Footer --> */}
                                    <div className="flex items-center justify-between pt-3 mt-4 border-t border-gray-200 sm:pt-6 dark:border-gray-700">
                                        <div>
                                            <button className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" type="button" data-dropdown-toggle="weekly-sales-dropdown">Last 7 days 
                                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                            </button>

                                            {/* <!-- Dropdown menu --> */}
                                            <div 
                                                className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" 
                                                id="weekly-sales-dropdown" 
                                                style={{position: 'absolute', inset: '0px auto auto 0px', margin: '0px', transform: 'translate3d(355px, 707px, 0px)'}} 
                                                data-popper-placement="bottom"
                                            >
                                                <ul className="py-1" role="none">
                                                    <li>
                                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 24 Hours</a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 7 days</a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 30 days</a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 90 days</a>
                                                    </li>
                                                </ul>
                                            </div>
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