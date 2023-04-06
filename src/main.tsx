import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import ErrorPage from './error-page'
import Page2 from './page2'
import Page3 from './page3'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: 'page2',
    element: <Page2 />
  },
  {
    path: 'page3',
    element: <Page3 />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
