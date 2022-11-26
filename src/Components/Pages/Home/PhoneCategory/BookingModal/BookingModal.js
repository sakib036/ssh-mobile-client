import React, { useContext } from 'react';
import { AuthContext } from '../../../../../Contexts/AuthProvider';

const BookingModal = ({phoneDetails}) => {
    const { picture, brandName, resalePrice, originalPrice, yearsOfUse, sellerPhone, submitDate, sellerName, details, model } = phoneDetails;

  


    return (
        <div>
            <input type="checkbox" id="booking-mobile" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <form  >
                        <input type="text" value={brandName} disabled className=" input input-bordered w-full mt-3" />
                       
                        <input name="text" defaultValue={model} disabled type="text" placeholder="model" className=" input input-bordered w-full mt-3 " />
                        <input name="name" defaultValue={user?.displayName} disabled type="text" placeholder="name" className=" input input-bordered w-full mt-3 " />
                        <input name="email" defaultValue={user?.email} disabled type="text" placeholder="email" className=" input input-bordered w-full mt-3 " />
                        <input name="location"  type="text" placeholder="location" className=" input input-bordered w-full mt-3 " />
                        <input name="phone" type="text" placeholder="Buyers phone no" className=" input input-bordered w-full mt-3 " />
                        <input name="price" type="text"defaultValue={resalePrice} disabled placeholder="Buyers phone no" className=" input input-bordered w-full mt-3 " />
                        <br />
                        <input className='w-full btn btn-primary my-6' type="submit" value="Submit" />
                    </form>
                    <div className="modal-action">
                        <label htmlFor="booking-mobile" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;