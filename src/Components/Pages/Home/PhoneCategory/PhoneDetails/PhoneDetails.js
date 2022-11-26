import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';

const PhoneDetails = () => {
    const phoneDetails = useLoaderData();

    const[openModal,setOpenModal]=useState(false);
 

    
    const { picture, brandName, resalePrice, originalPrice, yearsOfUse, sellerPhone, submitDate, sellerName, details, model } = phoneDetails;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl p-10 my-10">
                <figure><img src={picture} alt="Album" /></figure>
                <div className="card-body sm:ml-20 p-10">
                    <h2 className="card-title ">{brandName.toUpperCase()}</h2>
                    <hr />
                    <p>Model No :{model}</p>
                    <hr />
                    <p>Seller Name :{sellerName}</p>
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
                    <label onClick={()=>setOpenModal(true)} htmlFor="booking-mobile" className="btn btn-primary">Book Now</label>
                        
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