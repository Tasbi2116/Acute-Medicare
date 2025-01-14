// import React from 'react'
// import ReactDOM from 'react-dom/client'
// //import { StrictMode } from 'react'
// //import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter } from 'react-router-dom'

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );


import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Routers.jsx';
import {HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <HelmetProvider>
          <div className='bg-white'>
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
