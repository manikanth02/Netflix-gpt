import { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
const GPTSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const handleGptSearchClick = async () => {
        console.log(searchText.current.value);
    }
    return (
        <div className="w-full  pt-[35%] md:pt-[10%] flex justify-center">
        <form
          className="w-full md:w-1/2 bg-black grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            className=" p-4 m-4 col-span-9"
            placeholder={lang[langKey].gptSearchPlaceholder}
            ref={searchText}
          />
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