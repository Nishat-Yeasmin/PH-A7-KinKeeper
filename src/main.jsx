import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home/Home'
import Timeline from './Pages/Timeline/Timeline'
import States from './Pages/States/States'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import HomePage from './Pages/HomePage/HomePage'
import FriendDetails from './Pages/FriendDetails/FriendDetails'


const router = createBrowserRouter([{
  path: '/',
  element: <MainLayout/>,
  children: [
    // {
    //   index: true,
    //   element: <Home/>
    // },
    {
      index:true,
      element: <HomePage/>
    },
    {
      path: "/timeline",
      element: <Timeline/>
    },
    {
      path: "/states",
      element: <States/>
    },
    {
      path: "/friendDetails/:id",
      Component: FriendDetails,
      loader: () => fetch("/friendsData.json"),
    },
    {
      path: "*",
      element: <ErrorPage/>
    }
  ]
},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
