import NETFLIX_LOGO from "../assets/img/NETFLIX_LOGO.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUsers, removeUsers } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    };

    const handleGptSearchClick = () => {
      // Toggle GPT Search
      dispatch(toggleGptSearchView());
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid,email,displayName} = user;
                dispatch(addUsers({uid:uid,displayName:displayName,email:email}));
                navigate("/browse")
              // User if signed in || signed up add in store
            } else {
              // User is signed out removed from store
              dispatch(removeUsers());
              navigate("/");
            }
     })
     return () => unsubscribe();
     /*eslint-disable-next-line*/
    },[]);

    const handleLanguageChange = (e) => {
       dispatch(changeLanguage(e.target.value));
    }


    return (
        <div className="absolute w-screen px-8 py-2  z-10 flex flex-col md:flex-row justify-between">
            <img className="w-44"  src={NETFLIX_LOGO} alt="NETFLIX LOGO"/>
            {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white rounded"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
            <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>

       { user && 
        <div className="bg-red-700 p-[10px] rounded text-lg" >
            <button onClick={() => handleSignOut()}>Sign Out</button>
        </div>
        }
        </div>
    )
}

export default Header;