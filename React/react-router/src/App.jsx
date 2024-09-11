import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Category from './components/Category'
import Product from './components/Product'
import Layout from './components/Layout'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import CategoryDetail from './components/CategoryDetail'
import ProductDetail from './components/ProductDetail'
import { AuthProvider } from './components/AuthContext'

function App() {


  return (
    <>
    {/* <Layout /> */}
    <AuthProvider>
    <Routes>
      <Route path='/login'  element={<Login/>}/>
      <Route path='/' element={
        <PrivateRoute>
           <Home />
        </PrivateRoute>
     }
       />
      <Route path='/category' element={
        <PrivateRoute>
           <Category />
        </PrivateRoute>
      }/>
        <Route path='/category/:categoryID' element={
        <PrivateRoute>
           <CategoryDetail />
        </PrivateRoute>
      }/>
           <Route path='/product' element={
        <PrivateRoute>
          <Product />
        </PrivateRoute>
      }/>
      <Route path='/product/:productID' element={
        <PrivateRoute>
          <ProductDetail/>
        </PrivateRoute>
      }/>


    </Routes>
    </AuthProvider>
    </>
  )
}

export default App
