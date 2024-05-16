import MovieCard from "./MovieCard";
const MovieList=({title,movies})=>{
     //console.log(movies);
     if(!movies)return;
    
    //  console.log(movies[0].poster_path);
 return(
    <div className="px-10">
    <h1 className="text-3xl py-4 text-white ">{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-hidden">            
            <div className="flex">
            {movies.map(movie => 
            <MovieCard key={movie.id} poster_path={movie.poster_path}/>
             )}   
            </div>
        </div>
    </div>
 )   
}
export default MovieList;
