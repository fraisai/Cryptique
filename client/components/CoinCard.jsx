import React, { useState, useRef } from 'react';
// https://flowbite.com/docs/typography/images/
import CryptoOneWeekChart from './dashboard-charts/CryptoOneWeekChart';

const CoinCard = ({
  img,
  name, 
  price, 
  data, 
}) => {
  const [index, setIndex] = useState(0);
  const [showChart, setShowChart] = useState(false);
  const handleNextClick = () => setIndex(index + 1);
  const handleShowChartClick = () => setShowChart(!showChart);
  const largeImg = useRef({});
  let item = <></>;
  
  function handleClick(e) {
    console.log("e", e);
    e.preventDefault();
    
  }
  
  if (index === 0) {

  } else if (index === 1) {
    item = chart(name, data)

  } else {
    item = about(name)
  }
  if (data) {
    return (
      <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{width: '300px', height: '350px'}}>

        <ul className="flex flex-wrap pb-8 text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">
          <li className="me-2">
            <button id="about-tab" type="button" className="inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500" onClick={() => setIndex(0)}>
              Crypto
            </button>
          </li>

          <li className="me-2">
            <button id="services-tab" type="button" className="inline-block p-4 text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-blue-300" onClick={() => setIndex(1)}>
              7 Day Chart
            </button>
          </li>

          <li className="me-2">
            <button id="statistics-tab" type="button" role="tab" className="inline-block p-4 text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300" onClick={() => setIndex(2)}>
              About
            </button>
          </li>
        </ul>

        {index === 0 ?
          <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="p-5 pt-6 pt-8 rounded-xs" style={{ padding: '20px', margin: '0 auto', maxHeight: '150px'}} src={img} alt="" />
          
            <div className="p-5 pt-6">
              <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h4>
            

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Market Price: {price}</p>

              {/* Add to Investments Button */}
              <button onClick={handleClick}>
                <svg width="40px" height="36px" viewBox="1.5 2 30 19" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#1a56db"><g id="SVGRepo_bgCarrier" strokeWidth="2"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#1A56DB" strokeWidth="1.5"></circle> <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#1a56db" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
              </button>
            </div>
          </div>
          :
          <div className="max-w-xs bg-white rounded shadow dark:border-gray-700" style={{width: '298px', height: '314px'}}>
            {item}
          </div>
        }
        


        </div>
    );
  } else return <></>;
};

const chart = (name, price_7d) => {
  return (
    <div style={{ margin: '0 auto', }} className='p-4 pb-4 text-center'>
      {(price_7d) ? <CryptoOneWeekChart name={name} chartData={price_7d} maxH={'250px'} maxW ={'190px'} /> : <></>}
    </div>
  )
}
const about = (name) => {
  return (
    <>
    <div className="max-w-xs bg-white ">
      <div className="p-8 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about">
        <p className="mb-3 text-gray-500 dark:text-gray-400">Read about {name}</p>
        <a href="/" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
          Learn more
          <svg className=" w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
        </a>
      </div>
    </div>
    </>
  )
}

export default CoinCard;
