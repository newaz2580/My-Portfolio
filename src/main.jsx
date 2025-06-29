import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layout/MainLayout.jsx'
import Home from './Components/Home/Home.jsx'
import Hero from './Components/Hero/Hero.jsx'
import About from './Components/About/About.jsx'
import Qualification from './Components/Qualification/Qualification.jsx'
const router=createBrowserRouter([
  {
   path:'/',
   Component:MainLayout,
   children:[
    {
      path:'/',
      Component:Home
    }
   ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
