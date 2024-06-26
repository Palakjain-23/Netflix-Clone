import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_Options } from "../Utils/constants";
import { addTrailerVideo } from "../Utils/moviesSlice";

const useMovieTrailer=(movieId)=>{
    // console.log(movieId);
    const dispatch=useDispatch();
    const getMovieVideos=async()=>{
     const data= await fetch('https://api.themoviedb.org/3/movie/'+
     movieId +
     "/videos?language=en-US" , 
     API_Options); 
    // const data=await fetch('https://api.themoviedb.org/3/movie/653346/videos?language=en-US',API_Options)
     const json = await data.json();
    
    //  console.log(json);
     const filterData=json.results.filter((video)=>video.type==="Trailer");
     const trailer=filterData.length?filterData[0]:json.results[0];
      
    //  console.log(trailer);
     dispatch(addTrailerVideo(trailer));
 }
 
 useEffect(()=>{
     getMovieVideos();
 },[]);
 
}
export default useMovieTrailer;
