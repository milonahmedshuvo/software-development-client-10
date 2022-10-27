import React from 'react';
import { FaStar} from 'react-icons/fa';
import { BsPeopleFill } from "react-icons/bs";
import {Link}from'react-router-dom'


const CourseCart = ({item}) => {
          
          const {id, img, name, drescription, price, ratting, students, author_id,author_img, author_name}=item;

    return (

        <div className="card card-compact w-full ml-0 bg-indigo-50 rounded drop-shadow-lg backdrop-opacity-60">
        <figure><img src={img} alt="Shoes" className='h-56 w-full rounded' /></figure>

         <div className='flex justify-between mt-2'>

         <div className='flex'>
            <span className='text-orange-300 flex items-center mr-2'>
              <FaStar></FaStar>
              <FaStar></FaStar> 
              </span>
            <p className='italic'>{ratting}</p>
          </div>


          <div className='flex items-center'>
           <span className='text-orange-300 mr-2'> <BsPeopleFill></BsPeopleFill></span>
           <p className='text-gray-500 italic'>{students}</p>
          </div>


          <div className='flex'>
            <span className='mr-2 text-yellow-600 font-bold italic'>$</span>
            <p className='text-orange-300 font-bold mr-2'>{price}</p>
          </div>
         
            
         </div>

        <div className="card-body ml-0">
          <h2 className="card-title text-lg font-serif">{name}</h2>
          <p>{
              drescription.length>120?
              <p className='font-sans font-normal'>{drescription.slice(0, 150)+'...reed more'}</p>:<p>{drescription}</p>           
            }</p>


          <div className="card-actions justify-between">
            
          <div className='flex items-center'>
            <img  src={author_img} alt=""  className='h-8 w-8 image-full rounded-full'/>
            <div className='ml-2 font-medium'>
              <p>{author_name}</p>
              <p>{author_id}</p>
            </div>
          </div>

          <button className="btn btn-sm bg-indigo-500 border-indigo-500"><Link to={`/datails/${id}`}>Reed more</Link></button>
          </div>
        </div>
      </div>


      
    );
};

export default CourseCart;