import React from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const AllChategoryPhone = () => {
    const brands=useLoaderData();

    const handelReport=(brand)=>{
        const agree = window.confirm(`Are You Sure You Wont to Report this ${brand.brandName}`);
        if(agree){
            fetch(`http://localhost:5000/mobile/${brand._id}`,{
            method:'PUT',
          
    
      })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                toast.success('Report to the Admin Success');
              
            }
        })
    
        .catch(error=>console.error(error))
        }
    
    }
    
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
                        <button onClick={()=>handelReport(brand)} className="btn btn-primary">Report to Admin</button>
                        <Link to={`/mobiles/${brand}/${brand._id}`}><button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>)
            }
            
        </div>
    );
};

export default AllChategoryPhone;