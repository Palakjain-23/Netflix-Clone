import { useSelector } from "react-redux";
import Videobg from "./Videobg";
import VideoTitle from "./VideoTitle";
const MainContainer=()=>{
   const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
   if(!movies) {
    //console.log("lol");
    return;
   }
   console.log(movies);
   const mainMovie=movies[2];
   //console.log(mainMovie);

   const {original_title,overview,id}=mainMovie;

   return(
    <div>
        <VideoTitle title={original_title}overview={overview}/>
        <Videobg movieId={id}/>    
    </div>
   )
}
export default MainContainer;
