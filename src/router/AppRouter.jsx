import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from 'react-router-dom'

import RootLayout from './RootLayout';
import Homepage from '../pages/Homepage';
import About from '../pages/About';

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/about" element={<About />}/>
    </Route>
));

  
function AppRouter() {
    return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  }

export default AppRouter;