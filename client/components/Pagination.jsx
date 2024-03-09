import React, { useState } from 'react'

const Pagination = ({ currPage, totalPages, prevClick, nextClick, pageClick }) => {
    // example from Spotify: https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10
    // convert to GET /crypt/coins?limit=30&offset=30
    // sql query would be: `SELECT * FROM table1 LIMIT=${limit} OFFSET=${start - 1}` => if you want 0 to 10 then offset 

    const [pages, setPages] = useState([]);
    
    const pageArr = [];
    const pageItems = () => {
        for (let i = 1; i <= totalPages; i++) {
            pageArr.push(<li 
                key={i} 
                onClick={(e) => pageClick(i)}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >{i}</li>)
        }

        return pageArr;
    }
    
  return (
    <div className="flex flex-col items-center w-full">
        <span className="text-sm text-gray-700">
            Showing <span className="font-semibold text-gray-900">{currPage}</span> of <span className="font-semibold text-gray-900">{totalPages}</span> Pages
        </span>

        <ul className="inline-flex -space-x-px text-sm">
            <li>
                <button onClick={prevClick} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Previous</button>
            </li>


            {/* <li className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">{pageArr}</li> */}
            {pageItems()}

            <li>
                <button onClick={nextClick} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Next</button>
            </li>
        </ul>
    </div>
  )
}

export default Pagination