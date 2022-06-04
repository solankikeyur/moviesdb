import React, {useState} from 'react'
import Movies from '../components/Movies'
import SearchBar from '../components/SearchBar'
import Loader from '../components/Loader';

export default function Homepage() {

  const [searchText, setSearchText] = useState(null);
  const [tmpSearchText, setTmpSearchText] = useState(null);
  const [loader, setLoader] = useState(false);

  const handleSearchBtn = () => {
    setSearchText(tmpSearchText);
  }

  const handleSearchInput = (e) => {
    setTmpSearchText(e.target.value);
  }
  
  return (
    <div className='container'>
        { loader ? <Loader></Loader> : "" }
        <SearchBar placeholder="Enter Movie Name" btnName="Search" handleSearchBtn={handleSearchBtn} handleSearchInput={handleSearchInput} ></SearchBar>
        <hr />
        <Movies searchText={searchText} setLoader={setLoader} loader={loader}></Movies>
    </div>

  )
}
