import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideos } from "../utils/movieSlice";

const useGetTrailerVideo = (movieId) => {

    const dispatch = useDispatch();
    const getMovieVideo = async () => {
        // API CALL TO GET ALL VIDEOS OF A PARTICULAR MOVIE
         const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,API_OPTIONS);
         // CONVERT DATA TO JSON
         const json = await data.json(); 
         // FILTER DATA IN ALL VIDEOS TO GET TRAILER VIDEO
         const filterData = json.results?.filter((video) => video.type === "Trailer");
         
         const trailer = filterData.length ? filterData[0] : json.results[0];

         dispatch(addTrailerVideos(trailer));
     }
 
     useEffect(() => {
         getMovieVideo();
         /*eslint-disable-next-line*/
     },[]);
}

export default useGetTrailerVideo;