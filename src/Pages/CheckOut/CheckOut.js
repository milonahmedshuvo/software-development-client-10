import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const checkData=useLoaderData()
    

    return (
        
       <div className='lg:w-2/4 mx-auto mt-12 p-10'> 

        <div className="card card-side shadow-xl bg-violet-50">
        <figure><img src={checkData.img} alt="Movie" className='h-36'/></figure>
        <div className="card-body my-auto">
          <h2 className="card-title text-violet-800 font-bold">{checkData.name}</h2>
          
        </div>
      </div>

      </div>
    );
};

export default CheckOut;