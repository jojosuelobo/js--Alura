import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Rotas 
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

// Páginas
import Home from "./routes/home/home"
import Achievements from "./routes/achievements/achievements"

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/achievements",
        element: <Achievements />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
