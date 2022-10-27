import React from 'react';
import {Link}from 'react-router-dom';




const LeftSideNav = ({card}) => {


    return (
        <div className='p-2 bg-indigo-600 text-white font-bold mb-5  pt-1 rounded pl-2 '>
             <Link to={`/datails/${card.id}`} >
            <p>{card.name}</p>    
            </Link>      
        </div>
    );
};

export default LeftSideNav;