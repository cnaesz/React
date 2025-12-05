import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import './Searchbar.css'

export const Searchbar = ({setSearchResult}) => {
    const [input, setinput] = useState('');

    const fetchData = (value) => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())
            .then((json) => {
                const filteredData = json.filter((user) => {
                    return value &&
                        user &&
                        user.name &&
                        user.name.toLowerCase().includes(value.toLowerCase());
                });
                setSearchResult(filteredData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    const handleChange = (value) => {
        setinput(value);
        fetchData(value);
    }

    return (
        <div className='input-wrapper'>
            <input
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                className="input"
                type="text"
                placeholder='Search...'
            />
            <FaSearch id="search-icon" />
        </div>
    )
}