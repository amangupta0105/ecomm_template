import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Layout from './componets/layout/Layout'
import Home from './componets/home/Home'
import About from './componets/about/About'
import Products from  './componets/products/Product'
import Dashboard from './componets/dashboard/Dashboard'
import Contact from './componets/contact/Contact'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/ >} >
        <Route path='' element ={<Home />} />
        <Route path='home' element ={<Home />}/>
        <Route path='about' element ={<About />}/>
        <Route path='products' element ={<Products />}/>
        <Route path='contact' element ={<Contact />}/>
        <Route path='dashboard' element ={<Dashboard />}/>
      </Route>
    )
  )
  return (
    <>
     <RouterProvider router={router} /> 
    </>
  )
}

export default App
