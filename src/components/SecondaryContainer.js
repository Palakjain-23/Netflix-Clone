import {useSelector} from "react-redux";
import MovieList from "./MovieList";
const SecondaryContainer =()=>{
    const movies=useSelector((store)=>store.movies);
    console.log(movies);
    // const movie= movies.nowPlayingMovies;
    return(
     <div className=" bg-black">
     <div className=" z-20 -mt-40 relative "> 
     <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
     <MovieList title={"Top Rated"} movies={movies.topratedMovies} />
     <MovieList title={"Popular"} movies={movies.popularMovies} />
     <MovieList title={"Upcoming"} movies={movies.upComingMovies} />
     </div>
     </div>
    )
}
export default SecondaryContainer;
