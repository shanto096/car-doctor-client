import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Booking from "../pages/booking/Booking";
import BookingsAdd from "../pages/bookingAdd/BookingsAdd";
import PrivateRoute from "../pages/privateRoute/PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/booking/:id",
        element:<PrivateRoute><Booking></Booking></PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path:"/booking",
        element:<PrivateRoute><BookingsAdd></BookingsAdd></PrivateRoute>
       
      }

      ]
    },
  ]);

export default router;