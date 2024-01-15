import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

    const getMovieList = async () => {


   // API CALL TO GET CURRENT PLAYING MOVIES
    const movieData = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",API_OPTIONS);
    const data = await movieData.json();
    dispatch(addNowPlayingMovies(data.results));
  }

  useEffect(() => {
    !nowPlayingMovies && getMovieList();
    /*eslint-disable-next-line*/
  },[]);
}

export default useNowPlayingMovies;