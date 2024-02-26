import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import CreatePost from './pages/CreatePost'
import Dashbord from './pages/Dashbord';
import DeletePost from './pages/DeletePost';
import EditPost from './pages/EditPost';
import UserProfile from './pages/UserProfile';
import Home from './pages/Home';
import Errorpage from './pages/Errorpage';
import './index.css'
import Login from './pages/Login';
import Bookpage from './pages/Bookpage';
import Signup from './pages/Signup';
import JobsPost from './pages/JobsPost';

const router= createBrowserRouter([

  {
    path:"/",
    element:<Layout/>,
    errorElement:<Errorpage/>,
    children:[
      {index:true,element:<Home/>},
      {
        path:"/createpost",
        element:<CreatePost/>
      },
      {
        path:"/dashbord",
        element:<Dashbord/>
      },
      {
        path:"/deletepost",
        element:<DeletePost/>
      },
      {
        path:"/editpost",
        element:<EditPost/>
      },
      {
        path:"/userprofile",
        element:<UserProfile/>
      },
      
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/bookpage",
        element:<Bookpage/>
      },
      {
        path:"/signup",
        element:<Signup/>
      },
      {
        path:"/jobspost",
        element:<JobsPost/>
      }
    ]
  
   }
]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

