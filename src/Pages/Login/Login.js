import React, { useContext, useState } from 'react';
import {Link, Navigate, useLocation, useNavigate}from 'react-router-dom';
import { FaBeer, FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const Login = () => {
const {singInUser, singInGoogle, singInGithub}=useContext(AuthContext)
const [error, setError]=useState('')

const navigate=useNavigate()
  const location=useLocation()
  const from=location.state?.from?.pathname || '/'

    const handleUserLogin=(event)=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;

        console.log(email, password)
        singInUser(email, password)
        .then((result)=>{
            const user=result.user;
            console.log(user)
            setError('')
            form.reset()
            navigate(from, {replace:true})
           
        })
        .catch((error)=>{
            console.error('Not login', error)
            setError(error.message)
        })
    }



    const providerValue= new GoogleAuthProvider()
    const handleSingInGoogle=()=>{
        singInGoogle(providerValue)
        .then((res)=>{
            const user=res.user;
            console.log(user)
            navigate(from, {replace:true})
        })
        .catch((err)=>{
            console.error(err.message)
        })
    }

    const githubProvider=new GithubAuthProvider()
    const handleSingInGithub=()=>{
        singInGithub(githubProvider)
        .then(()=>{
            alert('Login Succesfull')
            navigate(from, {replace:true})
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    
  
    return (
      <div className="">
      <div className="hero-content flex-col">
          <div className="text-center text-left">
              <h1 className="text-3xl font-bold">Login now!</h1>
              
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg hashadow-2xl bg-base-100">
             <form className="card-body" onSubmit={handleUserLogin}>

                 <div className="form-control">
                      <label className="label">
                        <span className="label-text text-lg font-serif">Email</span>
                      </label>
                      <input name="email" type="email" placeholder="email" className="input input-bordered" />
                 </div>


                      <div className="form-control">
                      <label className="label">
                          <span className="label-text text-lg font-serif">Password</span>
                      </label>
                      <input name="password" type="password" placeholder="password" className="input input-bordered" />
                      <label className="label">
                          <a href="#" className="label-text-alt link link-hover text-lg font-serif">Forgot password?</a>
                      </label>
                  </div>


                  <div className="form-control mt-6">
                      <button className="btn btn-primary">Login</button>
                  </div>


                  <div>
                  
                     <div className='mx-auto w-1/2 flex items-center mt-4'>
                        <hr className='inline-block border border-b-1 w-28 border-l-2 border-b-slate-300 mr-1'/>
                          <h3 className='inline-block text-gray-500 font-semibold'>Or</h3>
                        <hr className='inline-block border border-b-1 w-28 border-l-2 ml-1'/>
                     </div>

                  
                  <Link className="form-control mt-6">
                      <button onClick={handleSingInGoogle} className="btn btn-outline border-gray-300"> <FaGoogle className='mr-3 text-blue-400 text-2xl'></FaGoogle> Continue with google</button>
                  </Link>

                  <Link className="form-control mt-6">

                      <button onClick={handleSingInGithub} className="btn btn-outline border-gray-300 "> <FaGithub className='mr-3 text-green-400 text-2xl'></FaGithub>   Continue with github</button>
                  </Link>
              </div>
               <p className='text-lg font-serif mt-4'>New to It education? Please <Link to="/register" className='text-blue-600'>Register</Link></p>
               <p className='text-red-800 font-bold'>{error}</p>
              </form>

              

          </div>
      </div>
  </div>
        
  );
};

export default Login;