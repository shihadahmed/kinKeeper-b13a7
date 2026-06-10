import { createBrowserRouter} from "react-router";
// import App from "../App";
import RetroNotFound from "../error/Error";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import TimeLine from "../pages/TimeLine";
import Stats from "../pages/Stats";

export const router = createBrowserRouter ([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <RetroNotFound />,
    children:[
      {
      path: "/",
      element: <Home/>
    },
    {
      path: "/timeline",
      element: <TimeLine/>
    },{
      path: "/stats",
      element: <Stats/>
    }
  ],
  },
]);