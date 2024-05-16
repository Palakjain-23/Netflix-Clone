import { IMG_URL } from "../Utils/constants";

const MovieCard=({poster_path})=>{
    // console.log(poster_path);
    return(
        <div className="w-44 flex justify-center items-center overflow-hidden pr-4">
            <img alt="images"   src={IMG_URL + poster_path}/>
        </div>
    )
}
export default MovieCard;

