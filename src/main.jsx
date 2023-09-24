import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root/Root'
import Home from './Pages/Home/Home'
import Donation from './Pages/Donation/Donation'
import Statistics from './Pages/Statistics/Statistics'
import ErrorPage from './Pages/ErrorPage/ErrorPage'

const donationCampaignRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./data.json")
      },
      {
        path: "/donation",
        element: <Donation></Donation>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={donationCampaignRouter}></RouterProvider>
  </React.StrictMode>,
)
