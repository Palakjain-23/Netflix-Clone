import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopratedMovies } from "../Utils/moviesSlice";
import { API_Options } from "../Utils/constants";
const useTopratedMovies=()=>{
    const dispatch=useDispatch();
    const getNowPlaying=async()=>{
     const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_Options); 
     const json = await data.json();
     dispatch(addTopratedMovies(json.results));
    }
    useEffect(()=>{
        getNowPlaying();
    },[]);

}
export default useTopratedMovies;
