import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideos:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies:(state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
          },
        addTrailerVideos:(state,action) => {
            state.trailerVideos = action.payload;
        }
    }
});

export const {addNowPlayingMovies,addTrailerVideos,addPopularMovies} = movieSlice.actions;

export default movieSlice.reducer;

