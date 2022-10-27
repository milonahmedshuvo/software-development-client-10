import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCart from '../CourseCart/CourseCart';
import Datails from '../Datails/Datails';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Course = () => {
    const course=useLoaderData()
   


    return (
        <div className='flex mt-20 mr-2 '>

            <div className='w-3/12 ml-10  mr-10     '>
                {
                    course.map((card)=> <LeftSideNav
                    key={card.id}
                    card={card}
                    ></LeftSideNav>)
                }
            </div>


            <div className='w-9/12 '>

                <div className='grid grid-cols-1 md:grid-cols-3  gap-y-14 gap-x-7'>
                {
                    course.map((item)=><CourseCart
                    key={item.id}
                    item={item}
                    ></CourseCart>)
                  }
                </div>
                 
            </div>
            
        </div>
    );
};

export default Course;