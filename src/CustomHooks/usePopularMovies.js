import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../Utils/moviesSlice";
import { API_Options } from "../Utils/constants";
const usePopularMovies=()=>{
    const dispatch=useDispatch();
    const getNowPlaying=async()=>{
     const data= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_Options); 
     const json = await data.json();
     dispatch(addPopularMovie(json.results));
    }
    useEffect(()=>{
        getNowPlaying();
    },[]);

}
export default usePopularMovies;
