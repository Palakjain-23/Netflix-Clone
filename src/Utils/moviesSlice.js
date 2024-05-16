import { createSlice} from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topratedMovies:null,
        upComingMovies:null,
    },
    reducers:{
        addNowPlaying: (state,action)=>{
            state.nowPlayingMovies = action.payload;
            // console.log(state.current);
        },
        addPopularMovie: (state,action)=>{
            state.popularMovies=action.payload;
        },
        addTopratedMovies: (state,action)=>{
            state.topratedMovies=action.payload;
        },
        addUpComingMovies: (state,action)=>{
            state.upComingMovies=action.payload;
        },
        addTrailerVideo: (state,action)=>{
            state.trailerVideo = action.payload;
        },
    },
    
});
export const{addNowPlaying,addTrailerVideo,addPopularMovie,addTopratedMovies,addUpComingMovies}=moviesSlice.actions;
export default moviesSlice.reducer;
