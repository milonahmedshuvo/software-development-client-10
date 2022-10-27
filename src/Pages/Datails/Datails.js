import React, { useRef } from 'react';
import {Link}from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { FaFilePdf} from 'react-icons/fa'
import ReactToPrint from 'react-to-print';



const Datails = () => {
   const singleCard=useLoaderData()
   const ref=useRef()
   console.log(singleCard)
   const {img, name, drescription, price, id}=singleCard;
    return (
 
      <div className='w-2/4 mx-auto mt-14 border-white'>  
            <div className='flex w-1/2 mx-auto justify-between my-10 items-center'>
              <h1 className='text-2xl text-orange-500 font-serif'>{name}</h1>
              <div className='w-8'>
               <ReactToPrint trigger={()=><FaFilePdf className='text-orange-600 text-2xl' title="download pdf"></FaFilePdf>} content={()=>ref.current}></ReactToPrint>
               </div>
            </div>

            





      <div ref={ref} className="card w-full bg-base-100 shadow-xl">
      <figure><img src={img} alt="Shoes" className='w-full' /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{drescription}</p>


        <div className="card-actions justify-between items-center mt-10">

         <div>
          <h1 className='text-3xl font-semibold text-orange-500'>${price}</h1>
         </div>
         <Link to={`/check/${id}`}><button className="btn bg-indigo-600 border-indigo-600">Get premium access</button></Link>
        </div>
      </div>
    </div>

    </div>

    );
};

export default Datails;