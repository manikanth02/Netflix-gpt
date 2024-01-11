import {createBrowserRouter} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
// import { useEffect } from "react";
// import { auth } from "../utils/firebase";
// import { onAuthStateChanged } from "firebase/auth";
// import { useDispatch } from "react-redux";
// import { addUsers, removeUsers } from "../utils/userSlice";

const Body = () => {
//   const dispatch = useDispatch();
   const defaultRouter = createBrowserRouter([
    {
        path : "/",
        element:<Login />
    },
    {
        path : "/browse",
        element : <Browse />
    }
]);

//  useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//             const {uid,email,displayName} = user;
//             dispatch(addUsers({uid:uid,displayName:displayName,email:email}));
//           // User if signed in || signed up add in store
//           // ...
//         } else {
//           // User is signed out removed from store
//           dispatch(removeUsers());
//         }

//  })
// },[]);

    return(
        <div>
            <RouterProvider  router={defaultRouter}/>
        </div>
    )
}

export  default Body;