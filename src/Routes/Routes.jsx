import {
    createBrowserRouter
   
  } from "react-router-dom";

import Home from "../pages/Home";


import CommonLayout from "../pages/CommonLayout";
import Project from "../pages/Project";
import Resume from "../pages/Resume";
import Contactus from "../pages/Contactus";
import Aboutus from "../pages/Aboutus";
import Service from "../pages/Service";
  const router = createBrowserRouter([
    {
      path: "/",
      element:<CommonLayout></CommonLayout> ,
      children:[
      {  path: "/",
        element: <Home></Home>,
      
      },
      {  path: "/projects",
        element: <Project></Project>,
      
      },
      {  path: "/resume",
        element: <Resume></Resume>,
      
      },
      {  path: "/contactus",
        element: <Contactus></Contactus>,
      
      },
      {  path: "/aboutus",
        element: <Aboutus></Aboutus>,
      
      },
      {  path: "/services",
        element: <Service></Service>,
      
      },
       ],
      
    },
  ]);
  export default router;