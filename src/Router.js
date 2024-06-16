import { createBrowserRouter } from "react-router-dom";
import Userlist from "./components/Userlist";
import App from "./App";
import Create from "./components/Create";
import Update from "./components/Update";
const router=createBrowserRouter(
    [
        {
path:"/",
element:<App/>,
children:
[
    {
        path:"/users",
        element:<Userlist/>
    },
    {
        path:"/user/add",
        element:<Create/>
    },
    {
        path:"/user/update/:id",
        element:<Update/>
    }
]


}
       

    ]
)
  export default router;  
