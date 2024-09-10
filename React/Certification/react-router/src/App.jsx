import React, { Suspense, lazy } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
const Home = lazy(()=> import('./components/Home'))
const Category = lazy(()=> import('./components/Category'))
const Product = lazy(()=> import('./components/Product'))



function App() {


  return (
    <>
    <ScrollToTop/>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path=':category' element={<Category />}/>
      <Route path='/product' element={<Product />}/>

    </Routes>
    </Suspense>
    </>
  )
}

export default App


// 1. Question: How can you implement route-based code splitting in a React SPA to improve performance?



// import React, { Suspense, lazy } from 'react';
// import { Routes, Route } from 'react-router-dom';

// const HomeComponent = lazy(() => import('./HomeComponent'));
// const CategoryComponent = lazy(() => import('./CategoryComponent'));
// const ProductDetailComponent = lazy(() => import('./ProductDetailComponent'));

// function App() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         <Route path="/" element={<HomeComponent />} />
//         <Route path="/category/:categoryId" element={<CategoryComponent />} />
//         <Route path="/category/:categoryId/product/:productId" element={<ProductDetailComponent />} />
//       </Routes>
//     </Suspense>
//   );
// }


// How can you handle scroll restoration when navigating between routes in a React SPA?





