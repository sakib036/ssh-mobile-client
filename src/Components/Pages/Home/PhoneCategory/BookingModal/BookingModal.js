

import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../../Contexts/AuthProvider';

const BookingModal = ({ phoneDetails }) => {
    const {_id, picture, brandName, resalePrice, model } = phoneDetails;

    const { user } = useContext(AuthContext);
    const navigate=useNavigate();
    

    const handelSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const price = form.price.value;
        const model = form.model.value;
        const brand = form.brand.value;
        const location = form.location.value;

        const booking = {
            buyersName: name,
            buyersEmail:email,
            buyersMobileNo: phone,
            mobileBrand:brand,
            mobileModel:model,
            buyersLocation:location,
            phoneId:_id,
            picture,

            mobilePrice:price,

        }
        console.log(booking)

        fetch('https://ssh-mobile-server.vercel.app/bookings',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
               
                toast.success('booking successfully');
                navigate('/');
               
            }
            else{
                toast.error(data.message)
            }

        })

    }


    return (
        <div>
            <input type="checkbox" id="booking-mobile" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <form onSubmit={handelSubmit} >
                        <input name="brand" type="text" value={brandName} disabled className=" input input-bordered w-full mt-3" />

                        <input name="model" defaultValue={model} disabled type="text" placeholder="model" className=" input input-bordered w-full mt-3 " />
                        <input name="name" defaultValue={user?.displayName} disabled type="text" placeholder="name" className=" input input-bordered w-full mt-3 " />
                        <input name="email" defaultValue={user?.email} disabled type="text" placeholder="email" className=" input input-bordered w-full mt-3 " />
                        <input name="location" type="text" placeholder="location" className=" input input-bordered w-full mt-3 " />
                        <input name="phone" type="text" placeholder="Buyers phone no" className=" input input-bordered w-full mt-3 " />
                        <input name="price" type="text" defaultValue={resalePrice} disabled placeholder="Buyers phone no" className=" input input-bordered w-full mt-3 " />
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