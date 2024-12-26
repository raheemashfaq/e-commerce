import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Dashboard from '../src/Components/Dashboard/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import SignUpForm from './Components/SignUpForm';
import store from '../src/Store/Store'
import { Provider } from 'react-redux';
import ProductDetails from './Components/ProductDetails';
import Layout from './Components/Layout/Layout';

import HeroSec from './Components/HeroSec';
import SlickSlider from './Components/SlickSlider';
import ProductCard from './Components/ProductCard';
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

