import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import SignUpForm from './Components/SignUpForm/SignUpForm';
import store from '../src/Store/Store'
import { Provider } from 'react-redux';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Layout from './Components/Layout/Layout';
import ProductCard from './Components/ProductCard/ProductCard';
import Shops from './Components/AppbarMenu/Shops';
import Offers from './Components/AppbarMenu/Offers';
import Contact from './Components/AppbarMenu/Contact';
import Pages from './Components/AppbarMenu/Pages';



const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[{
      path:'',
      element:<ProductCard />,
    },
    {
      path:'/details/:id',
      element:<ProductDetails />
    },
    {
      path:"/shops",
      element:<Shops />
    },
    {
      path:"/offers",
      element:<Offers />
    },
    {
      path:"/contact",
      element:<Contact />
    },
    {
      path:"/pages",
      element:<Pages />
    }
  ]
  },{
  path:'signupform',
  element:<SignUpForm />,
  }

])

root.render(

  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>
);

