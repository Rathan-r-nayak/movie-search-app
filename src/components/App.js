// import './App.css';
import {useState,useEffect} from 'react'
import Header from './Header';
import Movie from './Movie';
import Search from './Search';
import '../App.css';


const MOVIE_API_URL = "https://www.omdbapi.com/?s='K.G.F: Chapter 1'&apikey=64f5bb53";


const App = () =>
{
  
  const [loading,setLoading] = useState(true);
  const [movies,setMovies] = useState([]);
  const [errorMessage,setErrorMessage] = useState(null);

  useEffect(()=>
  {
    fetch(MOVIE_API_URL)
    .then(response=>response.json())
    .then(jsonResponse=>{
      setMovies(jsonResponse.Search);
      setLoading(false);
    });
  },[]);

  const search = (searchValue) =>{
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=64f5bb53`)
    .then(response=>response.json())
    .then(jsonResponse=>{
      if(jsonResponse.Response === "True")
      {
        console.log(jsonResponse.Search);
        setMovies(jsonResponse.Search);
        // document.getElementsByClassName('movies').innerHTML = jsonResponse;
        setLoading(false);
      }
      else
      {
        setErrorMessage(jsonResponse.Error);
        setLoading(false);
      }
    });
  };



  return(
    <div className="App">
      <Header text = "SEARCH MOVIES"/>
      <Search search = {search}/>


      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading... </span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map(movie => (
            <Movie key={movie.imdbID} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};


export default App;
