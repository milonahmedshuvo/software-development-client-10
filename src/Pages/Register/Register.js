import React, { useContext } from 'react';
import { FaBeer, FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';




const Register = () => {
const {createUser, userUpdateProfile}=useContext(AuthContext)

    const handleUserRegister=(event)=>{
         event.preventDefault()
         const form=event.target;
         const name=form.name.value;
         const photourl=form.photourl.value;
         const email=form.email.value;
         const password=form.password.value;

         console.log(name, photourl, email, password)

         createUser(email,password)
         .then((result)=>{
            const user=result.user
            console.log(user)
            form.reset()
            handleProfileUpdate(name, photourl)
         })
         .catch((error)=>{
            console.error('User Error', error)
         })    
    }


    const handleProfileUpdate=(name, photourl)=>{
        const objectResult={
            displayName:name,
            photoURL: photourl,
        }
        userUpdateProfile(objectResult)
        .then(()=>{
            console.log()
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }


    return (
        <div>
            <div className="">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full  max-w-lg shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-bold mt-5">Register now!</h1>

                       <form onSubmit={handleUserRegister} className="card-body">


                            <div className="form-control">
                                <label className="label">
                                  <span className="label-text text-lg font-serif">Full name</span>
                                </label>
                                <input name="name" type="text" placeholder=" Your Name" className="input input-bordered" />
                           </div>


                           <div className="form-control">
                                <label className="label">
                                  <span className="label-text text-lg font-serif">Photo URl</span>
                                </label>
                                <input name="photourl" type="text" placeholder="Photo URL" className="input input-bordered" />
                           </div>


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
                                    
                                </label>
                            </div>


                                <button type="submit" className="btn btn-primary">Register</button>
    

                            <p className='text-lg font-serif mt-4'>Already have an account? Please <Link to="/login" className='text-blue-600'>Log in</Link></p>

                        </form>
                        
                       
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;