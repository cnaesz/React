import { useState } from 'react'
import './App.css'
import { Searchbar } from './components/Searchbar.jsx'
import { SearchResList } from './components/SearchResList.jsx'

function App() {

  const [searchResult, setSearchResult] = useState([])

  return <div className='App'>
  <div className='search-bar-container'>
    <Searchbar setSearchResult={setSearchResult}/>
    <SearchResList results={searchResult}/>
  </div>
  </div>
}

export default App
