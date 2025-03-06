import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Statistic from "../pages/Statistic";
import Dashboard from "../pages/Dashboard";
import GadgetCards from "../components/GadgetCards";

const routes=createBrowserRouter([
    {
      path:'/',
      element:<MainLayout />,
      children:[
        {
            path:'/',
            element: <Home />,
            loader:()=>fetch('../categories.json'),
            children:[
                {
                    path:'/',
                    element: <GadgetCards />,
                    loader:()=>fetch('../gadgets.json')
                },{
                    path:'/category/:category',
                    element: <GadgetCards />,
                    loader:()=>fetch('../gadgets.json')
                }
            ]
        },
        {
            path:'/statistic',
            element: <Statistic />
        },
        {
            path:'/dashborad',
            element: <Dashboard />
        },
      ]
    }
  ]);

  export default routes;