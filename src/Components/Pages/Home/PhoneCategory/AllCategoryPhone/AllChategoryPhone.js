import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllChategoryPhone = () => {
    const brands=useLoaderData();
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {
                brands.map(brand=><div key={brand._id} className="card lg:card-side bg-base-100 shadow-xl ">
                <figure><img className='h-56' src={brand.picture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{brand.brandName}</h2>
                    <p>Model: {brand.model}</p>
                    <p>Years Of Use {brand.yearsOfUse}</p>
                    <p>Price :<span className='text-xl font-bold'> {brand.resalePrice}</span></p>
                    <div className="card-actions justify-end">
                        <Link to={`/mobiles/${brand}/${brand._id}`}><button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>)
            }
            
        </div>
    );
};

export default AllChategoryPhone;