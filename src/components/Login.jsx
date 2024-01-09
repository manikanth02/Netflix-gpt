import Header from "./Header";
import NETFLIX_BACKGROUND from "../assets/img/NETFLIX_BACKGROUND.jpg";
import { useState } from "react";
const Login = () => {
 
    const [isSignUp,setIsSignUp] = useState(true);
    const handleClick = () => {
        setIsSignUp(!isSignUp);
    }
    const handleSignIn = (data) => {
     console.log({data:data});

    }
    return (
        <div className="">
            <Header />
            <div className="absolute ">
                <img className="" src={NETFLIX_BACKGROUND} alt="NETFLIX BACKGROUND"/>
            </div>
            <form className="w-3/12 my-40 absolute mx-auto right-0 left-0 p-12 bg-black text-white rounded-lg bg-opacity-90">
                
                <h1 className="font-bold text-3xl">{isSignUp ? "Sign In" : "Sign Up"}</h1>


                {!isSignUp && <input type="text" placeholder="Enter Full Name" className="p-4 my-4  w-full  bg-gray-700" />}

                <input type="text" placeholder="Enter Email Address" className="p-4 my-4  w-full  bg-gray-700" />

                <input type="password" placeholder="Enter Password" className="my-4 p-4  w-full bg-gray-700" />

                <button className="p-4 my-6 bg-red-700 w-full rounded" onClick={() => handleSignIn()}>{isSignUp ? "Sign In" : "Sign Up"}</button>

                <p className="py-2 cursor-pointer" onClick={handleClick}>{isSignUp ? "New to Netflix?Sign Up Now":"Already have an account? Sign In" }</p>

            </form>
        </div>
    )
}

export default Login;