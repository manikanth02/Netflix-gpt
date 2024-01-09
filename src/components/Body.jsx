import {createBrowserRouter} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const Body = () => {

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

    return(
        <div>
            <RouterProvider  router={defaultRouter}/>
        </div>
    )
}

export  default Body;