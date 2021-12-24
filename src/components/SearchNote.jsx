import { useState } from 'react'

const SearchNote = ({setSearch}) => {
    return <input id='searchText' placeholder='Search for notes' type="text" onChange={(e) => setSearch(e.target.value)}></input>
}

export default SearchNote