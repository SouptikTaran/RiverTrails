import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs';
import Faq from './components/FAQ/FAQ'
import ItineraryHome from './components/Itinerarys/ItineraryHome/ItineraryHome';
import ItineraryTemplate from './components/Itinerarys/ItineraryTemplate/ItineraryTemplate';




const router = createBrowserRouter(
  createRoutesFromElements(

        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='faq' element={<Faq />} />
          <Route path='itinerary'>
            <Route path='' element={<ItineraryHome />} />
            <Route path=':id' element={<ItineraryTemplate />} />
          </Route>
        </Route>

  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)