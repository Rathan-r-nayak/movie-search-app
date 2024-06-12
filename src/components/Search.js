import '../App.css';


import {useState} from 'react';


// const URL = "http://www.omdbapi.com/?apikey=64f5bb53&s=";


const Search = (props) =>
{
    const [searchValue, setSearchValue] = useState("");

    const handleInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () =>{
        setSearchValue("");
    }

    const onClickSearch = (e) =>
    {
        e.preventDefault();
        console.log('searchValue:',searchValue);
        props.search(searchValue);
        resetInputField();
    }

    return(
        <form className='search'>
            <input type="text" value={searchValue} onChange={handleInputChanges} placeholder="Search Movies"/>
            <input type="submit" onClick={onClickSearch} value="Search"/>
        </form>
    )
}


export default Search;