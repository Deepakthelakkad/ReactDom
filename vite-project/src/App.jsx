import './App.css';
import Navbar from './component/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import User from './component/User';
import Product from './component/Product';
import ProductDetails from './component/ProductDetails'; // Import the new component

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></>,
    },
    {
      path: "/product",
      element: <><Navbar/><Product/></>,
    },
    {
      path: "/product/:productId", 
      element: <><Navbar/><ProductDetails/></>,
    },
    {
      path: "/about",
      element: <><Navbar/><About/></>,
    },
    {
      path: "/user/:username",
      element: <><Navbar/><User/></>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
