import Header from "./Header";
import NETFLIX_BACKGROUND from "../assets/img/NETFLIX_BACKGROUND.jpg";
import { useRef, useState } from "react";
import { checkValidations } from "../utils";
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUsers
 } from "../utils/userSlice";
 import {  updateProfile } from "firebase/auth";
const Login = () => {

   const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errorMessage,setErrorMessage] = useState(null);
    const [isSignUp,setIsSignUp] = useState(true);
    // const [formState,setFormState] = useState({
    //     email:"",
    //     password:"",
    //     name:"",
    // })
    
    //creating References for input fields
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const handleClick = () => {
        setIsSignUp(!isSignUp);
    }
    const handleSignIn = () => {
        const message = checkValidations(name?.current?.value,email.current.value,password?.current.value);
        if(message === null){
            if(!isSignUp){
                //Sign Up Case
                createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
                .then((userCredentials) =>{
                    const user = userCredentials.user;
                    updateProfile(user,{displayName:name.current.value})
                    .then(() =>{
                        const {uid,email,displayName} = auth.currentUser;
                        dispatch(addUsers({uid:uid,displayName:displayName,email:email}));
                        console.log({userCredentials:userCredentials});
                        navigate("/browse")
                    })
                    .catch((error) => {
                        console.log({error:error});
                        setErrorMessage(error.code + "" + error.message);
                    })
                })
                .catch((error) => {
                    setErrorMessage(error.code + "-" + error.message);
                })
                



            }else{
                //Sign In Case
                signInWithEmailAndPassword (auth,email.current.value,password.current.value)
                .then((userCredentials) => {
                    console.log({userCredentials:userCredentials});
                    navigate("/browse");
                })
                .catch((error) => {
                    console.log({error:error});
                    setErrorMessage(error.code + "-" + error.message);
                })
            }
        }

    }
    return (
        <div className="">
            <Header />
            <div className="absolute ">
                <img className="" src={NETFLIX_BACKGROUND} alt="NETFLIX BACKGROUND"/>
            </div>
            <form 
            onSubmit={(e) => e.preventDefault()}
            className="w-3/12 my-40 absolute mx-auto right-0 left-0 p-12 bg-black text-white rounded-lg bg-opacity-90"
            >
                <h1 className="font-bold text-3xl">
                {isSignUp ? "Sign In" : "Sign Up"}
                 </h1>
                {!isSignUp &&

                 <input
                  type="text"
                  placeholder="Enter Full Name" 
                  className="p-4 my-4  w-full  bg-gray-700" 
                  ref={name}
                   />
                }

                <input 
                type="text"
                placeholder="Enter Email Address" 
                className="p-4 my-4  w-full  bg-gray-700"
                ref={email} />

                <input 
                type="password" 
                placeholder="Enter Password" 
                className="my-4 p-4  w-full bg-gray-700"
                ref={password}
                />
                {errorMessage && <p className="text-red-700">{errorMessage}</p>}
                <button className="p-4 my-6 bg-red-700 w-full rounded" onClick={() => handleSignIn()}>{isSignUp ? "Sign In" : "Sign Up"}</button>

                <p className="py-2 cursor-pointer" onClick={handleClick}>{isSignUp ? "New to Netflix?Sign Up Now":"Already have an account? Sign In" }</p>

            </form>
        </div>
    )
}

export default Login;