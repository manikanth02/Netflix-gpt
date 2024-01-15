import { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { API_OPTIONS, genres } from "../utils/constants";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../utils/gptSlice";
const GPTSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const API_CALL = async ({id}) => {
      const url = `https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=${id}&page=1`;
      const response = await fetch(url, options);
      const data = await response.json();
      // const response = ["Thanksgiving","phir hera feri","Dhol","Dhamal","Krish"];
      return data;
    }

     // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };


      const handleGptSearchClick = async () => {
      const id = searchText.current.value;
      console.log({id:id});
      const response  =await API_CALL({id});
	    const result = response?.results;
	    console.log({API_RESULTS:result});
      const newResult = result?.map((item) =>item?.original_title);
      const promiseArray = result.map((movie) => searchMovieTMDB(movie?.original_title));

      const finalData = await Promise.all(promiseArray);

      console.log({finalData:finalData});
      dispatch(addGptMovies({movieNames:newResult  , movieResults:finalData}));
    }

    return (
        <div className="w-full  pt-[35%] md:pt-[10%] flex justify-center">
        <form
          className="w-full md:w-1/2 bg-black grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <select
            className=" p-4 m-4 col-span-9"
            placeholder={lang[langKey].gptSearchPlaceholder}
            ref={searchText}
          >
          {
            genres.map(genre => <option key = { genre.id}value = {genre.id}>{genre.name}</option>)}
          </select>
          <button
            className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    )
}

export default GPTSearchBar;