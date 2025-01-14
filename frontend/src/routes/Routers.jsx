import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import Contact from '../pages/Contact'
// import Login from '../pages/Login'
import Services from '../pages/Services'
// import Signup from '../pages/Signup'
import Doctors from '../pages/Doctors/Doctors'
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import Main from "../layout/Main";
import SignUp from "../Shared/SignUp/SignUp";
import Login from "../Shared/Login/Login";

// import {Routes, Route} from 'react-router-dom'


// const Routers = () => {
//   return <Routes>
//     <Route path="/" element={<Home/>} />
//     <Route path="/home" element={<Home/>} />
//     <Route path="/doctors" element={<Doctors/>} />
//     <Route path="/doctors/:id" element={<DoctorDetails/>} />
//     <Route path="/login" element={<Login/>} />
//     <Route path="/register" element={Signup} />
//     <Route path="/contact" element={<Contact/>} />
//     <Route path="/services" element={<Services/>} />
//   </Routes>
//   };

// export default Routers

export const router = createBrowserRouter([
  {
      path:"/",
      element: <Main></Main>,
      // errorElement:<ErrorPage></ErrorPage>,
      children:[
          {
              path: '/',
              element: <Home></Home>
          },
          {
              path:'/doctors',
              element: <Doctors/>
          },
          {
              path:'/doctors/:id',
              element:<DoctorDetails/>,
          },
          {
              path: '/login',
              element: <Login></Login>
          },
        //   {
        //       path:'/signup',
        //       element: <SignUp></SignUp>
        //   },
         
          {
             path: '/contact',
             element:<Contact/>
          },
          
          {
            path:'/services',
            element:<Services/>,
          },
           // {
          //     path:'/submitted/:id',
          //     element: <ContestDetails></ContestDetails>,
          //     loader: ({params}) => fetch(`https://contest-hub-server-alpha.vercel.app/contests/${params.id}`)
          // },
      ]
  },
  
])