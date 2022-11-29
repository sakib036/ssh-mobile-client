import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../../Common/Loading/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY)
console.log(stripePromise)

const Payment = () => {
    const order=useLoaderData();
    console.log(order)
    const navigation=useNavigation();
    const {mobileBrand,mobileModel, mobilePrice, buyersLocation,buyersMobileNo} = order;
    if(navigation.state==='loading'){
        return <Loading></Loading>
    }


    return (
        <div>
            <h3>Order for {mobileBrand},{mobileModel}</h3>
            <p>please Pay for {mobilePrice} for the {mobileModel} .</p>

            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm  order={order}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;