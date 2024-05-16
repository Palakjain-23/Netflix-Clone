import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../Utils/moviesSlice";
import { API_Options } from "../Utils/constants";
const useUpComingMovies=()=>{
    const dispatch=useDispatch();
    const getNowPlaying=async()=>{
     const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_Options); 
     const json = await data.json();
     dispatch(addUpComingMovies(json.results));
    //  console.log(json);
    }
    useEffect(()=>{
        getNowPlaying();
    },[]);

}
export default useUpComingMovies;
