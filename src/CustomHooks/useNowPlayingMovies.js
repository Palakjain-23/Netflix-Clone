import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../Utils/moviesSlice";
import { API_Options } from "../Utils/constants";
const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
    const getNowPlaying=async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_Options); 
     const json = await data.json();
    //  console.log(json);
     dispatch(addNowPlaying(json.results));
    }
    useEffect(()=>{
        getNowPlaying();
    },[]);

}
export default useNowPlayingMovies;
