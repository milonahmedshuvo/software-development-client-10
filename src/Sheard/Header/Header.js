import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBeer,FaMoon, FaSun } from 'react-icons/fa';
import { AuthContext } from '../../Pages/AuthProvider/AuthProvider';



const Header = () => {
const {user, userSingOut, dark, setDark}=useContext(AuthContext)

const handleSingOut=()=>{
   userSingOut()
   .then(()=>{
    alert("SingOut Succesfull")
   })
   .catch((error)=>{
    console.log(error)
   })
}

const handlecheck = (dark)=>{
  setDark(dark)
}









    return (
      <div className="navbar bg-white drop-shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link to="/course">Courses</Link></li>
          <li><Link to='/faq'>FAQ</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
          </ul>
        </div>
        <img className='h-16 rounded-full' src="https://clickup.com/landing/images/clickup-logo-gradient.png" alt="" />
        <Link className="btn btn-ghost normal-case text-xl ">Software Development</Link>
         

        <label className="swap swap-rotate">
  
            
              <p onClick={()=>handlecheck(!dark)} type="checkbox" >
                
                {
                  dark ? <FaMoon></FaMoon> : <FaSun></FaSun>
                
                }
                </p>
              

            
              
            </label>


      </div>
    
      <div className="navbar-end mr-2">

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li><Link to="/course" className='font-semibold hover:text-orange-600 text-lg font-serif'>Courses</Link></li>
          <li><Link to='/faq'  className='font-semibold  hover:text-orange-600 text-lg font-serif'>FAQ</Link></li>
          <li><Link to='/blog'  className='font-semibold  hover:text-orange-600 text-lg font-serif'>Blog</Link></li>
          
        </ul>
      </div>
      
      {
              user?.uid ? 

              <>
              <li className='mr-2 list-none'> <Link onClick={handleSingOut}  className='font-semibold  hover:text-orange-600 text-lg font-serif'> SingOut</Link></li>
              <img title={user.displayName} className='h-10 w-10 rounded-full' src={user?.photoURL ? user.photoURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCB1iclV7Txnlqi-MjaZXWuec6CA1QP2N1Fg&usqp=CAU'}  alt="" /> 
              </>

             
            
               
              :

              <Link to="/login"  className='font-semibold  hover:text-orange-600 text-lg font-serif'>Login</Link>

            }
     
      </div>
    
    </div>

       
    );
};

export default Header;
