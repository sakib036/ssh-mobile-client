import React from 'react';
import onlne  from '../../../../assets/Online_Shoping_29-scaled-removebg-preview.png'

const Banner = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2'>
            <div className='justify-end sm:-mr-52 '>
                <img className='w-full' src={onlne} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center sm:ml-8 sm:mr-10 text-center m-6">
                <h1 className='text-5xl font-bold'>Are You Looking Budget Friendly Mobile Phone ??????? </h1>
               <p className='text-2xl'>These are the right places to buy Second Hand Mobile Phones, from cheap iPhones to any brand of Android smartphone</p>
            </div>

        </div>
    );
};

export default Banner;