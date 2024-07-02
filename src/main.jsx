import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './Router/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Provider/AuthProvider.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
    </React.StrictMode>,
  </div>
)
