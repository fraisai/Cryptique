import React, { useState, useRef, useMemo } from 'react';
import axios from 'axios';


const SearchBar = () => {
    const queryRef = useRef('');
    const [items, setItems] = useState([]);
    const filteredList = useMemo(() => {
        return items.filter((el, ind) => {
            if (el.name.toLowerCase().includes(queryRef.current.toLowerCase())) {
                return (<option key={ind} value={el.name} />)
            }
        })

    }, [items, queryRef.current])

    const getItems = async () => {
        try {
            const res = await axios.get(`https://rickandmortyapi.com/api/location/?name=${query}`);
            setItems(data.data.results);
            queryRef.current = ''
        } catch (error) {
            console.log('Error in SearchBar', error)
        }
    }

    function debounceResults() {

    }
    return (
        <form>
            <input 
                type='search'
                placeholder='Search'
                value={queryRef}
                onChange={(e) => {
                    setQuery(e.target.value)
                    getItems()
                }}
            />
            <datalist>
                {queryRef.current.length > 0 ?
                    filteredList() 
                    : 
                    ''
                }
            </datalist>

        </form>
  )
}

export default SearchBar