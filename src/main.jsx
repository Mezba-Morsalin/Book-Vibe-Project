import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from './components/Layout/Layout.jsx';
import Home from './Pages/Home/Home.jsx';
import Books from './Pages/Books/Books.jsx';
import Error from './Err/Error.jsx';
import ReadPage from './Pages/Read/ReadPage.jsx';
const router = createBrowserRouter([{
  path : '/',
  Component : Layout,
  children : [{
    index : true,
    element : <Home></Home>
  },
  {
    path :'/books',
    element : <Books></Books>
  },
  {
    path :'/read',
    element :<ReadPage></ReadPage>
  }
],
errorElement : <Error></Error>
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
