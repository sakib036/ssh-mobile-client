import { CheckIcon } from '@heroicons/react/24/solid';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../../../Common/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';

const PhoneDetails = () => {
    const phoneDetails = useLoaderData();

    const[openModal,setOpenModal]=useState(false);
 
    const { picture, brandName, resalePrice, originalPrice, yearsOfUse, sellerPhone, submitDate, sellerName, details, model,sellerEmail } = phoneDetails;

    const url = `http://localhost:5000/user/${sellerEmail}`;

    const { data: user= [], isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl p-10 my-10">
                <figure><img src={picture} alt="Album" /></figure>
                <div className="card-body sm:ml-20 p-10">
                    <h2 className="card-title ">{brandName.toUpperCase()}</h2>
                    <hr />
                    <p>Model No :{model}</p>
                    <hr />
                    {
                        user.isVerify?<p>Seller Name : <span> <CheckIcon className="h-6 w-6 text-green-500"/></span>  {sellerName}</p>:<p>Seller Name :{sellerName}</p>
                    }
                    <hr />
                    <p>Years Of Use :{yearsOfUse}</p>
                    <hr />
                    <p>Post date:{submitDate}</p>
                    <hr />
                    <p>Original Price:{originalPrice}</p>
                    <hr />
                    <p>Resell Price:{resalePrice}</p>
                    <hr />
                    <p>Details:{details}</p>
                    <hr />
                    <p>Seller Phone No:{sellerPhone}</p>
                    <hr />
                    <div className="card-actions justify-end">
                    {
                        user.isVerify?<label onClick={()=>setOpenModal(true)} htmlFor="booking-mobile" className="btn btn-primary"> <CheckIcon className="h-6 w-6 text-green-500"/> Book Now</label>:
                        <label onClick={()=>setOpenModal(true)} htmlFor="booking-mobile" className="btn btn-primary">Book Now</label>
                    }
                        
                    </div>
                </div>
            </div>
           <div>
          {
            openModal && 
            <BookingModal
            phoneDetails={phoneDetails} 
            
            ></BookingModal>
          }
           </div>
        </div>
    );
};

export default PhoneDetails;