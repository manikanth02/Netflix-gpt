import { BG_URL } from "../utils/constants";
import GPTSearchBar from "./GPTSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestion";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen w-screen object-cover" src={BG_URL} alt="logo" />
      </div>
      <div className="">
        <GPTSearchBar />
        <GptMovieSuggestions/>
      </div>
    </>
  );
};
export default GPTSearch;
