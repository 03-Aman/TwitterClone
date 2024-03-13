import React from 'react'
import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Posts from './Pages/Posts';
import Login from './Pages/Login';
import ViewPost from './Pages/ViewPost';
import Registration from './Pages/Registration';
import Navbar from './components/Navbar';
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//     errorElement : <h1>Page not found</h1>
//   },
//   {
//     path: '/about',
//     element: <About />
//   },
//   {
//     path: '/contact',
//     element: <Contact />
//   },
//   {
//     path: '/posts/:postID',
//     element: <Posts />
//   },
//   {
//     path: '/posts',
//     element: <ViewPost />
//   },
//   {
//     path: '/login',
//     element: <Login />
//   },
//   {
//     path: '/register',
//     element: <Registration />
//   },
  
// ]);
const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/*' element={<h1>Page not found</h1>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/posts/:postID' element={<Posts/>} />
            <Route path='/posts' element={<ViewPost/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Registration/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App