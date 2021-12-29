import { useState } from 'react'
import useWindowSize from './myhooks/useWindowSize.jsx'

const SearchNote = ({setSearch, setHeight}) => {
     const size = useWindowSize()

    return <input id='searchText' onFocus={() => setHeight(size.height)} placeholder='Search for notes' type="text" onChange={(e) => setSearch(e.target.value)}></input>
}

export default SearchNote