import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PhoneDetails = () => {
    const phoneDetails = useLoaderData();
    const { picture, brandName, resalePrice, originalPrice, yearsOfUse, sellerPhone, submitDate, sellerName, details } = phoneDetails;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl p-10 my-10">
                <figure><img src={picture} alt="Album" /></figure>
                <div className="card-body text-center">
                    <h2 className="card-title text-center">{brandName}</h2>
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
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneDetails;