import Header from "./Header";
import useNowPlayingMovies from "../CustomHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../CustomHooks/usePopularMovies";
import useTopratedMovies from "../CustomHooks/useTopratedMovies";
import useUpComingMovies from "../CustomHooks/useUpComingMovies";
const Browse=()=>{
   useNowPlayingMovies();
   usePopularMovies();
   useTopratedMovies();
   useUpComingMovies();
    return(
        <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
        </div>
    )
}
export default Browse;
