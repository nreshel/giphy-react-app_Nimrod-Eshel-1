import './SearchBar.scss'
import { useState } from "react";
import { useAppContext } from "../../context/appContext";
import { useAsync } from "../../hooks/useAsync";
export const SearchBar = () => {
	const [searchValue, setSearchValue] = useState('')
	const {searchImageList, loadImageList} = useAppContext()
	const handleSetSearchValue = (event) => {
		setSearchValue(event.target.value)
	}
	const handleSearchGiphy = async () => {
		if(searchValue.length > 0) {
			await searchImageList({q: searchValue})
		} else {
			await loadImageList()
		}
	}
	const handleOnEnter = (e) => {
		if(e.keyCode === 13) {
			return handleSearchGiphy();
		}
	}
	const {execute: refreshList} = useAsync({asyncFunction: handleSearchGiphy, immediate:false})

 return <div className='search-bar'>
	 <label for='search'>Search Gifs!</label>
	 <input onChange={handleSetSearchValue} onKeyDown={handleOnEnter} id='search' type={'search'} />
	 <button onClick={refreshList}>Search</button>
 </div>
}