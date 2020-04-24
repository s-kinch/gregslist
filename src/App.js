import React, { useState } from 'react'
import './App.scss'
import data from './data'
import Categories from './components/Categories'
import LeftBar from './components/LeftBar'

function App() {
    const [searchText, setSearchText] = useState('')
    // setting searchText already lowercased & trimmed

    const filteredData = (!searchText ? Object.entries(data) : Object.entries(data).reduce((acc, current) => {
            if (current[0].toLowerCase().includes(searchText)) return [...acc, current]
            else {
                const nameMatches = current[1].filter(x => x.name.toLowerCase().includes(searchText))
                if (nameMatches.length > 0) return [...acc, [current[0], nameMatches]]
                else return acc
            }
        }, []))
        .map(entry => ({ categoryName: entry[0], listings: entry[1] }))

    return (
        <div className="App">
            <LeftBar setSearchText={setSearchText} searchText={searchText} />
            <Categories categories={filteredData} />
        </div>
    )
}

export default App

// TODO: favicon