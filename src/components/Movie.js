import '../App.css';


import def_img from '../assets/default_img.png';

const DEFAULT_PLACEHOLDER_IMAGE = def_img;




function Movie({ movie }) {
    const title = movie.Title;
    const release = movie.Year;
    // console.log(movie.Poster);
    const poster = (movie.Poster === "N/A")?DEFAULT_PLACEHOLDER_IMAGE:movie.Poster;

  return (
    <div className='movie'>
      <h2>{title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${title}`}
          src={poster}
        />
      </div>
      <p>{release}</p>
    </div>
  );
}


export default Movie;