
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';
import { useState, useEffect } from 'react';

// import Search from './search';

function App() {
  const api_url = 'http://www.omdbapi.com/?apikey=71dca6e8&'

  const [movies, setMovies] = useState ([])
  const [searchTerm, setSearchTerm] = useState ([])

  const SearchMovies = async (title) => {
    const responce = await fetch(`${api_url}s=${title}`);
    const data = await responce.json();
    setMovies(data.Search);
  }
 useEffect(()=>{
SearchMovies('iron man');  
} ,[])

  return (
    <div className="app">
        <h1>Cinema</h1>
        <div className='search'>
          <input placeholder='Search any movile'
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}>            
          </input>
          <img src={SearchIcon}
          alt='Search'
          onClick={()=>SearchMovies(searchTerm)}/>      
    

          </div>
            {
              movies.length > 0 
              ?(
                <div className='container'>
                  {movies.map((movie) =>(
                <MovieCard movie={movie}/>

                  ))}
                </div>)
              :(
                <div className='empty'><h2>No Movies Found!</h2></div>)
            }
          
    </div>
  );
}

export default App;
