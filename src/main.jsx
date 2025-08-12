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
import ProjectDetails from './Components/Project/ProjectDetails.jsx'
import Skills from './Components/Skills/Skills.jsx'
import Projects from './Components/Project/Project.jsx'
import Contact from './Components/Contact/Contact.jsx'
import AuthProvider from './context/AuthProvider.jsx'

const router=createBrowserRouter([
  {
   path:'/',
   Component:MainLayout,
   children:[
    {
      index:true,
      Component:Home
    },
    {
      path:'/details',
      element:<ProjectDetails/>
    },
    {
      path:'/hero',
      element:<Hero/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/qualification',
      element:<Qualification/>
    },
    {
      path:'/skills',
      element:<Skills/>
    },
    {
      path:'/project',
      element:<Projects/>
    },
    {
      path:'/contact',
      element:<Contact/>
    },
    {
      path:'/details/:id',
      element:<ProjectDetails/>
    }
   ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>

    </AuthProvider>
  </StrictMode>,
)
