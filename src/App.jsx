import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<h1>My App</h1>} />)
);

const App = () => {
  return (
   <>
    <Navbar />
    <Hero />
    <HomeCards />
    <JobListings />
    <ViewAllJobs />
   </>
  );
};

export default App