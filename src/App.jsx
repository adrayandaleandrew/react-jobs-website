import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Router} from 'react-router-dom';
import React from 'react';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
  <Route index element={<HomePage />} />
  </Route>
  )
);

const App = () => {
  return (
   <RouterProvider router={router} />
  );
};

export default App