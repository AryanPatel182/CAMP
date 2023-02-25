import './App.css';
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Navbar from './components/layout/Navbar'; // import navbar
import Login from './components/views/auth/Login'; // new 
import Signup from './components/views/auth/Signup'; // new
import Dashboard from './components/views/app/Dashboard';
import ButtonAppBar from './components/layout/ButtonAppBar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  }  
]);

function App() {  
  return (
    <div className='App'>
      <ButtonAppBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
