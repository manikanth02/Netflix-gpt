import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();

    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    return (
        <div>
          <Header/>
          {
            showGptSearch ? (<GPTSearch/>) :
            (
              <>
              <MainContainer/>
              <SecondaryContainer/>
              </>
            )
          }
        </div>
    )
}

export default Browse;