import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const VideoTitle =({title,overview})=>{
    return(
        <div className="pt-72 w-screen aspect-video pl-10  absolute bg-gradient-to-r from-black">
            <h1 className="text-4xl text-white">{title}</h1>
            <p className="text-lg w-2/4 text-white">{overview}</p>
            <div className="mt-5">
                <button className="bg-red-600 text-white px-6 rounded-sm py-2 mr-10 hover:bg-opacity-80">
                <PlayArrowIcon style={{ marginRight: '4px' }} color='white'  />
                Play</button>
                <button className="text-white bg-black px-4 py-2 rounded-sm hover:border border-white">
                <InfoOutlinedIcon style={{ marginRight: '4px' }}/>
                more info</button>
            </div>
        </div>
    )
}
export default VideoTitle;
