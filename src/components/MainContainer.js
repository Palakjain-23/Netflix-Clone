import { useSelector } from "react-redux";
import Videobg from "./Videobg";
import VideoTitle from "./VideoTitle";
const MainContainer=()=>{
   const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
   if(!movies) {return;}
   
   const {original_title,overview,id}=movies[14];
// console.log(id);
   return(
    <div className="overflow-hidden">
        <VideoTitle title={original_title}overview={overview}/>
        <Videobg movieId={id}/>
    </div>
   )
}
export default MainContainer;
