import React from 'react'

export default ({searchText, setSearchText}) => <div className="leftbar">
    <h1>gregslist</h1>
    <p>greg's recommendations for home improvement contractors</p>
    <input placeholder="search gregslist" value={searchText} onChange={(e) => setSearchText(e.target.value.toLowerCase().trim())}/>
</div>