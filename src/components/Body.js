import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import SignIn from "./SignIn";
import { RouterProvider } from "react-router-dom";
const Body=()=>{
    
    const appRouter=createBrowserRouter([
        {
            path: '/',
            element:<SignIn/>,
        },
        {
            path:'/browse',
            element:<Browse/>,
        }
    ]);
  
  return(
<div>
    <RouterProvider router={appRouter}/>
</div>
  )
}
export default Body;
