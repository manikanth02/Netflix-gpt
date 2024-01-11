import NETFLIX_LOGO from "../assets/img/NETFLIX_LOGO.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
            // Sign-out successful.
          }).catch((error) => {
            navigate("/");
            // An error happened.
          });
    }
    return (
        <div className="absolute w-screen flex items-center justify-between  px-8 py-2 bg-gradient-to-b from-black z-10">
            <img className="w-44"  src={NETFLIX_LOGO} alt="NETFLIX LOGO"/>

       { user && 
        <div className="bg-red-700 p-[10px] rounded text-lg" >
            <button onClick={() => handleSignOut()}>Sign Out</button>
        </div>
        }
        </div>
    )
}

export default Header;