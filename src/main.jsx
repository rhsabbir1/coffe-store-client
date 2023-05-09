import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCoffe from './components/AddCoffe.jsx'
import UpdateCoffee from './components/UpdateCoffee.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    loader: ()=> fetch('http://localhost:5000/coffe')
  },
  {
    path:'addcoffe',
    element:<AddCoffe></AddCoffe>
  },
  {
    path:'updatecoffe',
    element:<UpdateCoffee></UpdateCoffee>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
