import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routeData } from '../data/routeData'

function Routes() {
  const router = createBrowserRouter(routeData)
  return (
    <RouterProvider router={router} />
  )
}

export default Routes