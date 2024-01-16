import React, { useState, useEffect } from 'react';
import axios from 'axios'; // axios.defaults.baseURL = REACT_BASE_URL;
import { CoinCard, TrendingCardContainer } from '../componentImports';

const TrendingContainer = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const getTrendingData = async () => {
      const trendingData = await axios.get('/api/crypt/coins/trending');
      setTrending(trendingData.data.coins);
    };
    getTrendingData();
  }, []);

  return (
    // <body className="bg-gray-50 dark:bg-gray-800" cz-shortcut-listen="true">
      <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <div className="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/90" id="sidebarBackdrop"></div>
        
        <div id="main-content" className="relative h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900 w-1/2" style={{paddingLeft: '19%', paddingRight: '19%', width: '150%'}}>
            {/* MAIN */}
            <main >
              <div className="px-6 pt-6" style={{width: '125%', margin: '0 auto'}}> {/* px-4 => padding-left && padding-right = 1rem = 16px, pt-6 => padding-top = 1.5rem = 24px */}
                <div className="grid gap-4 xl:grid-cols-1 2xl:grid-cols-1"> {/* xl = responsive 1280px	@media (min-width: 1280px) { ... } */}
                  <TrendingCardContainer trending={ trending }/>
                </div>
              </div>
            </main>
        </div>
      </div>
    // </body>
  )
}

export default TrendingContainer