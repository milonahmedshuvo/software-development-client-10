import {createBrowserRouter}from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import BlogPage from '../Pages/BlogPage/BlogPage'
import CheckOut from '../Pages/CheckOut/CheckOut'
import Course from '../Pages/Course/Course'
import Datails from '../Pages/Datails/Datails'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import PrivateRoute from '../Pages/PrivateRoute/PrivateRoute'
import Questions from '../Pages/Questions/Questions'
import Register from '../Pages/Register/Register'

export const router=createBrowserRouter([
    {path:'/', 
     element: <MainLayout></MainLayout>, children:[
        {path:'/login',
         element: <Login></Login>
        },
        {
         path:'register',
         element:<Register></Register>
        },
        {
         path:'/course',
         element: <Course></Course>,
         loader:()=>{
            return fetch('http://localhost:5000/course')
         }
        },
        {
         path:'/datails/:id',
         loader:({params})=>{
         return fetch(`http://localhost:5000/course/${params.id}`)
         },
         element:<Datails></Datails>

        },
        {
         path:'/check/:id',
         loader:({params})=>{
            return fetch(`http://localhost:5000/course/${params.id}`)
         },
         element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
        },
        {
         path:'/faq',
         element: <Questions></Questions>
        },
        {
         path:'/blog',
         element: <BlogPage></BlogPage>
        },
        {
         path:'/',
         element:<Home></Home>
        }
      
     ]},
     {
      path:'*',
      element: <ErrorPage></ErrorPage>
     }
    
])